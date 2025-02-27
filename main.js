// قائمة الأغاني
const songs = [
   { file: '01 star chaabi.mp3', name: 'star chaabi 1', album: 'starchaabi' },
    { file: '02 star chaabi.mp3', name: 'star chaabi 2 ', album:'starchaabi' },
    { file: '03 star cha3bi.mp3', name: 'star chaabi 3', album: 'starchaabi' },
    { file: '04 star cha3bi.mp3', name: 'star chaabi 4', album: 'starchaabi' },
	{ file: '05 star cha3bi.mp3', name: 'star chaabi 5', album: 'starchaabi' },
	{ file: '06 star cha3bi.mp3', name: 'star chaabi 6', album: 'starchaabi' },
    { file: '07 star cha3bi.mp3', name: 'star chaabi 7', album: 'starchaabi' },
    { file: '07 star cha3bi.mp3', name: 'star chaabi 7', album: 'starchaabi' },
    { file: '08 star cha3bi.mp3', name: 'star chaabi 8', album: 'starchaabi' },
    
    { file: '02 casa star.mp3', name: 'casa star 1', album: 'casastar' },
    { file: '03 casa star.mp3', name: 'casa star 2 ', album: 'casastar' },
    { file: '04 casa star.mp3', name: 'casa star 3', album: 'casastar' },
    { file: '05 casa star.mp3', name: 'casa star 4', album: 'casastar' },
	{ file: '06 casa star.mp3', name: 'casa star 5', album: 'casastar' },
	{ file: '07 casa star.mp3', name: 'casa star 6', album: 'casastar' },
    { file: '08 casa star.mp3', name: 'casa star 7', album: 'casastar' },
    { file: '09 casa star.mp3', name: 'casa star 8', album: 'casastar' },
    { file: '10 casa star.mp3', name: 'casa star 9', album: 'casastar' },
    { file: '12 casa star.mp3', name: 'casa star 10', album: 'casastar' },
    { file: '13 casa star.mp3', name: 'casa star 11', album: 'casastar' },
    
    { file: '01 sentral cha3bi.mp3', name: 'sentral chaabi 1', album: 'sentralchaabi' },
    { file: '02 sentral cha3bi.mp3', name: 'sentral chaabi 2 ', album: 'sentralchaabi' },
    { file: '03 sentral cha3bi.mp3', name: 'sentral chaabi 3', album: 'sentralchaabi' },
    { file: '04 sentral cha3bi.mp3', name: 'sentral chaabi 4', album: 'sentralchaabi' },
	{ file: '05 sentral cha3bi.mp3', name: 'sentral chaabi 5', album: 'sentralchaabi' },
	{ file: '06 sentral cha3bi.mp3', name: 'sentral chaabi 6', album: 'sentralchaabi' },
    { file: '07 sentral cha3bi.mp3', name: 'sentral chaabi 7', album: 'sentralchaabi' },
    { file: '08 sentral cha3bi.mp3', name: 'sentral chaabi 8', album: 'sentralchaabi' },
    { file: '09 sentral cha3bi.mp3', name: 'sentral chaabi 9', album: 'sentralchaabi' },
    { file: '10 sentral cha3bi.mp3', name: 'sentral chaabi 10', album: 'sentralchaabi' },
    { file: '11 sentral cha3bi.mp3', name: 'sentral chaabi 11', album: 'sentralchaabi' },
    { file: '12 sentral cha3bi.mp3', name: 'sentral chaabi 12', album: 'sentralchaabi' },
    { file: '13 sentral cha3bi.mp3', name: 'sentral chaabi 13', album: 'sentralchaabi' },
    { file: '14 sentral cha3bi.mp3', name: 'sentral chaabi 14', album: 'sentralchaabi' }, 
    { file: '15 sentral cha3bi.mp3', name: 'sentral chaabi 15 ',album: 'sentralchaabi' },
    { file: '16 sentral cha3bi.mp3', name: 'sentral chaabi 16', album: 'sentralchaabi' },
    { file: '17 sentral cha3bi.mp3', name: 'sentral chaabi 17', album: 'sentralchaabi' },
    
    { file: '01 nayda nouda.mp3', name: 'nayda nouda 1', album: 'naydanouda' },
    { file: '02 nayda nouda.mp3', name: 'nayda nouda 2 ', album: 'naydanouda' },
    { file: '03 nayda nouda.mp3', name: 'nayda nouda 3', album: 'naydanouda' },
    { file: '04 nayda nouda.mp3', name: 'nayda nouda 4', album: 'naydanouda' },
	{ file: '05 nayda nouda.mp3', name: 'nayda nouda 5', album: 'naydanouda' },
	{ file: '06 nayda nouda.mp3', name: 'nayda nouda 6', album: 'naydanouda' },
    { file: '07 nayda nouda.mp3', name: 'nayda nouda 7', album: 'naydanouda' },
    { file: '08 nayda nouda.mp3', name: 'nayda nouda 8', album: 'naydanouda' },
    { file: '09 nayda nouda.mp3', name: 'nayda nouda 9', album: 'naydanouda' },
    { file: '10 nayda nouda.mp3', name: 'nayda nouda 10', album: 'naydanouda' },
    { file: '11 nayda nouda.mp3', name: 'nayda nouda 11', album: 'naydanouda' },
    { file: '12 nayda nouda.mp3', name: 'nayda nouda 12', album: 'naydanouda' },
    { file: '13 nayda nouda.mp3', name: 'nayda nouda 13', album: 'naydanouda' },
    { file: '14 nayda nouda.mp3', name: 'nayda nouda 14', album: 'naydanouda' },
    { file: '15 nayda nouda.mp3', name: 'nayda nouda 15 ',album: 'naydanouda' },
    { file: '16 nayda nouda.mp3', name: 'nayda nouda 16', album: 'naydanouda' },
    { file: '17 nayda nouda.mp3', name: 'nayda nouda 17', album: 'naydanouda' },
	{ file: '18 nayda nouda.mp3', name: 'nayda nouda 18', album: 'naydanouda' },
	{ file: '19 nayda nouda.mp3', name: 'nayda nouda 19', album: 'naydanouda' },
    { file: '20 nayda nouda.mp3', name: 'nayda nouda 20', album: 'naydanouda' },
    { file: '21 nayda nouda.mp3', name: 'nayda nouda 21', album: 'naydanouda' },
    { file: '22 nayda nouda.mp3', name: 'nayda nouda 22', album: 'naydanouda' },
    { file: '23 nayda nouda.mp3', name: 'nayda nouda 23', album: 'naydanouda' },
    
    { file: '01 kamal el 3abdi.mp3', name: 'kamal el 3abdi 1', album: 'kamalnew' },
    { file: '02 kamal el 3abdi.mp3', name: 'kamal el 3abdi 2', album: 'kamalnew' },
    { file: '03 kamal el 3abdi.mp3', name: 'kamal el 3abdi 3', album: 'kamalnew' },
    { file: '04 kamal el 3abdi.mp3', name: 'kamal el 3abdi 4', album: 'kamalnew' },
    { file: '05 kamal el 3abdi.mp3', name: 'kamal el 3abdi 5', album: 'kamalnew' },
    { file: '06 kamal el 3abdi.mp3', name: 'kamal el 3abdi 6', album: 'kamalnew' },
    
    { file: '01 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 1', album: 'popular' },
    { file: '02 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 2', album: 'popular' },
    { file: '03 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 3', album: 'popular' },
    { file: '04 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 4', album: 'popular' },
	{ file: '05 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 5', album: 'popular' },
	{ file: '06 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 6', album: 'popular' },
    { file: '07 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 7', album: 'popular' },
    { file: '08 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 8', album: 'popular' },
    { file: '09 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 9', album: 'popular' },
    { file: '10 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 10', album: 'popular' },
    { file: '11 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 11', album: 'popular' },
    { file: '12 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 12', album: 'popular' },
    { file: '13 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 13', album: 'popular' },
    { file: '14 cha3biat shab loutar.mp3.mp3', name: 'shab loutar 14', album: 'popular' }, 
    
    { file: '02 khalij.mp3', name: 'أغنية خليجية 1', album: 'khalij' },
    { file: '01 khalij.mp3', name: 'أغنية خليجية 2', album: 'khalij' },
    { file: '03 khalij.mp3', name: 'أغنية خليجية 3', album: 'khalij' },
    { file: '04 khalij.mp3', name: 'أغنية خليجية 4', album: 'khalij' },
    { file: '05 khalij.mp3', name: 'أغنية خليجية 5', album: 'khalij' },
    { file: '06 khalij.mp3', name: 'أغنية خليجية 6', album: 'khalij' },
    { file: '07 khalij.mp3', name: 'أغنية خليجية 7', album: 'khalij' },
    { file: '08 khalij.mp3', name: 'أغنية خليجية 8', album: 'khalij' },
    { file: '09 khalij.mp3', name: 'أغنية خليجية 9', album: 'khalij' },
    { file: '10 khalij.mp3', name: 'أغنية خليجية 10', album: 'khalij' },
    { file: '11 khalij.mp3', name: 'أغنية خليجية 11', album: 'khalij' },
    { file: '12 khalij.mp3', name: 'أغنية خليجية 12', album: 'khalij' },
    { file: '13 khalij.mp3', name: 'أغنية خليجية 13', album: 'khalij' },
    { file: '14 khalij.mp3', name: 'أغنية خليجية 14', album: 'khalij' },
    { file: '15 khalij.mp3', name: 'أغنية خليجية 15', album: 'khalij' },
    { file: '16 khalij.mp3', name: 'أغنية خليجية 16', album: 'khalij' },
    { file: '17 khalij.mp3', name: 'أغنية خليجية 17', album: 'khalij' },
    
];

