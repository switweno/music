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
    
    { file: 'https://files.catbox.moe/9q3y1c.mp3', name: 'I3YALN MASSA 1', album: 'i3yalnmassa' },
    { file: 'https://files.catbox.moe/81hrex.mp3', name: 'I3YALN MASSA 2 ', album:'i3yalnmassa' },
    { file: 'https://files.catbox.moe/5k9xls.mp3', name: 'AYT LKHMIS 3', album: 'i3yalnmassa' },
    { file: 'https://files.catbox.moe/shogmk.mp3', name: 'AYT LKHMIS 4', album: 'i3yalnmassa' },
    
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
    
    { file: '01 ahyad.mp3', name: 'AAWAD IHAHAN 1', album: 'ahyadihahan' },
    { file: '02 ahyad.mp3', name: 'AAWAD IHAHAN 2', album: 'ahyadihahan' },
    { file: '03 ahyad.mp3', name: 'AAWAD IHAHAN 3', album: 'ahyadihahan' },
    { file: '04 ahyad.mp3', name: 'AAWAD IHAHAN 4', album: 'ahyadihahan' },
    { file: '05 ahyad.mp3', name: 'AAWAD IHAHAN 5', album: 'ahyadihahan' },
    
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

// تحسين دالة عرض الألبوم والتمرير
function showAlbum(album) {
    console.log(`Showing album: ${album}`);
    
    // إخفاء جميع حاويات الأغاني
    const allContainers = document.querySelectorAll('.songs-container');
    allContainers.forEach(container => {
        container.style.display = 'none';
    });
    
    // عرض حاوية الألبوم المحدد
    const targetContainer = document.getElementById(`${album}-songs`);
    if (targetContainer) {
        targetContainer.style.display = 'flex';
        currentAlbum = album; 
        currentTrackIndex = 0; // إعادة المؤشر إلى البداية
        
        // تحديد أول أغنية في الألبوم إذا وجدت
        const firstSong = targetContainer.querySelector('.song');
        if (firstSong) {
            // استخراج بيانات الأغنية
            const onClick = firstSong.getAttribute('onclick');
            if (onClick) {
                const fileMatch = onClick.match(/'([^']+)'/);
                const nameMatch = onClick.match(/, *'([^']+)'/);
                
                if (fileMatch && nameMatch) {
                    // تحضير الأغنية دون تشغيلها
                    const file = fileMatch[1];
                    const name = nameMatch[1];
                    
                    // تحديث المصدر والعنوان فقط دون تشغيل
                    const trackNameElement = document.getElementById("track-name");
                    const audioSource = document.getElementById("audio-source");
                    
                    trackNameElement.textContent = name;
                    audioSource.src = file;
                    
                    // تحديث المؤشر الحالي
                    const activeSongs = songs.filter(song => song.album === album);
                    const songIndex = activeSongs.findIndex(song => song.file === file);
                    if (songIndex !== -1) {
                        currentTrackIndex = songIndex;
                    }
                }
            }
        }
        
        // تأخير التمرير قليلاً لضمان تحديث العرض
        setTimeout(() => {
            scrollToAlbumPosition(targetContainer);
        }, 100);
    } else {
        console.error(`Album container not found: ${album}-songs`);
    }
}

