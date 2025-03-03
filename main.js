// قائمة الأغاني
const songs = [
    { file: '01 star chaabi.mp3', name: 'star chaabi 1', album: 'starchaabi' },
    { file: '02 star chaabi.mp3', name: 'star chaabi 2 ', album:'starchaabi' },
    { file: '03 star cha3bi.mp3', name: 'star chaabi 3', album: 'starchaabi' },
    { file: '04 star cha3bi.mp3', name: 'star chaabi 4', album: 'starchaabi' },
	{ file: '05 star cha3bi.mp3', name: 'star chaabi 5', album: 'starchaabi' },
	{ file: '06 star cha3bi.mp3', name: 'star chaabi 6', album: 'starchaabi' },
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
	
	// Songs for album: fivestar
{ file: 'https://files.catbox.moe/t51f12.mp3', name: 'five star 1', album: 'fivestar' },
{ file: 'https://files.catbox.moe/pf2b30.mp3', name: 'five star 2', album: 'fivestar' },
{ file: 'https://files.catbox.moe/mvvg94.mp3', name: 'five star 3', album: 'fivestar' },
{ file: 'https://files.catbox.moe/i4jz8b.mp3', name: 'five star 4', album: 'fivestar' },
{ file: 'https://files.catbox.moe/zzaxrj.mp3', name: 'five star 5', album: 'fivestar' },
{ file: 'https://files.catbox.moe/pas8bm.mp3', name: 'five star 6', album: 'fivestar' },
{ file: 'https://files.catbox.moe/h7u50c.mp3', name: 'five star 7', album: 'fivestar' },
{ file: 'https://files.catbox.moe/asba0r.mp3', name: 'five star 8', album: 'fivestar' },
{ file: 'https://files.catbox.moe/5g0t2s.mp3', name: 'five star 9', album: 'fivestar' },
{ file: 'https://files.catbox.moe/lw5vcj.mp3', name: 'five star 10', album: 'fivestar' },

 // Songs for album: imghrane
{ file: 'https://files.catbox.moe/sk38hk.mp3', name: 'IMGHRANE 1', album: 'imghrane' },
{ file: 'https://files.catbox.moe/c3kkfw.mp3', name: 'IMGHRANE 2', album: 'imghrane' },
{ file: 'https://files.catbox.moe/59iqhu.mp3', name: 'IMGHRANE 3', album: 'imghrane' },
{ file: 'https://files.catbox.moe/cbu2ol.mp3', name: 'IMGHRANE 4', album: 'imghrane' },
{ file: 'https://files.catbox.moe/z8f3r8.mp3', name: 'IMGHRANE 5', album: 'imghrane' },
{ file: 'https://files.catbox.moe/xvfg8c.mp3', name: 'IMGHRANE 6', album: 'imghrane' },
{ file: 'https://files.catbox.moe/r0ugkm.mp3', name: 'IMGHRANE 7', album: 'imghrane' },
{ file: 'https://files.catbox.moe/59iqhu.mp3', name: 'IMGHRANE 8', album: 'imghrane' },
{ file: 'https://files.catbox.moe/2dqn2j.mp3', name: 'IMGHRANE 9', album: 'imghrane' },
{ file: 'https://files.catbox.moe/y3v50e.mp3', name: 'IMGHRANE 10', album: 'imghrane' },


];



// Album definitions
const allAlbums = [
    { id: 'naydanouda', name: 'NAYDA NOUDA', image: 'naydanouda.webp' },
    { id: 'sentralchaabi', name: 'SENTRAL CHAABI', image: 'sentralchaabi.png' },
    { id: 'popular', name: 'SHAB LOUTAR', image: 'shabloutar.png' },
    { id: 'i3yalnmassa', name: 'I3YALN MASSA', image: 'i3yalnmassa.png' },
    { id: 'khalij', name: 'أغاني خليجية', image: 'khalij.webp' },
    { id: 'starchaabi', name: 'STAR CHAABI', image: 'starchaabi.png' },
    { id: 'ahyadihahan', name: 'AAWAD IHAHAN', image: 'ahyadihahan.png' },
    { id: 'casastar', name: 'CASA STAR', image: 'casastar.png' },
	{ id: 'fivestar', name: 'FIVE STAR', image: 'fivestar.png' },
    { id: 'imghrane', name: 'IMGHRANE', image: 'imghrane.png' },
	{ id: 'fivestar', name: 'FIVE STAR', image: 'fivestar.png' },
    { id: 'imghrane', name: 'IMGHRANE', image: 'imghrane.png' },
    // Add more albums as needed
];