const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-btn");
const progressBar = document.getElementById("progress-bar");
const volumeControl = document.getElementById("volume-control");
const volumeControlContainer = document.getElementById("volume-control-container");
const volumeButton = document.getElementById("volume-btn");
const currentTimeElement = document.getElementById("current-time");
const durationTimeElement = document.getElementById("duration-time");

let currentTrackIndex = 0;
let isRandomPlaying = false;
let currentAlbum = "starchaabi"; // الألبوم الافتراضي
let isSeeking = false; // متغير للتحقق من السحب

// متغيرات للمفضلة
let favorites = [];

// استدعاء المفضلة عند تحميل الصفحة
function loadFavorites() {
    const storedFavorites = localStorage.getItem('musicFavorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
        updateFavoritesUI();
    }
}

// حفظ المفضلة في التخزين المحلي
function saveFavorites() {
    localStorage.setItem('musicFavorites', JSON.stringify(favorites));
}

// إضافة أو إزالة أغنية من المفضلة
function toggleFavorite(event, songId, audioFile, songName, artistName) {
    // منع انتشار الحدث لتجنب تشغيل الأغنية عند النقر على زر المفضلة
    event.stopPropagation();
    
    const songIndex = favorites.findIndex(song => song.id === songId);
    const button = event.currentTarget;
    const icon = button.querySelector('i');
    
    if (songIndex === -1) {
        // إضافة الأغنية إلى المفضلة
        favorites.push({
            id: songId,
            file: audioFile,
            name: songName,
            artist: artistName || '',
            album: currentAlbum
        });
        
        // تغيير الأيقونة وإضافة تنشيط
        icon.textContent = 'favorite';
        button.classList.add('active');
        
        // إظهار رسالة تأكيد
        showNotification(`تمت إضافة "${songName}" إلى المفضلة`);
    } else {
        // إزالة الأغنية من المفضلة
        favorites.splice(songIndex, 1);
        
        // تغيير الأيقونة وإزالة التنشيط
        icon.textContent = 'favorite_border';
        button.classList.remove('active');
        
        // إظهار رسالة تأكيد
        showNotification(`تمت إزالة "${songName}" من المفضلة`);
    }
    
    // حفظ التغييرات وتحديث واجهة المستخدم
    saveFavorites();
    updateFavoritesUI();
}

