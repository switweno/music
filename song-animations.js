/**
 * إضافة مؤثرات حركية للأغاني عند عرضها مع إصلاح مشكلة الصفحة البيضاء
 */
(function() {
    // عرض الأغاني بشكل متتابع مع تأثير التساقط - نسخة محسّنة
    window.animateSongsSequentially = function(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error("Container not found:", containerSelector);
            return;
        }
        
        console.log(`Animating songs in ${containerSelector}`);
        
        // تأكد من أن الحاوية مرئية
        container.style.display = 'flex';
        
        // الحصول على جميع أغاني الألبوم
        const songs = container.querySelectorAll('.song');
        console.log(`Found ${songs.length} songs to animate`);
        
        if (songs.length === 0) {
            console.warn("No songs found in container");
            return;
        }
        
        // تأكد من أن الأغاني مرئية أولاً قبل التحريك
        songs.forEach(song => {
            // ضبط نمط أساسي للأغاني للتأكد من أنها مرئية
            song.style.opacity = '1';
            song.style.display = 'flex';
        });
        
        // تطبيق التحريك بعد تأخير قصير للتأكد من ظهور الأغاني
        setTimeout(() => {
            songs.forEach((song, index) => {
                // وقت التأخير المتزايد لكل أغنية لاحقة
                const delay = 80 + (index * 60);
                
                // إعادة تعيين الأغنية للتحريك
                song.style.opacity = '0';
                song.classList.remove('animate-in');
                
                // تطبيق التحريك بعد التأخير
                setTimeout(() => {
                    song.classList.add('animate-in');
                }, delay);
            });
        }, 100);
    };
    
    // نسخة أكثر أمانًا من showAlbum - للتأكد من عرض الأغاني بشكل صحيح
    document.addEventListener('DOMContentLoaded', function() {
        // احتفظ بالدالة الأصلية
        if (typeof window.showAlbum === 'function') {
            const originalShowAlbum = window.showAlbum;
            
            // استبدال بنسخة أكثر أمانًا
            window.showAlbum = function(albumId) {
                console.log(`Enhanced showAlbum called with album: ${albumId}`);
                
                // احصل على حاوية الألبوم
                const albumElement = document.getElementById(`${albumId}-songs`);
                if (!albumElement) {
                    console.error(`Album element #${albumId}-songs not found`);
                    return;
                }
                
                // إخفاء جميع حاويات الألبوم
                document.querySelectorAll('.songs-container').forEach(a => {
                    a.style.display = 'none';
                });
                
                // عرض حاوية الأغاني المحددة فوراً - لا تعتمد على التحريك للإظهار
                albumElement.style.display = 'flex';
                
                // التأكد من أن جميع الأغاني مرئية (للحالات الطارئة)
                albumElement.querySelectorAll('.song').forEach(song => {
                    song.style.opacity = '1';
                    song.style.display = 'flex';
                });
                
                // تحديث الألبوم الحالي فورًا
                window.currentAlbum = albumId;
                window.currentTrackIndex = 0;
                
                // حساب الإزاحة للتمرير
                const playerHeight = document.getElementById('audio-player-container')?.offsetHeight || 0;
                const extraPadding = 30;
                
                // التمرير إلى الموضع
                setTimeout(() => {
                    const albumRect = albumElement.getBoundingClientRect();
                    const offsetPosition = window.pageYOffset + albumRect.top - playerHeight - extraPadding;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // تطبيق التحريك - مع التأكد من رؤية الأغاني بغض النظر عن نجاح التحريك
                    try {
                        albumElement.classList.add('album-focus');
                        animateSongsSequentially(`#${albumId}-songs`);
                        
                        setTimeout(() => {
                            albumElement.classList.remove('album-focus');
                        }, 1000);
                    } catch (error) {
                        console.error("Animation error:", error);
                        // التأكد من أن الأغاني مرئية حتى لو فشل التحريك
                        albumElement.querySelectorAll('.song').forEach(song => {
                            song.style.opacity = '1';
                        });
                    }
                }, 100);
            };
            
            console.log('Enhanced album display with improved animations');
        } else {
            console.warn('Original showAlbum function not found');
        }
    });
    
    // إضافة مستمع التحميل للتأكد من أن الرمز يعمل بعد تحميل الصفحة بالكامل
    window.addEventListener('load', function() {
        console.log('Song animations module fully loaded');
        
        // إصلاح احتياطي لمشكلة عدم ظهور الأغاني
        setTimeout(() => {
            const currentAlbumId = window.currentAlbum;
            if (currentAlbumId) {
                const albumContainer = document.getElementById(`${currentAlbumId}-songs`);
                if (albumContainer) {
                    console.log("Applying emergency fix to ensure songs are visible");
                    albumContainer.style.display = 'flex';
                    
                    // جعل جميع الأغاني مرئية
                    albumContainer.querySelectorAll('.song').forEach(song => {
                        song.style.opacity = '1';
                        song.style.display = 'flex';
                    });
                }
            }
        }, 2000);
    });
})();