// Function to get album display name by ID
function getAlbumDisplayName(albumId) {
    const album = allAlbums.find(a => a.id === albumId);
    return album ? album.name : 'غير معروف';
}

// Function to get album image by ID
function getAlbumImage(albumId) {
    const album = allAlbums.find(a => a.id === albumId);
    return album ? album.image : 'placeholder.png';
}

let audioPlayer = document.getElementById("audio-player");
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






// استدعاء المفضلة عند تحميل الصفحة
function loadFavorites() {
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
        updateFavoritesUI();
    }
}

// دالة لتحميل صفحة محددة من الألبومات - Fix the function in loop warning
function loadAlbumsPage(page) {
    const albumsContainer = document.getElementById('albums-page-container');
    if (!albumsContainer) {
        console.error("Albums container not found");
        return;
    }
    
    albumsContainer.innerHTML = '';
    
    // حساب نطاق الألبومات للصفحة المحددة
    const startIndex = (page - 1) * albumsPerPage;
    const endIndex = Math.min(startIndex + albumsPerPage, allAlbums.length);
    
    console.log(`Loading albums page ${page}: items ${startIndex} to ${endIndex-1}`);
    
    // عرض الألبومات للصفحة الحالية
    for (let i = startIndex; i < endIndex; i++) {
        const album = allAlbums[i];
        const albumElement = document.createElement('div');
        albumElement.className = 'new-album-item';
        albumElement.dataset.albumId = album.id;
        
        albumElement.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <span>${album.name}</span>
        `;
        
        // Fix: Capture album.id inside closure to avoid JSHint W083 warning
        (function(albumId) {
            albumElement.addEventListener('click', function() {
                console.log(`Album clicked: ${albumId}`);
                showAlbum(albumId);
            });
        })(album.id);
        
        albumsContainer.appendChild(albumElement);
    }
    
    // تحديث أزرار التنقل
    updatePaginationControls(page);
    
    // Call initialization after a short delay
    setTimeout(initializeAlbumItems, 100);
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
    
    // تحديث حالة جميع أزرار المفضلة لهذه الأغنية
    updateAllFavoriteButtonsForSong(songId);
}

// دالة جديدة لتحديث جميع أزرار المفضلة للأغنية المحددة
function updateAllFavoriteButtonsForSong(songId) {
    // تحديد جميع عناصر الأغنية التي لها نفس المعرف
    const allSongElements = document.querySelectorAll(`.song[data-song-id="${songId}"]`);
    
    // تحديد ما إذا كانت الأغنية مفضلة
    const isFavorite = favorites.some(song => song.id === songId);
    
    // تحديث كل عنصر أغنية
    allSongElements.forEach(songElement => {
        const favoriteBtn = songElement.querySelector('.favorite-btn');
        if (favoriteBtn) {
            const icon = favoriteBtn.querySelector('i');
            
            if (isFavorite) {
                icon.textContent = 'favorite';
                favoriteBtn.classList.add('active');
            } else {
                icon.textContent = 'favorite_border';
                favoriteBtn.classList.remove('active');
            }
        }
    });
}

// تعديل الدالة الحالية للتحديث الكامل للأزرار
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
    
    // Force reflow to ensure animation works - fix JSHint warning
    void notification.offsetWidth; // Using void operator to make it a statement
    
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
    console.log(`showAlbum called with album: ${album}`);
    
    // Check if album exists
    const albumElement = document.getElementById(`${album}-songs`);
    if (!albumElement) {
        console.error(`Album element #${album}-songs not found`);
        return;
    }
    
    // Hide all album containers
    const albums = document.querySelectorAll('.songs-container');
    albums.forEach(a => a.style.display = 'none');
    
    // Show the selected album's songs
    albumElement.style.display = 'flex';
    
    // Calculate precise offset for scrolling
    const playerHeight = document.getElementById('audio-player-container').offsetHeight;
    const extraPadding = 30; // Additional padding for better visibility
    
    // Scroll to position with delay to ensure UI updates
    setTimeout(() => {
        const albumRect = albumElement.getBoundingClientRect();
        const offsetPosition = window.pageYOffset + albumRect.top - playerHeight - extraPadding;
        
        console.log(`Scrolling to position: ${offsetPosition}`);
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Add focus effect
        albumElement.classList.add('album-focus');
        setTimeout(() => {
            albumElement.classList.remove('album-focus');
        }, 1000);
    }, 200);

    // Update current album
    currentAlbum = album;
    currentTrackIndex = 0;
    
    console.log(`Album display updated to: ${album}`);
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

// تعديل دالة تغيير المسار لتحديث أيقونة الأغنية الحالية وإصلاح مشكلة الترتيب
function changeTrack(audioFile, trackName) {
    if (isRandomPlaying) isRandomPlaying = false;

    // Get song and album info
    const currentSong = songs.find(song => song.file === audioFile);
    const artistName = currentSong ? currentSong.artist : '';
    const songAlbum = getSongAlbumById(audioFile);
    
    // Update album if changed
    if (currentAlbum !== songAlbum) {
        currentAlbum = songAlbum;
        showAlbum(currentAlbum);
    }
    
    // Get a clean, ordered playlist for this album
    const albumPlaylist = getAlbumPlaylist(currentAlbum);
    
    // Find the exact index of this song in the clean playlist
    currentTrackIndex = albumPlaylist.findIndex(song => song.file === audioFile);
    if (currentTrackIndex === -1) currentTrackIndex = 0;
    
    console.log("Playing song:", trackName, "at index:", currentTrackIndex, "of", albumPlaylist.length, "songs");
    
    // Update UI and play the song
    const albumDisplayName = getAlbumDisplayName(songAlbum);
    
    const trackNameElement = document.getElementById("track-name");
    const albumNameElement = document.getElementById("album-name");
    
    trackNameElement.classList.add('track-name-changed');
    albumNameElement.classList.add('album-name-changed');
    
    setTimeout(() => {
        trackNameElement.classList.remove('track-name-changed');
        albumNameElement.classList.remove('album-name-changed');
    }, 2000);
    
    trackNameElement.querySelector('span').textContent = trackName;
    albumNameElement.querySelector('span').textContent = albumDisplayName;
    
    const audioSource = document.getElementById("audio-source");
    audioSource.src = audioFile;

    audioPlayer.load();
    audioPlayer.play();

    playPauseButton.innerHTML = '<span class="material-icons">pause</span>';

    // Update icon states
    document.querySelectorAll('.song i.material-symbols-outlined').forEach(icon => {
        icon.innerText = "volume_up";
    });
    
    const songId = audioFile.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    const songElements = document.querySelectorAll(`.song[data-song-id="${songId}"]`);
    
    currentPlayingSong = songElements.length ? songElements[0] : null;
    
    if (currentPlayingSong) {
        const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
        if (icon) {
            icon.innerText = "graphic_eq";
        }
    }

    saveLastPlayed(audioFile, trackName, songAlbum);
    updateMiniInfoBar(); // أضف هذا السطر لتحديث الشريط المصغر
}

// تأكد من وجود مستمع واحد فقط لنهاية الأغنية
audioPlayer.removeEventListener("ended", playNext);
audioPlayer.addEventListener("ended", playNext);

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
    // Fix misleading line break warning by keeping ? on the same line
    volumeButton.innerHTML = audioPlayer.muted ? '<span class="material-icons">volume_off</span>' : '<span class="material-icons">volume_up</span>';
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
    // Get clean, ordered playlist for current album
    const albumPlaylist = getAlbumPlaylist(currentAlbum);
    
    // Safety check
    if (albumPlaylist.length === 0) return;
    
    // Calculate next track index
    const oldIndex = currentTrackIndex;
    currentTrackIndex = (currentTrackIndex + 1) % albumPlaylist.length;
    
    // Debug info
    console.log(`Moving from song ${oldIndex} to ${currentTrackIndex} in album ${currentAlbum}`);
    
    // Play the next track
    const nextSong = albumPlaylist[currentTrackIndex];
    changeTrack(nextSong.file, nextSong.name);
}