// تحديث واجهة المستخدم للمفضلة
function updateFavoritesUI() {
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = '';

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<div class="no-favorites-message">لم يتم إضافة أي أغاني للمفضلة بعد</div>';
        return;
    }

    favorites.forEach(song => {
        const favoriteItem = document.createElement('div');
        favoriteItem.className = 'favorite-item';
        favoriteItem.setAttribute('onclick', `changeTrack('${song.file}', '${song.name}')`);
        
        favoriteItem.innerHTML = `
            <i class="material-symbols-outlined">music_note</i>
            <div class="song-title">${song.name}</div>
            <button class="favorite-btn active" onclick="toggleFavorite(event, '${song.id}', '${song.file}', '${song.name}', '')">
                <i class="material-icons">favorite</i>
            </button>
        `;
        
        favoritesContainer.appendChild(favoriteItem);
    });
}

// تحديث حالة أزرار المفضلة
function updateFavoriteButtons() {
    document.querySelectorAll('.song').forEach(songElement => {
        const songId = songElement.dataset.songId;
        if (!songId) return;
        
        const isFavorite = favorites.some(song => song.id === songId);
        const favoriteBtn = songElement.querySelector('.favorite-btn');
        if (!favoriteBtn) return;
        
        const icon = favoriteBtn.querySelector('i');
        if (isFavorite) {
            icon.textContent = 'favorite';
            favoriteBtn.classList.add('active');
        } else {
            icon.textContent = 'favorite_border';
            favoriteBtn.classList.remove('active');
        }
    });
}