// دالة مستقلة للتمرير إلى موضع الألبوم مع مراعاة العناصر الثابتة
function scrollToAlbumPosition(targetContainer) {
    if (!targetContainer) return;
    
    // حساب ارتفاع العناصر الثابتة (النافبار ومشغل الصوت)
    const mainNav = document.getElementById('main-nav');
    const audioPlayer = document.getElementById('audio-player-container');
    
    let headerOffset = audioPlayer.offsetHeight;
    
    // إضافة ارتفاع النافبار فقط إذا كان مرئياً
    if (mainNav.classList.contains('show')) {
        headerOffset += mainNav.offsetHeight;
    }
    
    // حساب موضع التمرير
    const targetPosition = targetContainer.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - headerOffset - 10; // إضافة هامش صغير
    
    // التمرير
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// دالة تنسيق الوقت
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// تحسين دالة تغيير الأغنية مع تأثير بصري
function changeTrack(audioFile, trackName) {
    console.log(`Changing track to: ${trackName} (${audioFile})`);
    
    if (isRandomPlaying) isRandomPlaying = false;

    // البحث عن معلومات الأغنية الحالية
    const currentSong = songs.find(song => song.file === audioFile);
    const artistName = currentSong ? currentSong.artist : '';
    
    const trackNameElement = document.getElementById("track-name");
    
    // إضافة تأثير بصري عند تغيير الأغنية
    trackNameElement.classList.add('track-name-changed');
    
    // إزالة الفئة بعد انتهاء التنشيط
    setTimeout(() => {
        trackNameElement.classList.remove('track-name-changed');
    }, 2000);
    
    trackNameElement.textContent = trackName;
    const audioSource = document.getElementById("audio-source");
    audioSource.src = audioFile;

    audioPlayer.load();
    audioPlayer.play();

    playPauseButton.innerHTML = '<span class="material-icons">pause</span>';

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
            console.log(`Restoring last played song from album: ${currentAlbum}`);
            
            // تأخير قصير لضمان تهيئة الواجهة
            setTimeout(() => {
                showAlbum(currentAlbum);
                changeTrack(lastPlayed.file, lastPlayed.name);
                // لا نشغل الصوت تلقائياً
                audioPlayer.pause();
                playPauseButton.innerHTML = '<span class="material-icons">play_arrow</span>';
            }, 200);
        } else {
            // عرض الألبوم الافتراضي إذا لم يكن هناك آخر أغنية مشغلة
            showAlbum("starchaabi");
        }
    } catch (error) {
        console.error("خطأ في استعادة الأغنية:", error);
        // عرض الألبوم الافتراضي في حالة حدوث خطأ
        showAlbum("starchaabi");
    }
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

    document.querySelectorAll(".song").forEach(song => {
        song.addEventListener("click", function () {
            let icon = this.querySelector("i");

            // إذا كان نفس العنصر مضغوطًا مرة أخرى
            if (currentPlaying === this) {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    icon.innerText = "graphic_eq"; // 🔊 تشغيل
                } else {
                    audioPlayer.pause();
                    icon.innerText = "volume_up"; // 🔈 إيقاف مؤقت
                }
            } else {
                // إذا كانت هناك أغنية تعمل، إعادة الأيقونة القديمة
                if (currentPlaying) {
                    currentPlaying.querySelector("i").innerText = "volume_up";
                }

                // تحديث العنصر الحالي
                currentPlaying = this;
                icon.innerText = "graphic_eq"; // 🔊 تشغيل

                // لا نغير `src` أو `play()` هنا حتى لا يتعارض مع سكريبتاتك الأصلية
            }
        });
    });

    // التحقق من حالة التشغيل عند التوقف التلقائي
    audioPlayer.addEventListener("ended", function () {
        if (currentPlaying) {
            currentPlaying.querySelector("i").innerText = "volume_up"; // 🔈 عند انتهاء الأغنية
            currentPlaying = null;
        }
    });
});

function playRandom() {
    const activeSongs = songs.filter(song => song.album === currentAlbum);
    const randomIndex = Math.floor(Math.random() * activeSongs.length);
    changeTrack(activeSongs[randomIndex].file, activeSongs[randomIndex].name);
}

