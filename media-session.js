/**
 * إضافة دعم Media Session لإظهار صورة الألبوم في خلفية الهاتف والإشعارات
 */
(function() {
    // التحقق من دعم المتصفح لـ Media Session API
    if ('mediaSession' in navigator) {
        console.log('Media Session API supported');
        
        // متغير لتخزين مسار صورة الألبوم الحالي
        let currentAlbumArt = '';
        
        // إعداد المراقب لتغييرات التشغيل
        function setupMediaSessionHandlers() {
            // الحصول على عنصر الصوت
            const audioPlayer = document.getElementById('audio-player');
            if (!audioPlayer) return;
            
            // مراقبة بدء تشغيل الأغنية
            audioPlayer.addEventListener('play', updateMediaSession);
            
            // مراقبة تغيير الأغنية
            document.addEventListener('songChanged', updateMediaSession);
            
            // إعداد أزرار التحكم
            setupMediaControls();
        }
        
        // تحديث معلومات Media Session
        function updateMediaSession() {
            try {
                const audioPlayer = document.getElementById('audio-player');
                if (!audioPlayer || !audioPlayer.src) return;
                
                // الحصول على معلومات الأغنية الحالية
                const trackName = document.querySelector('#track-name span.modern-text')?.textContent || 'غير معروف';
                const albumName = document.querySelector('#album-name span.modern-text')?.textContent || 'غير معروف';
                
                // الحصول على صورة الألبوم
                const albumId = window.currentAlbum || '';
                const albumArt = getAlbumArtwork(albumId);
                
                console.log(`Updating Media Session - Track: ${trackName}, Album: ${albumName}`);
                
                // إذا تم العثور على صورة للألبوم، قم بتعيينها
                if (albumArt && albumArt !== currentAlbumArt) {
                    currentAlbumArt = albumArt;
                    
                    // تعيين بيانات وصفية للوسائط
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: trackName,
                        artist: 'Khalid Music Zik',
                        album: albumName,
                        artwork: [
                            { src: albumArt, sizes: '512x512', type: 'image/png' }
                        ]
                    });
                    
                    console.log('Media Session metadata set with artwork:', albumArt);
                }
            } catch (error) {
                console.error('Error updating Media Session:', error);
            }
        }
        
        // إعداد أزرار التحكم
        function setupMediaControls() {
            navigator.mediaSession.setActionHandler('play', () => {
                const audioPlayer = document.getElementById('audio-player');
                if (audioPlayer) {
                    audioPlayer.play();
                    document.getElementById('play-pause-btn').innerHTML = '<span class="material-icons">pause</span>';
                }
            });
            
            navigator.mediaSession.setActionHandler('pause', () => {
                const audioPlayer = document.getElementById('audio-player');
                if (audioPlayer) {
                    audioPlayer.pause();
                    document.getElementById('play-pause-btn').innerHTML = '<span class="material-icons">play_arrow</span>';
                }
            });
            
            navigator.mediaSession.setActionHandler('previoustrack', () => {
                if (typeof playPrevious === 'function') playPrevious();
            });
            
            navigator.mediaSession.setActionHandler('nexttrack', () => {
                if (typeof playNext === 'function') playNext();
            });
        }
        
        // الحصول على مسار صورة الألبوم
        function getAlbumArtwork(albumId) {
            if (!albumId) return null;
            
            // البحث عن صورة الألبوم من البيانات العالمية
            if (typeof window.allAlbums !== 'undefined') {
                const album = window.allAlbums.find(a => a.id === albumId);
                if (album && album.image) {
                    // تحويل المسار النسبي إلى مسار مطلق
                    const baseUrl = window.location.href.split('/').slice(0, -1).join('/');
                    return new URL(album.image, baseUrl).href;
                }
            }
            
            // التحقق مباشرة من DOM
            const albumImage = document.querySelector(`.new-album-item[data-album-id="${albumId}"] img`);
            if (albumImage && albumImage.src) {
                return albumImage.src;
            }
            
            return null;
        }
        
        // إضافة مستمع لحدث تغيير الأغنية
        window.addEventListener('load', () => {
            // إرسال حدث تغيير الأغنية عند تشغيل أغنية جديدة
            const originalChangeTrack = window.changeTrack;
            if (typeof originalChangeTrack === 'function') {
                window.changeTrack = function(audioFile, trackName) {
                    // استدعاء الدالة الأصلية
                    originalChangeTrack.apply(this, arguments);
                    
                    // إرسال حدث بتغيير الأغنية
                    const event = new CustomEvent('songChanged', { 
                        detail: { 
                            file: audioFile, 
                            name: trackName, 
                            album: window.currentAlbum 
                        } 
                    });
                    document.dispatchEvent(event);
                };
            }
            
            // إعداد معالجات Media Session
            setupMediaSessionHandlers();
            
            // تحديث Media Session في حالة وجود أغنية نشطة بالفعل
            setTimeout(updateMediaSession, 1000);
        });
    } else {
        console.log('Media Session API not supported in this browser');
    }
})();