// عرض إشعار
function showNotification(message) {
    // إنشاء عنصر الإشعار إذا لم يكن موجوداً بالفعل
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            z-index: 1001;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        document.body.appendChild(notification);
    }
    
    // عرض الرسالة
    notification.textContent = message;
    notification.style.opacity = '1';
    
    // إخفاء الإشعار بعد 3 ثوان
    setTimeout(() => {
        notification.style.opacity = '0';
    }, 3000);
}

// دالة عرض الألبوم
function showAlbum(album) {
    const albums = document.querySelectorAll('.songs-container');
    albums.forEach(a => a.style.display = 'none'); // إخفاء جميع الألبومات

    document.getElementById(`${album}-songs`).style.display = 'flex'; // عرض الألبوم المحدد

    currentAlbum = album; // تحديث الألبوم الحالي
    currentTrackIndex = 0; // إعادة المؤشر إلى البداية
}

// دالة تنسيق الوقت
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// تحسين دالة تغيير الأغنية لاسترداد المدة تلقائيًا إذا لم تكن متاحة
function changeTrack(audioFile, trackName) {
    if (isRandomPlaying) isRandomPlaying = false;

    // البحث عن معلومات الأغنية الحالية
    const currentSong = songs.find(song => song.file === audioFile);
    const artistName = currentSong ? currentSong.artist : '';
    
    document.getElementById("track-name").textContent = trackName;
    const audioSource = document.getElementById("audio-source");
    audioSource.src = audioFile;ات الصوتية
    audioSource.src = './music/' + audioFile;
    audioPlayer.load();
    audioPlayer.play();وتشغيل الملف الصوتي
    audioPlayer.load();
    playPauseButton.innerHTML = '<span class="material-icons">pause</span>';
    
    // تحديث عرض اسم الفنان إذا كان هناك عنصر له
    const artistDisplayElement = document.getElementById("current-artist");
    if (artistDisplayElement && artistName) {
        artistDisplayElement.textContent = artistName;material-icons">pause</span>';
    }   })
        .catch(error => {
    saveLastPlayed(audioFile, trackName, currentAlbum);
}           console.error("Error playing audio:", error);
            alert("حدث خطأ في تشغيل الملف الصوتي");
        });
    }

    // تحديث عرض اسم الفنان إذا كان هناك عنصر له
    const artistDisplayElement = document.getElementById("current-artist");
    if (artistDisplayElement && artistName) {
        artistDisplayElement.textContent = artistName;
    }

    saveLastPlayed(audioFile, trackName, currentAlbum);
}

