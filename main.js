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

// متغيرات للمفضلة - نستخدم مفتاح واحد فقط للتخزين المحلي
let favorites = [];
const FAVORITES_STORAGE_KEY = 'musicFavorites';

// متغيرات للتنقل بين صفحات الألبومات
const albumsPerPage = 6; // عدد الألبومات في كل صفحة
let currentPage = 1; // الصفحة الحالية
const allAlbums = [
    { id: 'naydanouda', name: 'NAYDA NOUDA', image: 'naydanouda.webp' },
    { id: 'sentralchaabi', name: 'SENTRAL CHAABI', image: 'sentralchaabi.png' },
    { id: 'popular', name: 'SHAB LOUTAR', image: 'shabloutar.png' },
    { id: 'i3yalnmassa', name: 'I3YALN MASSA', image: 'i3yalnmassa.png' },
    { id: 'khalij', name: 'أغاني خليجية', image: 'khalij.webp' },
    { id: 'starchaabi', name: 'STAR CHAABI', image: 'starchaabi.png' },
    { id: 'ahyadihahan', name: 'AAWAD IHAHAN', image: 'ahyadihahan.png' },
    { id: 'casastar', name: 'CASA STAR', image: 'casastar.png' },
    { id: 'kamalnew', name: 'KAMAL NEW', image: 'kamalnews.png' },
    // يمكن إضافة المزيد من الألبومات هنا عند الحاجة
];

// استدعاء المفضلة عند تحميل الصفحة
function loadFavorites() {
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
        updateFavoritesUI();
    }
}

// دالة لتحميل صفحة محددة من الألبومات
function loadAlbumsPage(page) {
    // Dispatch event when page changes to notify lazy loader
    const event = new CustomEvent('albumPageChanged', { detail: { page } });
    document.dispatchEvent(event);
    
    const albumsContainer = document.getElementById('albums-page-container');
    albumsContainer.innerHTML = '';
    
    // حساب نطاق الألبومات للصفحة المحددة
    const startIndex = (page - 1) * albumsPerPage;
    const endIndex = Math.min(startIndex + albumsPerPage, allAlbums.length);
    
    // عرض الألبومات للصفحة الحالية
    for (let i = startIndex; i < endIndex; i++) {
        const album = allAlbums[i];
        const albumElement = document.createElement('div');
        albumElement.className = 'new-album-item';
        albumElement.setAttribute('onclick', `scrollToAlbums('${album.id}')`);
        albumElement.innerHTML = `
            <img class="lazy" src="placeholder.png" data-src="${album.image}" alt="${album.name}">
            <span>${album.name}</span>
        `;
        albumsContainer.appendChild(albumElement);
    }
    
    // تحديث أزرار التنقل
    updatePaginationControls(page);
}

// دالة لتحديث أزرار التنقل
function updatePaginationControls(currentPage) {
    const paginationContainer = document.getElementById('pagination-numbers');
    paginationContainer.innerHTML = '';
    
    const totalPages = Math.ceil(allAlbums.length / albumsPerPage);
    
    // تعطيل أو تفعيل أزرار السابق والتالي
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;
    
    // إنشاء أزرار أرقام الصفحات
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.setAttribute('data-page', i);
        
        // استخدام دالة معرفة خارج الحلقة
        pageBtn.addEventListener('click', handlePageButtonClick);
        
        paginationContainer.appendChild(pageBtn);
    }
}

// دالة معالجة النقر على أزرار الصفحات
function handlePageButtonClick(event) {
    const pageNum = parseInt(event.currentTarget.getAttribute('data-page'), 10);
    currentPage = pageNum;
    loadAlbumsPage(pageNum);
}

// دالة لتغيير الصفحة (السابقة أو التالية)
function changePage(direction) {
    const totalPages = Math.ceil(allAlbums.length / albumsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        loadAlbumsPage(currentPage);
    }
}

// حفظ المفضلة في التخزين المحلي
function saveFavorites() {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}