// تشغيل الأغنية السابقة
function playPrevious() {
    // Get clean, ordered playlist for current album
    const albumPlaylist = getAlbumPlaylist(currentAlbum);
    
    // Safety check
    if (albumPlaylist.length === 0) return;
    
    // Calculate previous track index
    const oldIndex = currentTrackIndex;
    currentTrackIndex = (currentTrackIndex - 1 + albumPlaylist.length) % albumPlaylist.length;
    
    // Debug info
    console.log(`Moving from song ${oldIndex} to ${currentTrackIndex} in album ${currentAlbum}`);
    
    // Play the previous track
    const prevSong = albumPlaylist[currentTrackIndex];
    changeTrack(prevSong.file, prevSong.name);
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
        albumContainer.style.display = 'none'; // Initially hide all song containers
        
        // Add all songs to the container
        albumSongs.forEach(song => {
            const songElement = createSongElement(song);
            albumContainer.appendChild(songElement);
        });
        
        // Add the album container to the wrapper
        songsContainerWrapper.appendChild(albumContainer);
    });
    
    // Don't show any album initially
    // The albums will only be shown when clicked
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
        console.log(`scrollToAlbums called with albumId: ${albumId}`);
        showAlbum(albumId);
    }

    function showAlbum(album) {
        console.log(`showAlbum called with album: ${album}`);
        
        // Check if album exists
        const albumElement = document.getElementById(`${album}-songs`);
        if (!albumElement) {
            console.error(`Album element #${album}-songs not found`);
            return;
        }
        
        // Hide all album containers
        const albums = document.querySelectorAll('.songs-container');
        albums.forEach(a => a.style.display = 'none');
        
        // Show the selected album's songs
        albumElement.style.display = 'flex';
        
        // Calculate precise offset for scrolling
        const playerHeight = document.getElementById('audio-player-container').offsetHeight;
        const extraPadding = 30; // Additional padding for better visibility
        
        // Scroll to position with delay to ensure UI updates
        setTimeout(() => {
            const albumRect = albumElement.getBoundingClientRect();
            const offsetPosition = window.pageYOffset + albumRect.top - playerHeight - extraPadding;
            
            console.log(`Scrolling to position: ${offsetPosition}`);
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Add focus effect
            albumElement.classList.add('album-focus');
            setTimeout(() => {
                albumElement.classList.remove('album-focus');
            }, 1000);
        }, 200);
    
        // Update current album
        currentAlbum = album;
        currentTrackIndex = 0;
        
        console.log(`Album display updated to: ${album}`);
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

// Remove ALL existing event listeners first to prevent duplicates
function removeAllEndedEventListeners() {
    // Clone the element to remove all event listeners
    const oldAudio = audioPlayer;
    const newAudio = oldAudio.cloneNode(true);
    oldAudio.parentNode.replaceChild(newAudio, oldAudio);
    
    // Update the reference to the new element
    window.audioPlayer = newAudio;
    
    // Re-attach other necessary event listeners (excluding 'ended')
    newAudio.addEventListener("loadedmetadata", () => {
        if (!isNaN(newAudio.duration) && newAudio.duration > 0) {
            progressBar.value = 0;
            currentTimeElement.textContent = "0:00";
            durationTimeElement.textContent = formatTime(newAudio.duration);
        }
    });

    newAudio.addEventListener("timeupdate", () => {
        if (!isSeeking && !isNaN(newAudio.duration) && newAudio.duration > 0) {
            const progress = (newAudio.currentTime / newAudio.duration) * 100;
            progressBar.value = progress;
            currentTimeElement.textContent = formatTime(newAudio.currentTime);
        }
    });

    newAudio.addEventListener("pause", function() {
        if (currentPlayingSong) {
            const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
            if (icon) {
                icon.innerText = "volume_up";
            }
        }
    });

    newAudio.addEventListener("play", function() {
        if (currentPlayingSong) {
            const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
            if (icon) {
                icon.innerText = "graphic_eq";
            }
        }
    });

    // Add a single 'ended' listener that handles everything
    newAudio.addEventListener("ended", function() {
        console.log("Song ended, currentTrackIndex before:", currentTrackIndex);
        
        // Reset icon if needed
        if (currentPlayingSong) {
            const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
            if (icon) {
                icon.innerText = "volume_up";
            }
            currentPlayingSong = null;
        }
        
        // Play next song
        const activeSongs = songs.filter(song => song.album === currentAlbum);
        currentTrackIndex = (currentTrackIndex + 1) % activeSongs.length;
        
        console.log("Playing next song at index:", currentTrackIndex);
        
        if (activeSongs.length > 0) {
            const nextSong = activeSongs[currentTrackIndex];
            changeTrack(nextSong.file, nextSong.name);
        }
    });
    
    return newAudio;
}

// Fix changeTrack function to update currentTrackIndex accurately
function changeTrack(audioFile, trackName) {
    if (isRandomPlaying) isRandomPlaying = false;

    // البحث عن معلومات الأغنية الحالية
    const currentSong = songs.find(song => song.file === audioFile);
    const artistName = currentSong ? currentSong.artist : '';
    
    // الحصول على مُعرّف الألبوم الصحيح للأغنية
    const songAlbum = getSongAlbumById(audioFile);
    
    // تحديث الألبوم الحالي إذا تغير
    if (currentAlbum !== songAlbum) {
        currentAlbum = songAlbum;
        showAlbum(currentAlbum);
    }
    
    // تحديث مؤشر الأغنية الحالية لضمان الترتيب الصحيح للتشغيل
    const activeSongs = songs.filter(song => song.album === currentAlbum);
    currentTrackIndex = activeSongs.findIndex(song => song.file === audioFile);
    if (currentTrackIndex === -1) currentTrackIndex = 0;
    
    console.log("Changed to song index:", currentTrackIndex);
    
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
    updateMiniInfoBar(); // أضف هذا السطر لتحديث الشريط المصغر
}

// Simplified playNext function that will only be called manually
function playNext() {
    const activeSongs = songs.filter(song => song.album === currentAlbum);
    currentTrackIndex = (currentTrackIndex + 1) % activeSongs.length;
    
    console.log("Manual playNext, new index:", currentTrackIndex);
    
    if (activeSongs.length > 0) {
        const nextSong = activeSongs[currentTrackIndex];
        changeTrack(nextSong.file, nextSong.name);
    }
}

// Simplified playPrevious function
function playPrevious() {
    const activeSongs = songs.filter(song => song.album === currentAlbum);
    currentTrackIndex = (currentTrackIndex - 1 + activeSongs.length) % activeSongs.length;
    
    console.log("Manual playPrevious, new index:", currentTrackIndex);
    
    if (activeSongs.length > 0) {
        const prevSong = activeSongs[currentTrackIndex];
        changeTrack(prevSong.file, prevSong.name);
    }
}

// REMOVE all other 'ended' event listeners from the code
// Do this by cleaning up all event listeners and setting up only what we need
window.addEventListener("load", () => {
    // Generate song containers dynamically
    generateSongContainers();
    
    // Reset audio player event listeners
    audioPlayer = removeAllEndedEventListeners();
    
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

// Utility function to create clean album playlists without duplicates
// and ensure proper sequence based on filenames
function getAlbumPlaylist(albumId) {
    // Filter songs by album
    let albumSongs = songs.filter(song => song.album === albumId);
    
    // Create a map to handle duplicates - keep only the first occurrence of each file
    const uniqueSongs = new Map();
    albumSongs.forEach(song => {
        // Only add if not already in the map
        if (!uniqueSongs.has(song.file)) {
            uniqueSongs.set(song.file, song);
        }
    });
    
    // Convert back to array
    albumSongs = Array.from(uniqueSongs.values());
    
    // Sort songs by their filenames to ensure correct sequence
    albumSongs.sort((a, b) => {
        // Extract numbers from filenames for numeric sorting
        const numA = parseInt(a.file.match(/^\d+/) || ['0']);
        const numB = parseInt(b.file.match(/^\d+/) || ['0']);
        return numA - numB;
    });
    
    return albumSongs;
}

// Update change track to use the clean playlist
function changeTrack(audioFile, trackName) {
    if (isRandomPlaying) isRandomPlaying = false;

    // Get song and album info
    const currentSong = songs.find(song => song.file === audioFile);
    const artistName = currentSong ? currentSong.artist : '';
    const songAlbum = getSongAlbumById(audioFile);
    
    // Update album if changed
    if (currentAlbum !== songAlbum) {
        currentAlbum = songAlbum;
        showAlbum(currentAlbum);
    }
    
    // Get a clean, ordered playlist for this album
    const albumPlaylist = getAlbumPlaylist(currentAlbum);
    
    // Find the exact index of this song in the clean playlist
    currentTrackIndex = albumPlaylist.findIndex(song => song.file === audioFile);
    if (currentTrackIndex === -1) currentTrackIndex = 0;
    
    console.log("Playing song:", trackName, "at index:", currentTrackIndex, "of", albumPlaylist.length, "songs");
    
    // Update UI and play the song
    const albumDisplayName = getAlbumDisplayName(songAlbum);
    
    const trackNameElement = document.getElementById("track-name");
    const albumNameElement = document.getElementById("album-name");
    
    trackNameElement.classList.add('track-name-changed');
    albumNameElement.classList.add('album-name-changed');
    
    setTimeout(() => {
        trackNameElement.classList.remove('track-name-changed');
        albumNameElement.classList.remove('album-name-changed');
    }, 2000);
    
    trackNameElement.querySelector('span').textContent = trackName;
    albumNameElement.querySelector('span').textContent = albumDisplayName;
    
    const audioSource = document.getElementById("audio-source");
    audioSource.src = audioFile;

    audioPlayer.load();
    audioPlayer.play();

    playPauseButton.innerHTML = '<span class="material-icons">pause</span>';

    // Update icon states
    document.querySelectorAll('.song i.material-symbols-outlined').forEach(icon => {
        icon.innerText = "volume_up";
    });
    
    const songId = audioFile.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    const songElements = document.querySelectorAll(`.song[data-song-id="${songId}"]`);
    
    currentPlayingSong = songElements.length ? songElements[0] : null;
    
    if (currentPlayingSong) {
        const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
        if (icon) {
            icon.innerText = "graphic_eq";
        }
    }

    saveLastPlayed(audioFile, trackName, songAlbum);
    updateMiniInfoBar(); // أضف هذا السطر لتحديث الشريط المصغر
}

// Fix playNext to use the clean playlist
function playNext() {
    // Get clean, ordered playlist for current album
    const albumPlaylist = getAlbumPlaylist(currentAlbum);
    
    // Safety check
    if (albumPlaylist.length === 0) return;
    
    // Calculate next track index
    const oldIndex = currentTrackIndex;
    currentTrackIndex = (currentTrackIndex + 1) % albumPlaylist.length;
    
    // Debug info
    console.log(`Moving from song ${oldIndex} to ${currentTrackIndex} in album ${currentAlbum}`);
    
    // Play the next track
    const nextSong = albumPlaylist[currentTrackIndex];
    changeTrack(nextSong.file, nextSong.name);
}

// Fix playPrevious to use the clean playlist
function playPrevious() {
    // Get clean, ordered playlist for current album
    const albumPlaylist = getAlbumPlaylist(currentAlbum);
    
    // Safety check
    if (albumPlaylist.length === 0) return;
    
    // Calculate previous track index
    const oldIndex = currentTrackIndex;
    currentTrackIndex = (currentTrackIndex - 1 + albumPlaylist.length) % albumPlaylist.length;
    
    // Debug info
    console.log(`Moving from song ${oldIndex} to ${currentTrackIndex} in album ${currentAlbum}`);
    
    // Play the previous track
    const prevSong = albumPlaylist[currentTrackIndex];
    changeTrack(prevSong.file, prevSong.name);
}

// Remove old event listeners and add a new one
function setupAudioEndedListener() {
    // Instead of reassigning audioPlayer, get the DOM element directly
    const player = document.getElementById('audio-player');
    
    // Clone the element to remove all existing event listeners
    const newAudio = player.cloneNode(true);
    player.parentNode.replaceChild(newAudio, player);
    
    // Get the new audio element from DOM instead of reassigning
    const updatedPlayer = document.getElementById('audio-player');
    
    // Re-attach necessary event listeners
    updatedPlayer.addEventListener("loadedmetadata", () => {
        if (!isNaN(updatedPlayer.duration) && updatedPlayer.duration > 0) {
            progressBar.value = 0;
            currentTimeElement.textContent = "0:00";
            durationTimeElement.textContent = formatTime(updatedPlayer.duration);
        }
    });

    updatedPlayer.addEventListener("timeupdate", () => {
        if (!isSeeking && !isNaN(updatedPlayer.duration) && updatedPlayer.duration > 0) {
            const progress = (updatedPlayer.currentTime / updatedPlayer.duration) * 100;
            progressBar.value = progress;
            currentTimeElement.textContent = formatTime(updatedPlayer.currentTime);
        }
    });

    updatedPlayer.addEventListener("pause", function() {
        if (currentPlayingSong) {
            const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
            if (icon) {
                icon.innerText = "volume_up";
            }
        }
    });

    updatedPlayer.addEventListener("play", function() {
        if (currentPlayingSong) {
            const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
            if (icon) {
                icon.innerText = "graphic_eq";
            }
        }
    });

    // Add a single ended event listener that calls playNext
    updatedPlayer.addEventListener("ended", function() {
        // Reset current song icon
        if (currentPlayingSong) {
            const icon = currentPlayingSong.querySelector('i.material-symbols-outlined');
            if (icon) {
                icon.innerText = "volume_up";
            }
            currentPlayingSong = null;
        }
        
        // Play the next song
        playNext();
    });
    
    // No need to return anything
}

// Update the initialization function to not reassign audioPlayer
window.addEventListener("load", function() {
    // Initialize song containers
    generateSongContainers();
    
    // Set up proper audio ended handling - don't reassign
    setupAudioEndedListener();
    
    // Initialize UI components
    loadFavorites();
    initializeFavoriteButtons();
    
    // Restore last played song if available
    restoreLastPlayed();
    
    // Set default values
    currentTimeElement.textContent = "00:00";
    durationTimeElement.textContent = "00:00";
    
    // Load albums page
    loadAlbumsPage(1);
});

// This function ensures album items have proper event listeners
function initializeAlbumItems() {
    console.log("Initializing album items...");
    
    // Select all album items
    const albumItems = document.querySelectorAll('.new-album-item');
    
    albumItems.forEach(item => {
        // Get album ID from data attribute
        const albumId = item.dataset.albumId;
        if (!albumId) {
            console.error("Album item missing albumId data attribute:", item);
            return;
        }
        
        // Remove any existing event listeners by cloning
        const newItem = item.cloneNode(true);
        if (item.parentNode) {
            item.parentNode.replaceChild(newItem, item);
        }
        
        // Add a fresh click event listener
        newItem.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`Album clicked: ${albumId}`);
            
            // First try to find the album container
            const albumContainer = document.getElementById(`${albumId}-songs`);
            if (!albumContainer) {
                console.error(`Album container not found: #${albumId}-songs`);
                // Try emergency function
                if (typeof window.directShowAlbum === 'function') {
                    window.directShowAlbum(albumId);
                }
                return;
            }
            
            // Hide all album containers
            document.querySelectorAll('.songs-container').forEach(container => {
                container.style.display = 'none';
            });
            
            // Show this album's container
            albumContainer.style.display = 'flex';
            
            // Add visual focus
            albumContainer.classList.add('album-focus');
            
            // Update current album tracking
            window.currentAlbum = albumId;
            window.currentTrackIndex = 0;
            
            // Scroll to the container using the same positioning as window.showAlbum
            setTimeout(() => {
                const playerHeight = document.getElementById('audio-player-container').offsetHeight || 0;
                const extraPadding = 0; // Align directly with container top
                const offsetPosition = albumContainer.offsetTop - playerHeight - extraPadding;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                setTimeout(() => {
                    albumContainer.classList.remove('album-focus');
                }, 1000);
            }, 200);
        });
    });
    
    console.log(`${albumItems.length} album items initialized`);
}

