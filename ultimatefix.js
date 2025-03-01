/**
 * الحل النهائي لمشكلة الفراغ بين القائمة ومشغل الصوت عند التنقل السريع
 * يعمل بشكل متزامن تماماً لمنع أي فرصة لظهور المحتوى بينهما
 * الإصدار: 2.0
 */

(function() {
    'use strict';
    
    // تهيئة عند تحميل المستند
    document.addEventListener('DOMContentLoaded', function() {
        console.log('UltimateFix: Initializing advanced synchronization...');
        
        // العناصر الرئيسية
        const mainNav = document.getElementById('main-nav');
        const audioPlayer = document.getElementById('audio-player-container');
        const body = document.body;
        
        // التحقق من وجود العناصر
        if (!mainNav || !audioPlayer) {
            console.error('UltimateFix: Required elements missing!');
            return;
        }
        
        // ثوابت التكوين
        const NAV_HEIGHT = mainNav.offsetHeight || 60;
        const SCROLL_THRESHOLD = 30; // عتبة التمرير للإظهار/الإخفاء
        
        // إنشاء عنصر توصيل لمنع ظهور المحتوى بين القائمة والمشغل
        const connector = document.createElement('div');
        connector.id = 'nav-player-connector';
        connector.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: ${NAV_HEIGHT}px;
            background-color: #1F2937; /* لون خلفية القائمة */
            z-index: 999; /* أقل من القائمة وأكبر من المشغل */
            transform: translateY(0);
            transition: transform 0.15s ease;
        `;
        
        document.body.appendChild(connector);
        
        // متغيرات الحالة
        let lastScrollTop = 0;
        let scrollingDirection = null;
        let ticking = false;
        let resizeTimeout = null;
        
        // تطبيق الإعدادات المبدئية
        setupInitialState();
        
        function setupInitialState() {
            // ضبط z-index لضمان الترتيب الصحيح
            mainNav.style.zIndex = '1100';
            connector.style.zIndex = '1050';
            audioPlayer.style.zIndex = '1000';
            
            // ضبط الحالة المبدئية
            mainNav.classList.remove('hide');
            mainNav.style.transform = 'translateY(0)';
            connector.style.transform = 'translateY(0)';
            
            // تعيين موضع مشغل الصوت تحت القائمة
            audioPlayer.style.position = 'fixed';
            audioPlayer.style.top = NAV_HEIGHT + 'px';
            audioPlayer.style.left = '0';
            audioPlayer.style.width = '100%';
            audioPlayer.style.margin = '0';
            audioPlayer.style.transition = 'top 0.15s ease';
            
            // تصحيح padding للمحتوى لتعويض العناصر الثابتة
            const headerHeight = NAV_HEIGHT + audioPlayer.offsetHeight;
            body.style.paddingTop = `${headerHeight + 15}px`;
            
            console.log(`UltimateFix: Initial setup - Nav: ${NAV_HEIGHT}px, Total Header: ${headerHeight}px`);
        }
        
        // معالجة حدث التمرير مع تحسين الأداء
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
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // تحديد اتجاه التمرير مع مزيد من الدقة
            if (currentScrollTop > lastScrollTop + 5) {
                if (scrollingDirection !== 'down') {
                    scrollingDirection = 'down';
                    console.log('UltimateFix: Scrolling DOWN');
                }
                hideNavAndUpdatePlayer();
            } else if (currentScrollTop < lastScrollTop - 5 || currentScrollTop < SCROLL_THRESHOLD) {
                if (scrollingDirection !== 'up') {
                    scrollingDirection = 'up';
                    console.log('UltimateFix: Scrolling UP or at TOP');
                }
                showNavAndUpdatePlayer();
            }
            
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        }
        
        // إخفاء القائمة وتحديث موضع المشغل بشكل متزامن تماماً
        function hideNavAndUpdatePlayer() {
            // الخطوة 1: إخفاء العنصر الواصل قبل القائمة مباشرة
            connector.style.transform = 'translateY(-100%)';
            
            // الخطوة 2: إخفاء القائمة
            mainNav.style.transform = 'translateY(-100%)';
            
            // الخطوة 3: تحريك المشغل إلى الأعلى مباشرة (بدون تأخير)
            audioPlayer.style.top = '0';
            
            mainNav.classList.add('hide');
        }
        
        // إظهار القائمة وتحديث موضع المشغل بشكل متزامن تماماً
        function showNavAndUpdatePlayer() {
            // الخطوة 1: إظهار العنصر الواصل فوراً
            connector.style.transform = 'translateY(0)';
            
            // الخطوة 2: تحريك المشغل إلى الأسفل
            audioPlayer.style.top = NAV_HEIGHT + 'px';
            
            // الخطوة 3: إظهار القائمة
            mainNav.style.transform = 'translateY(0)';
            
            mainNav.classList.remove('hide');
        }
        
        // إعادة ضبط عند تغيير حجم النافذة
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                setupInitialState();
            }, 100);
        });
        
        // استمع إلى أحداث تغيير الاتجاه (للأجهزة المحمولة)
        window.addEventListener('orientationchange', function() {
            setupInitialState();
        });
        
        // استمع إلى حدث "touchmove" لتحسين الأداء على الأجهزة المحمولة
        let touchStartY = 0;
        
        window.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        window.addEventListener('touchmove', function(e) {
            const touchY = e.touches[0].clientY;
            const diff = touchStartY - touchY;
            
            // تجاهل التمريرات الصغيرة جداً
            if (Math.abs(diff) < 5) return;
            
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    // تمرير لأسفل
                    if (diff > 0) {
                        hideNavAndUpdatePlayer();
                    }
                    // تمرير لأعلى
                    else {
                        showNavAndUpdatePlayer();
                    }
                    
                    ticking = false;
                });
                
                ticking = true;
            }
            
            touchStartY = touchY;
        }, { passive: true });
        
        // تصحيح منع الفراغات بين العناصر باستخدام CSS
        const style = document.createElement('style');
        style.textContent = `
            .main-nav, #audio-player-container {
                backface-visibility: hidden;
                will-change: transform;
                transform: translateZ(0);
            }
            
            #nav-player-connector {
                backface-visibility: hidden;
                will-change: transform;
                transform: translateZ(0);
            }
            
            body {
                overflow-x: hidden;
            }
            
            /* تحسين التوافق مع الهواتف المحمولة */
            @media (max-width: 768px) {
                .main-nav {
                    transition: transform 0.2s ease !important;
                }
                
                #audio-player-container {
                    transition: top 0.2s ease !important;
                }
            }
        `;
        document.head.appendChild(style);
        
        console.log('UltimateFix: Advanced synchronization initialized!');
        
        // مراقبة مستمرة للتأكد من التزامن
        setInterval(function() {
            // إذا كانت القائمة ظاهرة، تأكد من أن المشغل في مكانه الصحيح
            if (mainNav.style.transform === 'translateY(0px)' || !mainNav.classList.contains('hide')) {
                if (audioPlayer.style.top !== NAV_HEIGHT + 'px') {
                    audioPlayer.style.top = NAV_HEIGHT + 'px';
                }
            } 
            // إذا كانت القائمة مخفية، تأكد من أن المشغل في الأعلى
            else {
                if (audioPlayer.style.top !== '0px') {
                    audioPlayer.style.top = '0';
                }
            }
        }, 500);
    });
})();
