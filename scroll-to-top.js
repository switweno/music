/**
 * زر الصعود للأعلى
 */
(function() {
    // انتظار تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Scroll-to-top module loaded');
        
        // الحصول على عناصر DOM
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        // التحقق من وجود الزر
        if (!scrollToTopBtn) {
            console.error('Scroll to top button not found!');
            return;
        }
        
        // إضافة مستمع حدث النقر للزر
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Scroll to top clicked');
            
            // التمرير للأعلى بشكل سلس
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // إضافة مستمع حدث التمرير للصفحة
        window.addEventListener('scroll', toggleScrollToTopButton);
        
        // تنفيذ أول مرة للتأكد من الحالة الصحيحة
        toggleScrollToTopButton();
        
        // تحقق كل 1 ثانية للتأكد من ظهور الزر إذا لزم الأمر
        setInterval(toggleScrollToTopButton, 1000);
    });
    
    /**
     * دالة للتبديل بين إظهار وإخفاء زر الصعود للأعلى
     */
    function toggleScrollToTopButton() {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        if (!scrollToTopBtn) return;
        
        // الحصول على موضع التمرير الحالي
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // الحصول على ارتفاع النافذة
        const windowHeight = window.innerHeight;
        
        // إظهار الزر عندما يتمرر المستخدم لأسفل أكثر من نصف ارتفاع النافذة
        if (scrollPosition > windowHeight / 2) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        
        // تحقق مما إذا كان المستخدم قريبًا من الفوتر لتعديل موضع الزر
        const footer = document.querySelector('.footer');
        if (footer) {
            const footerPosition = footer.getBoundingClientRect();
            
            // إذا كان الفوتر مرئيًا
            if (footerPosition.top < window.innerHeight) {
                // حساب المسافة من الفوتر
                const distance = window.innerHeight - footerPosition.top;
                
                // تعديل موضع الزر ليبقى فوق الفوتر
                if (distance > 0) {
                    const newBottom = Math.min(30 + distance, 100); // لا يتجاوز 100px
                    scrollToTopBtn.style.bottom = `${newBottom}px`;
                } else {
                    scrollToTopBtn.style.bottom = '30px';
                }
            } else {
                scrollToTopBtn.style.bottom = '30px';
            }
        }
    }
})();