document.addEventListener('DOMContentLoaded', function() {
    const albums = document.querySelectorAll('.album-btn');
    const songsContainers = document.querySelectorAll('.songs-container');

    albums.forEach(album => {
        album.addEventListener('click', function() {
            const albumId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            if (this.closest('.albums-grid-wrapper')) {
                // إذا كان الألبوم في الألبومات المكررة أسفل الأغاني
                scrollToAlbum(albumId);
            } else {
                // إذا كان الألبوم في الألبومات الأصلية
                showAlbum(albumId);
            }
        });
    });

    function showAlbum(albumId) {
        const albumElement = document.getElementById(albumId + '-songs');
        const allSongContainers = document.querySelectorAll('.songs-container');

        // إخفاء جميع قوائم الأغاني
        songsContainers.forEach(container => {
            container.style.display = 'none';
        });

        // إظهار قائمة الأغاني الخاصة بالألبوم المحدد
        if (albumElement) {
            albumElement.style.display = 'flex';
        }
    }

    function scrollToAlbum(albumId) {
        const albumElement = document.getElementById(albumId + '-songs');
        if (albumElement) {
            albumElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function changeTrack(src, title) {
        const audioPlayer = document.getElementById('audio-player');
        const audioSource = document.getElementById('audio-source');
        const trackName = document.getElementById('track-name');

        audioSource.src = src;
        audioPlayer.load();
        audioPlayer.play();
        trackName.textContent = title;
    }
});

// دالة جديدة مبسطة لتهيئة معلومات الأغاني عند تحميل الصفحة - فقط لإنشاء أزرار المفضلة
function initializeSongInfo() {
    // تهيئة أزرار المفضلة لجميع الأغاني
    setTimeout(() => {
        initializeFavoriteButtons();
    }, 500);
}

// تهيئة أزرار المفضلة لجميع الأغاني
function initializeFavoriteButtons() {
    document.querySelectorAll('.song').forEach(songElement => {
        const audioFileMatch = songElement.getAttribute('onclick')?.match(/'([^']+\.mp3)'/);
        const nameMatch = songElement.getAttribute('onclick')?.match(/, ?'([^']+)'/);
        
        if (audioFileMatch && nameMatch) {
            const audioFile = audioFileMatch[1];
            const songName = nameMatch[1];
            
            // إنشاء معرف فريد للأغنية
            const songId = audioFile.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
            songElement.dataset.songId = songId;
            
            // إذا لم يكن زر المفضلة موجوداً، قم بإضافته
            if (!songElement.querySelector('.favorite-btn')) {
                const favoriteBtn = document.createElement('button');
                favoriteBtn.className = 'favorite-btn';
                favoriteBtn.setAttribute('onclick', `toggleFavorite(event, '${songId}', '${audioFile}', '${songName}', '')`);
                
                const icon = document.createElement('i');
                icon.className = 'material-icons';
                icon.textContent = 'favorite_border';
                
                favoriteBtn.appendChild(icon);
                songElement.appendChild(favoriteBtn);
            }
        }
    });
    
    // تحديث حالة الأزرار
    updateFavoriteButtons();
}


 let lastScrollTop = 0;
    const newsTicker = document.querySelector('.news-ticker');
    const body = document.body;
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
            newsTicker.classList.remove('hidden');
            body.classList.remove('shifted');
            audioPlayerContainer.classList.remove('shifted');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // تجنب القيم السالبة
    });

    function scrollToAlbums(albumId) {
        console.log(`scrollToAlbums called for: ${albumId}`);
        // عرض الألبوم المحدد أولاً
        showAlbum(albumId);
        
        // الحصول على موقع عنصر حاوية الأغاني
        const targetContainer = document.getElementById(`${albumId}-songs`);
        
        if (targetContainer) {
            // حساب الارتفاع الثابت للعناصر في الأعلى
            const headerOffset = 240; // ارتفاع مشغل الصوت والنافبار
            
            // حساب الموقع النهائي للتمرير
            const offsetPosition = targetContainer.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            
            // التمرير إلى الموقع المحسوب
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            console.error(`Album container not found for scrolling: ${albumId}-songs`);
        }
    }

    function showAlbum(album) {
        const albums = document.querySelectorAll('.songs-container');
        albums.forEach(a => a.style.display = 'none'); // إخفاء جميع الألبومات
    
        document.getElementById(`${album}-songs`).style.display = 'flex'; // عرض الألبوم المحدد
    
        currentAlbum = album; // تحديث الألبوم الحالي
        currentTrackIndex = 0; // إعادة المؤشر إلى البداية
    }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.noselect').forEach(function (element) {
        element.addEventListener('mousedown', function (event) {
            event.preventDefault(); // يمنع تحديد النص
        });
        element.addEventListener('contextmenu', function (event) {
            event.preventDefault(); // يمنع القائمة السياقية (البحث في Google)
        });
    });
});


document.addEventListener('mousedown', function(event) {
    if (event.detail > 1) {
        event.preventDefault(); // منع البحث التلقائي عند الضغط المطول
    }
}, false);