// تحديث شريط التقدم عند تحميل بيانات الأغنية
audioPlayer.addEventListener("loadedmetadata", () => {
    if (!isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
        progressBar.value = 0; // ضمان أن الشريط يبدأ من 0
        currentTimeElement.textContent = "0:00"; // ضبط الوقت المبدئي
        durationTimeElement.textContent = formatTime(audioPlayer.duration); // تحديث مدة الأغنية الفعلية
    }
});

// تحديث شريط التقدم أثناء التشغيل (يتم تعطيله أثناء السحب)
audioPlayer.addEventListener("timeupdate", () => {
    if (!isSeeking && !isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
        currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
    }
});

// عندما يبدأ المستخدم في سحب شريط التقدم
progressBar.addEventListener("mousedown", () => {
    isSeeking = true; // إيقاف التحديث التلقائي
});

// تحديث الوقت أثناء السحب
progressBar.addEventListener("input", () => {
    if (!isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
        const newTime = (progressBar.value / 100) * audioPlayer.duration;
        currentTimeElement.textContent = formatTime(newTime); // تحديث عرض الوقت فقط
    }
});

// عند الإفلات، يتم تثبيت الوقت واستئناف التحديث التلقائي
progressBar.addEventListener("mouseup", () => {
    if (!isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    }
    isSeeking = false; // إعادة التحديث التلقائي
});

// تأكيد التحديث عند تغيير القيمة (للأجهزة التي لا تدعم mouseup)
progressBar.addEventListener("change", () => {
    if (!isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    }
    isSeeking = false;
});

// تغيير مستوى الصوت والتعامل مع زر كتم الصوت
volumeControl.addEventListener("input", () => {
    audioPlayer.volume = volumeControl.value / 100;
    audioPlayer.muted = (audioPlayer.volume === 0); // كتم الصوت إذا كان 0
    volumeButton.innerHTML = audioPlayer.muted
        ? '<span class="material-icons">volume_off</span>'
        : '<span class="material-icons">volume_up</span>';
});

// تشغيل/إيقاف الأغنية
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<span class="material-icons">pause</span>';
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<span class="material-icons">play_arrow</span>';
    }
}

// تشغيل الأغنية التالية
function playNext() {
    const activeSongs = songs.filter(song => song.album === currentAlbum);
    currentTrackIndex = (currentTrackIndex + 1) % activeSongs.length;
    changeTrack(activeSongs[currentTrackIndex].file, activeSongs[currentTrackIndex].name);
}

// تشغيل الأغنية السابقة
function playPrevious() {
    const activeSongs = songs.filter(song => song.album === currentAlbum);
    currentTrackIndex = (currentTrackIndex - 1 + activeSongs.length) % activeSongs.length;
    changeTrack(activeSongs[currentTrackIndex].file, activeSongs[currentTrackIndex].name);
}

// حفظ آخر أغنية مشغلة
function saveLastPlayed(file, name, album) {
    localStorage.setItem('lastPlayed', JSON.stringify({ file, name, album }));
}

// استعادة آخر أغنية مشغلة عند فتح الموقع
function restoreLastPlayed() {
    try {
        const lastPlayed = JSON.parse(localStorage.getItem('lastPlayed'));
        if (lastPlayed) {
            currentAlbum = lastPlayed.album || "starchaabi";
            showAlbum(currentAlbum);
            changeTrack(lastPlayed.file, lastPlayed.name);
            audioPlayer.play(); // لا يبدأ التشغيل تلقائيًا
        }
    } catch (error) {
        console.error("خطأ في استعادة الأغنية:", error);
    }

    playPauseButton.innerHTML = '<span class="material-icons">play_arrow</span>';
}