// إضافة أو إزالة أغنية من المفضلة - دالة موحدة
function toggleFavorite(event, songId, audioFile, songName, artistName) {
    // منع انتشار الحدث لتجنب تشغيل الأغنية عند النقر على زر المفضلة
    event.stopPropagation();
    
    // الحصول على الألبوم الصحيح للأغنية
    const songAlbum = getSongAlbumById(audioFile);
    
    const songIndex = favorites.findIndex(song => song.id === songId);
    const button = event.currentTarget;
    const icon = button.querySelector('i');
    
    if (songIndex === -1) {
        // إضافة الأغنية إلى المفضلة مع الألبوم الصحيح
        favorites.push({
            id: songId,
            file: audioFile,
            name: songName,
            artist: artistName || '',
            album: songAlbum // استخدام الألبوم المناسب للأغنية وليس الألبوم الحالي
        });
        
        // تغيير الأيقونة وإضافة تنشيط
        icon.textContent = 'favorite';
        button.classList.add('active');
        
        // إظهار رسالة تأكيد
        showFavoriteNotification(`تمت إضافة "${songName}" إلى المفضلة`, true);
    } else {
        // إزالة الأغنية من المفضلة
        favorites.splice(songIndex, 1);
        
        // تغيير الأيقونة وإزالة التنشيط
        icon.textContent = 'favorite_border';
        button.classList.remove('active');
        
        // إظهار رسالة تأكيد
        showFavoriteNotification(`تم إزالة "${songName}" من المفضلة`, false);
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

// Function to show notification when a favorite is added/removed
function showFavoriteNotification(message, isAdded = true) {
    // Remove any existing notification
    const existingNotification = document.querySelector('.favorite-notification');
    if (existingNotification) {
        document.body.removeChild(existingNotification);
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'favorite-notification';
    notification.innerHTML = `
        <i class="material-icons">${isAdded ? 'favorite' : 'favorite_border'}</i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Force reflow to ensure animation works
    notification.offsetWidth;
    
    // Show notification
    notification.classList.add('show');
    
    // Remove notification after animation completes
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 3000);
}

// دالة عرض الألبوم
function showAlbum(album) {
    const albums = document.querySelectorAll('.songs-container');
    albums.forEach(a => a.style.display = 'none'); // إخفاء جميع الألبومات
    
    const albumElement = document.getElementById(`${album}-songs`);
    if (albumElement) {
        albumElement.style.display = 'flex'; // عرض الألبوم المحدد
        
        // تحميل الأغاني إذا لم يتم تحميلها بالفعل
        if (!albumElement.classList.contains('loaded')) {
            // Trigger lazy loading through dataset attribute
            albumElement.dataset.album = album;
            
            // Create a custom event to notify our lazy loader
            const event = new CustomEvent('albumSelected', { detail: albumElement });
            document.dispatchEvent(event);
        }
    }

    currentAlbum = album; // تحديث الألبوم الحالي
    currentTrackIndex = 0; // إعادة المؤشر إلى البداية
}

// دالة تنسيق الوقت
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// إضافة دالة مساعدة للعثور على الألبوم الصحيح للأغنية من خلال اسم الملف
function getSongAlbumById(audioFile) {
    // البحث عن الأغنية في قائمة الأغاني
    const songData = songs.find(song => song.file === audioFile);
    // إذا وجدنا الأغنية، أعد مُعرّف الألبوم الخاص بها، وإلا أعد الألبوم الحالي
    return songData ? songData.album : currentAlbum;
}

// تعديل دالة تغيير الأغنية لاستخدام ألبوم الأغنية الصحيح
// متغير عالمي لتتبع الأغنية الحالية
let currentPlayingSong = null;

// تعديل دالة تغيير المسار لتحديث أيقونة الأغنية الحالية
function changeTrack(audioFile, trackName) {
    if (isRandomPlaying) isRandomPlaying = false;

    // البحث عن معلومات الأغنية الحالية
    const currentSong = songs.find(song => song.file === audioFile);
    const artistName = currentSong ? currentSong.artist : '';
    
    // الحصول على مُعرّف الألبوم الصحيح للأغنية
    const songAlbum = getSongAlbumById(audioFile);
    
    // الحصول على اسم الألبوم المناسب للعرض
    const albumDisplayName = getAlbumDisplayName(songAlbum);
    
    // تحديث معلومات الأغنية
    const trackNameElement = document.getElementById("track-name");
    const albumNameElement = document.getElementById("album-name");
    
    // إضافة تأثير بصري عند تغيير الأغنية
    trackNameElement.classList.add('track-name-changed');
    albumNameElement.classList.add('album-name-changed');
    
    // إزالة الفئة بعد انتهاء التنشيط
    setTimeout(() => {
        trackNameElement.classList.remove('track-name-changed');
        albumNameElement.classList.remove('album-name-changed');
    }, 2000);
    
    // تحديث نص اسم الألبوم واسم الأغنية
    trackNameElement.querySelector('span').textContent = trackName;
    albumNameElement.querySelector('span').textContent = albumDisplayName;
    
    // تحديث مصدر الصوت
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

    // تحديث الأيقونات - إعادة جميع الأيقونات إلى الوضع الافتراضي أولاً
    document.querySelectorAll('.song i.material-symbols-outlined').forEach(icon => {
        icon.innerText = "volume_up";
    });
    
    // تحديد عنصر الأغنية المشغلة حاليًا
    const songId = audioFile.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    const songElements = document.querySelectorAll(`.song[data-song-id="${songId}"]`);
    
    // تحديث المتغير العالمي
    currentPlayingSong = songElements.length ? songElements[0] : null;
    
    // تغيير أيقونة الأغنية الحالية إلى "graphic_eq"
    if (currentPlayingSong) {
        const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
        if (icon) {
            icon.innerText = "graphic_eq";
        }
    }

    saveLastPlayed(audioFile, trackName, songAlbum);
}

// دالة للحصول على اسم الألبوم المناسب للعرض
function getAlbumDisplayName(albumId) {
    const album = allAlbums.find(a => a.id === albumId);
    return album ? album.name : 'غير معروف';
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

// Function to generate song containers dynamically
function generateSongContainers() {
    // Get unique album IDs from the songs array
    const uniqueAlbums = [...new Set(songs.map(song => song.album))];
    
    // Container for all song containers
    const songsContainerWrapper = document.querySelector('.songs-container-wrapper');
    
    // Clear existing static content
    songsContainerWrapper.innerHTML = '';
    
    // Generate container for each album
    uniqueAlbums.forEach(albumId => {
        // Filter songs by album
        const albumSongs = songs.filter(song => song.album === albumId);
        
        // Create container for this album's songs
        const albumContainer = document.createElement('div');
        albumContainer.className = `songs-container ${albumId}`;
        albumContainer.id = `${albumId}-songs`;
        
        // Add data attribute for lazy loading
        albumContainer.dataset.album = albumId;
        
        // Add all songs to the container
        albumSongs.forEach(song => {
            const songElement = createSongElement(song);
            albumContainer.appendChild(songElement);
        });
        
        // Add the album container to the wrapper
        songsContainerWrapper.appendChild(albumContainer);
    });
    
    // After generating all containers, show the default album
    showAlbum(currentAlbum);
}

// Helper function to create a song element - تعديل دالة إنشاء عنصر الأغنية
function createSongElement(song) {
    const songElement = document.createElement('div');
    songElement.className = 'song';
    
    // إضافة معرف فريد للأغنية
    const songId = song.file.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    songElement.dataset.songId = songId;
    
    songElement.setAttribute('onclick', `changeTrack('${song.file}', '${song.name}')`);
    
    songElement.innerHTML = `
        <i class="material-symbols-outlined">volume_up</i>
        <div class="song-title">${song.name}</div>
        <button class="favorite-btn" onclick="toggleFavorite(event, '${songId}', '${song.file}', '${song.name}', '')">
            <i class="material-icons">favorite_border</i>
        </button>
    `;
    
    return songElement;
}

// Modify the window load event listener to call our new function
window.addEventListener("load", () => {
    // Generate song containers dynamically
    generateSongContainers();
    
    // Continue with existing initialization
    restoreLastPlayed();
    initializeSongInfo();
    loadFavorites();
    initializeFavoriteButtons();
    
    // Default time display
    currentTimeElement.textContent = "00:00";
    durationTimeElement.textContent = "00:00";
    
    // Load albums page
    loadAlbumsPage(1);
});

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
    
    // تحميل الألبومات عند فتح الصفحة (إضافة هذا السطر)
    loadAlbumsPage(1);
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
    // تأكد من تحميل الألبومات فوراً
    loadAlbumsPage(1);
    
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
                
                // تحقق مما إذا كانت الأغنية في المفضلة بالفعل
                const isFavorite = favorites.some(song => song.id === songId);
                
                const icon = document.createElement('i');
                icon.className = 'material-icons';
                icon.textContent = isFavorite ? 'favorite' : 'favorite_border';
                
                if (isFavorite) {
                    favoriteBtn.classList.add('active');
                }
                
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
        // عرض الألبوم المحدد أولاً
        showAlbum(albumId);
        
        // الحصول على موقع عنصر الفاصل الأحمر (أو قسم الأغاني)
        const targetContainer = document.getElementById(`${albumId}-songs`);
        
        if (targetContainer) {
            // الحصول على عنصر الفاصل فوق قائمة الأغاني (عنوان الألبوم)
            const albumListMusic = document.querySelector('.album-list-music');
            
            // حساب الارتفاع الثابت للعناصر في الأعلى
            const headerOffset = 250; // تقريبًا ارتفاع مشغل الصوت والشريط الإخباري
            
            // حساب الموقع النهائي للتمرير
            let offsetPosition;
            
            if (albumListMusic) {
                // الموقع النسبي للفاصل
                offsetPosition = albumListMusic.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            } else {
                // إذا لم يتم العثور على الفاصل، استخدم موقع حاوية الأغاني
                offsetPosition = targetContainer.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            }
            
            // التمرير إلى الموقع المحسوب
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    function showAlbum(album) {
        const albums = document.querySelectorAll('.songs-container');
        albums.forEach(a => a.style.display = 'none'); // إخفاء جميع الألبومات
    
        const albumElement = document.getElementById(`${album}-songs`);
        if (albumElement) {
            albumElement.style.display = 'flex'; // عرض الألبوم المحدد
            
            // تحميل الأغاني إذا لم يتم تحميلها بالفعل
            if (!albumElement.classList.contains('loaded')) {
                // Trigger lazy loading through dataset attribute
                albumElement.dataset.album = album;
                
                // Create a custom event to notify our lazy loader
                const event = new CustomEvent('albumSelected', { detail: albumElement });
                document.dispatchEvent(event);
            }
        }
    
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

// تحديث حالة مشغل الصوت عند توقفه
audioPlayer.addEventListener("ended", function() {
    if (currentPlayingSong) {
        const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
        if (icon) {
            icon.innerText = "volume_up";
        }
        currentPlayingSong = null;
    }
    playNext(); // تشغيل الأغنية التالية
});

// تحديث حالة مشغل الصوت عند الإيقاف المؤقت
audioPlayer.addEventListener("pause", function() {
    if (currentPlayingSong) {
        const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
        if (icon) {
            icon.innerText = "volume_up";
        }
    }
});

// تحديث حالة مشغل الصوت عند التشغيل
audioPlayer.addEventListener("play", function() {
    if (currentPlayingSong) {
        const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
        if (icon) {
            icon.innerText = "graphic_eq";
        }
    }
});


