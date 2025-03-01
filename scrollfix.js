/**
 * ملف إصلاح سلوك التمرير للنافبار ومشغل الصوت
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("ScrollFix: Initializing");
    
    // الحصول على العناصر المطلوبة
    const mainNav = document.getElementById('main-nav');
    const audioPlayer = document.getElementById('audio-player-container');
    
    if (!mainNav || !audioPlayer) {
        console.error("ScrollFix: Required elements not found!");
        return;
    }
    
    // دالة التحكم في شريط التنقل
    function toggleNavbar(show) {
        if (show) {
            mainNav.classList.add('show');
        } else {
            mainNav.classList.remove('show');
        }
        
        // ضبط موضع مشغل الصوت
        if (show) {
            audioPlayer.style.top = mainNav.offsetHeight + 'px';
        } else {
            audioPlayer.style.top = '0';
        }
    }
    
    // إظهار شريط التنقل في البداية
    toggleNavbar(true);
    
    // نظام مراقبة التمرير محسّن
    let lastScrollTop = 0;
    let scrollDirection = 'none';
    let scrollTimer = null;
    
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;
        
        // تحديد اتجاه التمرير
        if (currentScrollPos > lastScrollTop + 5) {
            if (scrollDirection !== 'down') {
                scrollDirection = 'down';
                console.log("ScrollFix: Direction changed to DOWN");
            }
        } else if (currentScrollPos < lastScrollTop - 5) {
            if (scrollDirection !== 'up') {
                scrollDirection = 'up';
                console.log("ScrollFix: Direction changed to UP");
            }
        }
        
        // إجراء التغيير بعد توقف قصير
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
            if (scrollDirection === 'down' && currentScrollPos > 100) {
                toggleNavbar(false);
                console.log("ScrollFix: Hiding navbar");
            } else if (scrollDirection === 'up' || currentScrollPos <= 10) {
                toggleNavbar(true);
                console.log("ScrollFix: Showing navbar");
            }
        }, 50);
        
        lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
    });
    
    console.log("ScrollFix: Scroll handler initialized");
});