// تشغيل الأغنية التالية تلقائيًا عند الانتهاء
audioPlayer.addEventListener("ended", playNext);

// تحميل الصفحة
window.addEventListener("load", () => {
    showAlbum("starchaabi");
    restoreLastPlayed();
    initializeSongInfo();
    loadFavorites();
    
    // تهيئة أزرار المفضلة لجميع الأغاني
    initializeFavoriteButtons();

    // تعيين التوقيت الافتراضي
    currentTimeElement.textContent = "00:00";
    durationTimeElement.textContent = "00:00";
});

// تبديل عرض التحكم في الصوت
function toggleVolumeControl() {
    volumeControlContainer.classList.toggle("hidden");
}

function scrollAlbums(direction) {
    const scrollContainer = document.querySelector('.album-scroll-container');
    const scrollAmount = 150; // مقدار التمرير

    scrollContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}



document.addEventListener("DOMContentLoaded", function () {
    let currentPlaying = null;
                    icon.innerText = "volume_up"; // 🔈 إيقاف مؤقت
                }ySelectorAll(".song").forEach(song => {
            } else {tListener("click", function () {
                // إذا كانت هناك أغنية تعمل، إعادة الأيقونة القديمة
                if (currentPlaying) {
                    currentPlaying.querySelector("i").innerText = "volume_up";
                }urrentPlaying === this) {
                if (audioPlayer.paused) {
                // تحديث العنصر الحالي;
                currentPlaying = this;graphic_eq"; // 🔊 تشغيل
                icon.innerText = "graphic_eq"; // 🔊 تشغيل
                    audioPlayer.pause();
                // لا نغير `src` أو `play()` هنا حتى لا يتعارض مع سكريبتاتك الأصلية
            }   }
        }); } else {
    });         // إذا كانت هناك أغنية تعمل، إعادة الأيقونة القديمة
                if (currentPlaying) {
    // التحقق من حالة التشغيل عند التوقف التلقائي"i").innerText = "volume_up";
    audioPlayer.addEventListener("ended", function () {
        if (currentPlaying) {
            currentPlaying.querySelector("i").innerText = "volume_up"; // 🔈 عند انتهاء الأغنية
            currentPlaying = null;his;
        }       icon.innerText = "graphic_eq"; // 🔊 تشغيل
    });
});             // لا نغير `src` أو `play()` هنا حتى لا يتعارض مع سكريبتاتك الأصلية
            }