// Make sure we have only one showAlbum function
window.showAlbum = function(albumId) {
    console.log(`Global showAlbum called with: ${albumId}`);
    
    // Try to find the album container
    const albumContainer = document.getElementById(`${albumId}-songs`);
    if (!albumContainer) {
        console.error(`Album container not found: #${albumId}-songs`);
        return;
    }
    
    // Hide all album containers
    document.querySelectorAll('.songs-container').forEach(container => {
        container.style.display = 'none';
    });
    
    // Show this album's container
    albumContainer.style.display = 'flex';
    
    // Update global tracking
    window.currentAlbum = albumId;
    window.currentTrackIndex = 0;
    
    // Scroll to the container
    setTimeout(() => {
        const playerHeight = document.getElementById('audio-player-container').offsetHeight || 0;
        const extraPadding = 30;
        const offsetPosition = window.pageYOffset + albumContainer.getBoundingClientRect().top - playerHeight - extraPadding;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Add visual focus
        albumContainer.classList.add('album-focus');
        setTimeout(() => {
            albumContainer.classList.remove('album-focus');
        }, 1000);
    }, 200);
};

// Update the scrollToAlbums function to call window.showAlbum
function scrollToAlbums(albumId) {
    console.log(`scrollToAlbums called with: ${albumId}`);
    if (window.showAlbum) {
        window.showAlbum(albumId);
    }
}

