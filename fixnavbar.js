/**
 * إصلاح سلوك شريط التنقل ومشغل الصوت
 * يستخدم أسلوب مبسط لضمان الثبات والموثوقية
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("FixNavbar: Initializing");
    
    // العناصر الرئيسية
    const mainNav = document.getElementById('main-nav');
    const audioPlayer = document.getElementById('audio-player-container');
    const navHeight = 60; // ارتفاع القائمة الثابت
    
    // التأكد من وجود العناصر
    if (!mainNav || !audioPlayer) {
        console.error("FixNavbar: Required elements not found!");
        return;
    }
    
    // إعادة تعيين الطبقات لضمان أن القائمة فوق مشغل الصوت
    mainNav.style.zIndex = 1100;
    audioPlayer.style.zIndex = 1000;
    
    // تعيين المواضع الأولية - تنفيذ فوري
    resetPositions();
    
    // دالة إعادة تعيين المواضع
    function resetPositions() {
        // إزالة فئة الإخفاء من القائمة
        mainNav.classList.remove('hide');
        
        // تعيين موضع مشغل الصوت أسفل القائمة مباشرة بدون مسافة إضافية
        audioPlayer.style.top = navHeight + 'px';
        
        // تصحيح الهوامش لضمان عدم وجود مسافات إضافية
        audioPlayer.style.margin = '0';
        
        console.log("FixNavbar: Positions reset - Nav height:", navHeight, "px");
    }
    
    // التأكد من تطبيق الإعدادات بعد تحميل الصفحة بالكامل
    window.addEventListener('load', function() {
        // تأخير قصير لضمان تحميل جميع العناصر وحساب الأبعاد بشكل صحيح
        setTimeout(function() {
            resetPositions();
            console.log("FixNavbar: Positions reset after full page load");
            
            // تصحيح إضافي لموضع المحتوى
            const contentPadding = navHeight + audioPlayer.offsetHeight + 10;
            document.body.style.paddingTop = contentPadding + 'px';
            console.log("FixNavbar: Body padding-top set to:", contentPadding, "px");
        }, 100);
    });
    
    // متغيرات التمرير
    let lastScrollY = window.scrollY;
    let ticking = false; // تحسين الأداء
    
    // معالج حدث التمرير
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // معالجة التمرير
    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        // التمرير للأسفل ولسنا في أعلى الصفحة
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // إخفاء القائمة
            mainNav.classList.add('hide');
            // تحريك مشغل الصوت للأعلى
            audioPlayer.style.top = '0';
            console.log("FixNavbar: Menu hidden");
        } 
        // التمرير للأعلى أو في أعلى الصفحة
        else if (currentScrollY < lastScrollY || currentScrollY < 50) {
            // إظهار القائمة
            mainNav.classList.remove('hide');
            // تحريك مشغل الصوت للأسفل تحت القائمة
            audioPlayer.style.top = navHeight + 'px';
            console.log("FixNavbar: Menu shown");
        }
        
        lastScrollY = currentScrollY;
    }
    
    // إضافة معالج حدث التغيير في حجم النافذة
    window.addEventListener('resize', function() {
        resetPositions();
        
        // إعادة حساب هامش المحتوى
        const contentPadding = navHeight + audioPlayer.offsetHeight + 10;
        document.body.style.paddingTop = contentPadding + 'px';
    });
    
    // إعادة التعيين كل 5 ثوان للتأكد من سلامة الوضع
    // قد تكون مفيدة إذا حدثت أخطاء أثناء التفاعل
    setInterval(function() {
        // إذا كنا في أعلى الصفحة، تأكد من أن القائمة ظاهرة
        if (window.scrollY < 50) {
            resetPositions();
        }
    }, 5000);
    
    console.log("FixNavbar: Initialization complete");
});