function playRandom() {
    const activeSongs = songs.filter(song => song.album === currentAlbum);
    const randomIndex = Math.floor(Math.random() * activeSongs.length);
    changeTrack(activeSongs[randomIndex].file, activeSongs[randomIndex].name);
}   audioPlayer.addEventListener("ended", function () {
        if (currentPlaying) {
document.addEventListener('DOMContentLoaded', function() {"volume_up"; // 🔈 عند انتهاء الأغنية
    const albums = document.querySelectorAll('.album-btn');
    const songsContainers = document.querySelectorAll('.songs-container');
    });
    albums.forEach(album => {
        album.addEventListener('click', function() {
            const albumId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            if (this.closest('.albums-grid-wrapper')) { === currentAlbum);
                // إذا كان الألبوم في الألبومات المكررة أسفل الأغانيh);
                scrollToAlbum(albumId);].file, activeSongs[randomIndex].name);
            } else {
                // إذا كان الألبوم في الألبومات الأصلية
                showAlbum(albumId);ntLoaded', function() {
            }ums = document.querySelectorAll('.album-btn');
        });ongsContainers = document.querySelectorAll('.songs-container');
    });
    albums.forEach(album => {
    function showAlbum(albumId) {lick', function() {
        const albumElement = document.getElementById(albumId + '-songs');/)[1];
        const allSongContainers = document.querySelectorAll('.songs-container');
                // إذا كان الألبوم في الألبومات المكررة أسفل الأغاني
        // إخفاء جميع قوائم الأغانيId);
        songsContainers.forEach(container => {
            container.style.display = 'none';ات الأصلية
        });     showAlbum(albumId);
            }
        // إظهار قائمة الأغاني الخاصة بالألبوم المحدد
        if (albumElement) {
            albumElement.style.display = 'flex';
        }ion showAlbum(albumId) {
    }   const albumElement = document.getElementById(albumId + '-songs');
        const allSongContainers = document.querySelectorAll('.songs-container');
    function scrollToAlbum(albumId) {
        const albumElement = document.getElementById(albumId + '-songs');
        if (albumElement) {Each(container => {
            albumElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
        // إظهار قائمة الأغاني الخاصة بالألبوم المحدد
    function changeTrack(src, title) {
        const audioPlayer = document.getElementById('audio-player');
        const audioSource = document.getElementById('audio-source');
        const trackName = document.getElementById('track-name');

        audioSource.src = src;umId) {
        audioPlayer.load();= document.getElementById(albumId + '-songs');
        audioPlayer.play();
        trackName.textContent = title;w({ behavior: 'smooth' });
    }   }
}); }

let lastScrollTop = 0;ck(src, title) {
const newsTicker = document.querySelector('.news-ticker');-player');
const body = document.body; document.getElementById('audio-source');
const audioPlayerContainer = document.getElementById('audio-player-container');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // عند الهبوط بالصفحة
        newsTicker.classList.add('hidden');
        body.classList.add('shifted');
        audioPlayerContainer.classList.add('shifted');
    } else {
        // عند الطلوع بالصفحة
        newsTicker.classList.remove('hidden');ws-ticker');
        body.classList.remove('shifted');
        audioPlayerContainer.classList.remove('shifted');io-player-container');
    }w.addEventListener('scroll', function() {
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // تجنب القيم السالبةTop;
}); if (scrollTop > lastScrollTop) {
function scrollToAlbums(albumId) {
    window.scrollTo({assList.add('hidden');
        top: 0,assList.add('shifted');
        behavior: 'smooth'er.classList.add('shifted');
    });lse {
    showAlbum(albumId);الصفحة
}       newsTicker.classList.remove('hidden');
function showAlbum(album) {ve('shifted');
    const albums = document.querySelectorAll('.songs-container');
    albums.forEach(a => a.style.display = 'none'); // إخفاء جميع الألبومات
    document.getElementById(`${album}-songs`).style.display = 'flex'; // عرض الألبوم المحدد
    currentAlbum = album; // تحديث الألبوم الحالي
    currentTrackIndex = 0; // إعادة المؤشر إلى البداية
}   window.scrollTo({
        top: 0,
        behavior: 'smooth'
// دالة جديدة مبسطة لتهيئة معلومات الأغاني عند تحميل الصفحة - فقط لإنشاء أزرار المفضلة
function initializeSongInfo() {
    // تهيئة أزرار المفضلة لجميع الأغاني
    setTimeout(() => {um) {
        initializeFavoriteButtons();ectorAll('.songs-container');
    }, 500);orEach(a => a.style.display = 'none'); // إخفاء جميع الألبومات
}   document.getElementById(`${album}-songs`).style.display = 'flex'; // عرض الألبوم المحدد
    currentAlbum = album; // تحديث الألبوم الحالي
    currentTrackIndex = 0; // إعادة المؤشر إلى البداية
}
// تهيئة أزرار المفضلة لجميع الأغاني
function initializeFavoriteButtons() {
    document.querySelectorAll('.song').forEach(songElement => {قط لإنشاء أزرار المفضلة
        const audioFileMatch = songElement.getAttribute('onclick')?.match(/'([^']+\.mp3)'/);
        const nameMatch = songElement.getAttribute('onclick')?.match(/, ?'([^']+)'/);
        imeout(() => {
        if (audioFileMatch && nameMatch) {
            const audioFile = audioFileMatch[1];
            const songName = nameMatch[1];
            
            // إنشاء معرف فريد للأغنية
            const songId = audioFile.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
            songElement.dataset.songId = songId;
            tializeFavoriteButtons() {
            // إذا لم يكن زر المفضلة موجوداً، قم بإضافتهnt => {
            if (!songElement.querySelector('.favorite-btn')) {ck')?.match(/'([^']+\.mp3)'/);
                const favoriteBtn = document.createElement('button');/, ?'([^']+)'/);
                favoriteBtn.className = 'favorite-btn';
                favoriteBtn.setAttribute('onclick', `toggleFavorite(event, '${songId}', '${audioFile}', '${songName}', '')`);
                t audioFile = audioFileMatch[1];
                const icon = document.createElement('i');
                icon.className = 'material-icons';
                icon.textContent = 'favorite_border';
                t songId = audioFile.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                favoriteBtn.appendChild(icon);d;
                songElement.appendChild(favoriteBtn);
            }/ إذا لم يكن زر المفضلة موجوداً، قم بإضافته
        }   if (!songElement.querySelector('.favorite-btn')) {
    });         const favoriteBtn = document.createElement('button');
                favoriteBtn.className = 'favorite-btn';
    // تحديث حالة الأزرارtn.setAttribute('onclick', `toggleFavorite(event, '${songId}', '${audioFile}', '${songName}', '')`);
    updateFavoriteButtons();
}               const icon = document.createElement('i');
                icon.className = 'material-icons';
// Comments Systemon.textContent = 'favorite_border';
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-comment');
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('comments-container');
    });
    // Load comments
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
        commentsContainer.innerHTML = '';
        snapshot.forEach((doc) => {
            const comment = doc.data();
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';'submit-comment');
            commentElement.innerHTML = `tById('name-input');
                <div class="name">${comment.name}</div>nt-input');
                <div class="date">${new Date(comment.timestamp).toLocaleString('ar-SA')}</div>
                <div class="content">${comment.content}</div>
            `;mments
            commentsContainer.appendChild(commentElement);imestamp", "desc"));
        });hot(q, (snapshot) => {
    }); commentsContainer.innerHTML = '';
        snapshot.forEach((doc) => {
    // Submit new comment = doc.data();
    submitButton.addEventListener('click', async () => {t('div');
        const name = nameInput.value.trim();ent';
        const content = commentInput.value.trim();
                <div class="name">${comment.name}</div>
        if (!name || !content) {">${new Date(comment.timestamp).toLocaleString('ar-SA')}</div>
            alert('الرجاء ملء جميع الحقول');nt.content}</div>
            return;
        }   commentsContainer.appendChild(commentElement);
        });
        try {
            await addDoc(collection(db, "comments"), {
                name: name,
                content: content,('click', async () => {
                timestamp: new Date().getTime()
            });ontent = commentInput.value.trim();

            // Clear inputs after successful submission
            nameInput.value = '';ع الحقول');
            commentInput.value = '';
        } catch (error) {
            console.error("Error adding comment: ", error);
            alert('حدث خطأ أثناء إرسال التعليق');
        }   await addDoc(collection(db, "comments"), {
    });         name: name,
});             content: content,
                timestamp: new Date().getTime()
// إضافة دالة اختبار            });audioPlayer.addEventListener('error', (e) => {
function testAudio() {    console.error('Audio Error:', e);












window.testAudio = testAudio;// يمكنك تشغيلها من console في المتصفح}    });        console.error("Test audio error:", error);    audio.play().catch(error => {    const audio = new Audio(testTrack);    const testTrack = './music/01 star chaabi.mp3';











});    });        }            alert('حدث خطأ أثناء إرسال التعليق');            console.error("Error adding comment: ", error);        } catch (error) {            commentInput.value = '';            nameInput.value = '';            // Clear inputs after successful submission    alert('حدث خطأ في تحميل الملف الصوتي');
});


