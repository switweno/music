/**
 * حل مشكلة الفراغ بين القائمة والمشغل عند التمرير للأعلى
 * إصدار 1.2 - تحسين التنقل للألبومات
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("🔧 NavFix: Initializing...");
    
    // الحصول على العناصر الرئيسية
    const mainNav = document.getElementById('main-nav');
    const audioPlayer = document.getElementById('audio-player-container');
    
    // التأكد من وجود العناصر
    if (!mainNav || !audioPlayer) {
        console.error("NavFix: Required elements not found!");
        return;
    }
    
    // ضبط الثوابت
    const NAV_HEIGHT = 60; // ارتفاع القائمة بالبكسل
    
    // ضبط الخصائص الأساسية
    function configureLayout() {
        // 1. إعادة تعيين z-index لمنع التداخل
        mainNav.style.zIndex = '1100';
        audioPlayer.style.zIndex = '1000';
        
        // 2. التأكد من أن القائمة مرئية
        mainNav.classList.remove('hide');
        mainNav.style.transform = 'translateY(0)';
        
        // 3. تعيين خصائص موضع مشغل الصوت بشكل مباشر
        audioPlayer.style.position = 'fixed';
        audioPlayer.style.top = NAV_HEIGHT + 'px';
        
        // 4. إزالة أي هوامش قد تسبب المشكلة
        audioPlayer.style.margin = '0';
        audioPlayer.style.transition = 'top 0.15s ease'; // جعل الانتقال أسرع
        
        // 5. تعيين padding-top للمحتوى
        const audioPlayerHeight = audioPlayer.offsetHeight;
        document.body.style.paddingTop = (NAV_HEIGHT + audioPlayerHeight) + 'px';
        
        console.log(`NavFix: Layout set - Nav: ${NAV_HEIGHT}px, Audio: ${audioPlayerHeight}px`);
    }
    
    // تطبيق الإعدادات مباشرة
    configureLayout();
    
    // إعادة تطبيق الإعدادات بعد تحميل الصفحة بالكامل
    window.addEventListener('load', function() {
        // تأخير صغير للتأكد من حساب جميع الأبعاد بشكل صحيح
        setTimeout(function() {
            configureLayout();
        }, 100);
    });
    
    // متغيرات التمرير
    let lastScrollY = window.scrollY;
    let isThrottled = false;
    
    // دالة لضبط موضع المشغل مع تقليل وقت الانتقال عند التمرير للأعلى
    function adjustPlayerPosition(isScrollingUp) {
        if (isScrollingUp) {
            // عند التمرير للأعلى، نقوم بتعديل موضع المشغل قبل إظهار القائمة
            audioPlayer.style.top = NAV_HEIGHT + 'px';
            // في استدعاء منفصل لضمان تطبيق الخاصية بشكل فوري
            requestAnimationFrame(() => mainNav.style.transform = 'translateY(0)');
        } else {
            // عند التمرير للأسفل، نقوم بإخفاء القائمة أولاً ثم تعديل موضع المشغل
            mainNav.style.transform = 'translateY(-100%)';
            requestAnimationFrame(() => audioPlayer.style.top = '0');
        }
    }
    
    // معالجة حدث التمرير مع تحسين الأداء
    window.addEventListener('scroll', function() {
        if (isThrottled) return;
        isThrottled = true;
        
        // استخدام requestAnimationFrame لتحسين الأداء
        window.requestAnimationFrame(function() {
            const currentScrollY = window.scrollY;
            
            // عند التمرير للأسفل أكثر من مسافة معينة
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                adjustPlayerPosition(false); // التمرير للأسفل
            } 
            // عند التمرير لأعلى أو في بداية الصفحة
            else if (currentScrollY < lastScrollY || currentScrollY < 30) {
                adjustPlayerPosition(true); // التمرير للأعلى
            }
            
            lastScrollY = currentScrollY;
            isThrottled = false;
        });
    });
    
    // التعامل مع إعادة ضبط الحجم
    window.addEventListener('resize', configureLayout);
    
    // إضافة وظيفة التنقل المحسن للألبومات
    window.scrollToAlbum = function(albumId) {
        console.log(`NavFix: Scrolling to album: ${albumId}`);
        
        // عرض الألبوم المحدد أولاً (إذا توفرت وظيفة showAlbum)
        if (typeof window.showAlbum === 'function') {
            window.showAlbum(albumId);
        } else {
            // البديل إذا لم تكن showAlbum متوفرة: عرض الألبوم مباشرة
            const albums = document.querySelectorAll('.songs-container');
            albums.forEach(a => a.style.display = 'none');
            
            const targetAlbum = document.getElementById(`${albumId}-songs`);
            if (targetAlbum) {
                targetAlbum.style.display = 'flex';
                // تحديث المتغير العام للألبوم الحالي إذا كان موجوداً
                if (typeof window.currentAlbum !== 'undefined') {
                    window.currentAlbum = albumId;
                }
            }
        }
        
        // تأخير التمرير قليلاً لضمان تحديث DOM
        setTimeout(() => {
            // حساب الارتفاع الثابت (القائمة + مشغل الصوت)
            const combinedHeight = NAV_HEIGHT + audioPlayer.offsetHeight;
            
            // الحصول على موقع الألبوم
            const targetContainer = document.getElementById(`${albumId}-songs`);
            if (targetContainer) {
                // حساب موضع التمرير المطلوب
                const targetPosition = targetContainer.getBoundingClientRect().top + window.pageYOffset;
                const scrollTarget = targetPosition - combinedHeight - 10; // هامش إضافي
                
                // التمرير بسلاسة
                window.scrollTo({
                    top: scrollTarget,
                    behavior: 'smooth'
                });
                
                console.log(`NavFix: Scrolled to position: ${scrollTarget}px`);
                
                // التأكيد البصري - اختياري
                targetContainer.classList.add('highlight-album');
                setTimeout(() => targetContainer.classList.remove('highlight-album'), 1000);
            }
        }, 150); // تأخير قصير لضمان تحديث DOM
    };
    
    // إعداد أحداث الضغط على الألبومات
    document.querySelectorAll('.new-album-item, .album-showcase-item, .album-btn').forEach(item => {
        item.addEventListener('click', function() {
            // استخراج معرف الألبوم من data-album أو من onclick
            let albumId = this.getAttribute('data-album');
            
            if (!albumId && this.hasAttribute('onclick')) {
                const onclickAttr = this.getAttribute('onclick');
                const match = onclickAttr.match(/[\'\"]([^\'\"]+)[\'\"]/);
                if (match) {
                    albumId = match[1];
                }
            }
            
            if (albumId) {
                // استخدام وظيفة التمرير المحسنة
                window.scrollToAlbum(albumId);
            }
        });
    });
    
    console.log("🎉 NavFix: Initialization complete");
});