window.addEventListener("load", function() {
    // Initialize song containers
    generateSongContainers();
    
    // Set up proper audio ended handling - don't reassign
    setupAudioEndedListener();
    
    // Initialize UI components
    loadFavorites();
    initializeFavoriteButtons();
    
    // Load albums page
    loadAlbumsPage(1);
    
    // Ensure default album is shown - ADDED THIS EXPLICIT CALL
    setTimeout(() => {
        // Show the default album
        const defaultAlbum = "starchaabi";
        const defaultAlbumContainer = document.getElementById(`${defaultAlbum}-songs`);
        
        if (defaultAlbumContainer) {
            console.log("Showing default album:", defaultAlbum);
            
            // Hide all first
            document.querySelectorAll('.songs-container').forEach(container => {
                container.style.display = 'none';
            });
            
            // Show default
            defaultAlbumContainer.style.display = 'flex';
            currentAlbum = defaultAlbum;
        } else {
            console.error("Default album not found, showing first available album");
            
            // If default not found, show first available album
            const firstAlbumContainer = document.querySelector('.songs-container');
            if (firstAlbumContainer) {
                firstAlbumContainer.style.display = 'flex';
                currentAlbum = firstAlbumContainer.id.replace('-songs', '');
            }
        }
    }, 500);
    
    // Restore last played song if available (after showing default album)
    setTimeout(() => {
        restoreLastPlayed();
    }, 800);
    
    // Set default values
    currentTimeElement.textContent = "00:00";
    durationTimeElement.textContent = "00:00";
});