// إضافة وظائف للعارض المنبثق للألبومات
document.addEventListener('DOMContentLoaded', function() {
    const showAlbumsBtn = document.getElementById('show-albums-btn');
    const closeAlbumsBtn = document.getElementById('close-albums-btn');
    const albumsShowcase = document.getElementById('albums-showcase');
    const albumItems = document.querySelectorAll('.album-showcase-item');

    // فتح العارض
    showAlbumsBtn.addEventListener('click', function() {
        albumsShowcase.classList.add('show');
        document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
    });

    // إغلاق العارض
    closeAlbumsBtn.addEventListener('click', function() {
        albumsShowcase.classList.remove('show');
        document.body.style.overflow = ''; // استعادة التمرير
    });

    // عند النقر خارج المحتوى، يتم إغلاق العارض
    albumsShowcase.addEventListener('click', function(e) {
        if (e.target === albumsShowcase) {
            albumsShowcase.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // وظيفة اختيار الألبوم
    albumItems.forEach(item => {
        item.addEventListener('click', function() {
            const albumId = this.getAttribute('data-album');
            console.log(`Album item clicked: ${albumId}`);
            
            // إخفاء العارض
            albumsShowcase.classList.remove('show');
            document.body.style.overflow = '';
            
            // عرض الألبوم المختار وتمرير الصفحة للمكان المناسب
            scrollToAlbums(albumId);
        });
    });

    // إضافة مستمع للمفتاح ESC لإغلاق العارض
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && albumsShowcase.classList.contains('show')) {
            albumsShowcase.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});

// تحسين سلوك النافبار عند التمرير
window.addEventListener('DOMContentLoaded', function() {
    let prevScrollPos = window.pageYOffset;
    const mainNav = document.getElementById('main-nav');
    const audioPlayer = document.getElementById('audio-player-container');
    
    // جعل شريط التنقل مرئي مبدئياً
    mainNav.classList.add('show');
    
    // ضبط هامش مشغل الصوت حسب حالة النافبار
    adjustAudioPlayerPosition();
    
    // التحكم في ظهور واختفاء شريط التنقل عند التمرير
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;
        
        // عند الوصول إلى الأعلى أو التمرير لأعلى بمقدار كافٍ
        if (currentScrollPos <= 10 || prevScrollPos > currentScrollPos + 5) {
            if (!mainNav.classList.contains('show')) {
                mainNav.classList.add('show');
                adjustAudioPlayerPosition();
            }
        } 
        // عند التمرير لأسفل بمقدار كافٍ
        else if (currentScrollPos > prevScrollPos + 5) {
            if (mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
                adjustAudioPlayerPosition();
            }
        }
        
        prevScrollPos = currentScrollPos;
    });
});

// تعديل موضع مشغل الصوت بسلاسة
function adjustAudioPlayerPosition() {
    const mainNav = document.getElementById('main-nav');
    const audioPlayer = document.getElementById('audio-player-container');
    
    // تحديد هامش علوي لمشغل الصوت بناءً على حالة النافبار
    if (mainNav.classList.contains('show')) {
        audioPlayer.style.top = mainNav.offsetHeight + 'px';
    } else {
        audioPlayer.style.top = '0';
    }
}

// تحديث الربط للألبومات الجديدة في القائمة الرئيسية
document.addEventListener('DOMContentLoaded', function() {
    // ربط الألبومات الجديدة في قائمة "ألبومات أخرى"
    const newAlbumItems = document.querySelectorAll('.new-album-item');
    newAlbumItems.forEach(item => {
        item.addEventListener('click', function() {
            const albumId = this.getAttribute('data-album');
            if (albumId) {
                showAlbum(albumId);
            }
        });
    });
    
    // ربط عناصر الألبومات في النافذة المنبثقة
    const albumShowcaseItems = document.querySelectorAll('.album-showcase-item');
    albumShowcaseItems.forEach(item => {
        item.addEventListener('click', function() {
            const albumId = this.getAttribute('data-album');
            if (albumId) {
                // إغلاق النافذة المنبثقة
                document.getElementById('albums-showcase').classList.remove('show');
                document.body.style.overflow = '';
                
                // إظهار الألبوم المحدد
                showAlbum(albumId);
            }
        });
    });
});

// تنفيذ الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuBtn = document.getElementById('close-mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    const showcaseTitle = document.getElementById('showcase-title');
    const albumsShowcase = document.getElementById('albums-showcase');
    const closeAlbumsBtn = document.getElementById('close-albums-btn');
    
    // فتح القائمة الجانبية
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    // إغلاق القائمة الجانبية
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    // إغلاق القائمة عند النقر خارجها
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // إضافة وظيفة عرض الألبومات من خلال القائمة
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const albumType = this.getAttribute('data-album');
            
            // تغيير عنوان النافذة المنبثقة بناءً على نوع الألبوم
            switch(albumType) {
                case 'all':
                    showcaseTitle.textContent = 'جميع الألبومات';
                    break;
                case 'popular':
                    showcaseTitle.textContent = 'الأكثر استماعاً';
                    break;
                case 'new':
                    showcaseTitle.textContent = 'أحدث الإضافات';
                    break;
                default:
                    showcaseTitle.textContent = 'الألبومات';
            }
            
            // إظهار نافذة الألبومات المنبثقة
            albumsShowcase.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // إغلاق القائمة المتنقلة إذا كانت مفتوحة
            mobileMenu.classList.remove('show');
        });
    });
    
    // إغلاق نافذة الألبومات
    closeAlbumsBtn.addEventListener('click', function() {
        albumsShowcase.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    // إغلاق نافذة الألبومات عند النقر خارجها
    albumsShowcase.addEventListener('click', function(e) {
        if (e.target === albumsShowcase) {
            albumsShowcase.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // تنشيط الألبومات في العرض الجديد
    const newAlbumItems = document.querySelectorAll('.new-album-item');
    newAlbumItems.forEach(item => {
        item.addEventListener('click', function() {
            // استخراج كود الألبوم من مناداة الدالة onclick
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/scrollToAlbums\('([^']+)'\)/);
                if (match && match[1]) {
                    const albumId = match[1];
                    console.log(`New album item clicked: ${albumId}`);
                    scrollToAlbums(albumId);
                }
            }
        });
    });
    
    // استعادة آخر أغنية مشغلة عند فتح الموقع
    restoreLastPlayed();
    
    // إضافة مستمع لكل مشغل صوت للحفاظ على حالة التشغيل
    document.querySelectorAll(".song").forEach(song => {
        song.addEventListener("click", function () {
            console.log("Song clicked:", this.querySelector(".song-title").textContent);
        });
    });
    
    console.log("DOM Content Loaded - Initialization complete");
});

// تحسين دالة التحكم في ظهور شريط التنقل عند التمرير
function setupNavbarScrollBehavior() {
    console.log("Setting up navbar scroll behavior");
    let lastScrollTop = 0;
    const mainNav = document.getElementById('main-nav');
    const audioPlayer = document.getElementById('audio-player-container');
    
    // التأكد من أن العناصر موجودة
    if (!mainNav || !audioPlayer) {
        console.error("Navigation or audio player elements not found!");
        return;
    }
    
    // جعل شريط التنقل مرئي عند بدء التشغيل
    mainNav.classList.add('show');
    console.log("Navbar initially visible");
    
    // ضبط موضع مشغل الصوت حسب حالة النافبار
    adjustAudioPlayerPosition();
    
    // مراقبة حدث التمرير
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;
        
        // عملية تصحيح للتأكد من اكتشاف التمرير بشكل صحيح
        if (currentScrollPos > lastScrollTop + 10) {
            // التمرير للأسفل - إخفاء شريط التنقل
            mainNav.classList.remove('show');
            console.log("Scrolling DOWN - hiding navbar");
        } 
        else if (currentScrollPos < lastScrollTop - 10 || currentScrollPos <= 10) {
            // التمرير للأعلى أو في أعلى الصفحة - إظهار شريط التنقل
            mainNav.classList.add('show');
            console.log("Scrolling UP or at TOP - showing navbar");
        }
        
        lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
        
        // تحديث موضع مشغل الصوت بعد تغيير حالة النافبار
        adjustAudioPlayerPosition();
    });
}

// تحسين ضبط موضع مشغل الصوت
function adjustAudioPlayerPosition() {
    const mainNav = document.getElementById('main-nav');
    const audioPlayer = document.getElementById('audio-player-container');
    
    if (!mainNav || !audioPlayer) return;
    
    if (mainNav.classList.contains('show')) {
        // النافبار مرئي، ضع مشغل الصوت تحته
        audioPlayer.style.top = mainNav.offsetHeight + 'px';
        console.log("Adjusted player position to: " + mainNav.offsetHeight + "px");
    } else {
        // النافبار مخفي، ضع مشغل الصوت في الأعلى
        audioPlayer.style.top = '0';
        console.log("Adjusted player position to top (0px)");
    }
}

// استبدال كود معالج الأحداث القديم بالجديد
document.addEventListener('DOMContentLoaded', function() {
    // ...existing initialization code...
    
    // إعداد سلوك النافبار
    setupNavbarScrollBehavior();
    
    // ...existing code...
});