// أضف هذا الكود في ملف main.js أو player.js

// دالة لتبديل حالة طي مشغل الصوت
function togglePlayerCollapse() {
    const playerContainer = document.getElementById('audio-player-container');
    const miniInfoBar = document.querySelector('.mini-info-bar .song-title');
    const currentTrackName = document.querySelector('#track-name span').textContent;
    
    // تبديل فئة الطي
    playerContainer.classList.toggle('collapsed');
    
    // تحديث عنوان الأغنية في الشريط المصغر
    if (currentTrackName && currentTrackName !== 'لم يتم اختيار أغنية') {
        miniInfoBar.textContent = currentTrackName;
    } else {
        miniInfoBar.textContent = 'لم يتم تشغيل أي أغنية';
    }
    
    // تعديل تباعد الصفحة بناءً على حالة المشغل
    if (playerContainer.classList.contains('collapsed')) {
        document.body.style.paddingTop = '65px'; // مساحة أقل عند طي المشغل
    } else {
        document.body.style.paddingTop = '185px'; // إعادة المساحة الأصلية
    }
}

// إضافة الحدث عند تحميل النافذة
window.addEventListener('load', function() {
    // تهيئة زر طي المشغل
    const collapseBtn = document.getElementById('player-collapse-btn');
    if (collapseBtn) {
        collapseBtn.addEventListener('click', togglePlayerCollapse);
    }
    
    // تحديث معلومات الشريط المصغر عند تغيير الأغنية
    audioPlayer.addEventListener('play', function() {
        const currentTrackName = document.querySelector('#track-name span').textContent;
        const miniInfoBar = document.querySelector('.mini-info-bar .song-title');
        if (miniInfoBar && currentTrackName) {
            miniInfoBar.textContent = currentTrackName;
        }
    });
});

// تحديث معلومات الأغنية في الشريط المصغر عند تغيير الأغنية
function updateMiniInfoBar() {
    const currentTrackName = document.querySelector('#track-name span').textContent;
    const miniInfoBar = document.querySelector('.mini-info-bar .song-title');
    if (miniInfoBar && currentTrackName && currentTrackName !== 'لم يتم اختيار أغنية') {
        miniInfoBar.textContent = currentTrackName;
    }
}

// إضافة استدعاء لتحديث الشريط المصغر داخل دالة changeTrack
// أضف هذا السطر في نهاية دالة changeTrack الموجودة
// updateMiniInfoBar();

