// قائمة الأغاني
const songs = [
    { file: '01 casa star.mp3', name: 'casa star 1', album: 'casastar' },
    { file: '02 casa star.mp3', name: 'casa star 2 ', album: 'casastar' },
    { file: '03 casa star.mp3', name: 'casa star 3', album: 'casastar' },
    { file: '04 casa star.mp3', name: 'casa star 4', album: 'casastar' },
	{ file: '05 casa star.mp3', name: 'casa star 5', album: 'casastar' },
	{ file: '06 casa star.mp3', name: 'casa star 6', album: 'casastar' },
    { file: '07 casa star.mp3', name: 'casa star 7', album: 'casastar' },
    { file: '08 casa star.mp3', name: 'casa star 8', album: 'casastar' },
    { file: '09 casa star.mp3', name: 'casa star 9', album: 'casastar' },
    { file: '10 casa star.mp3', name: 'casa star 10', album: 'casastar' },
    { file: '11 casa star.mp3', name: 'casa star 11', album: 'casastar' },
    { file: '12 casa star.mp3', name: 'casa star 12', album: 'casastar' },
    { file: '13 casa star.mp3', name: 'casa star 13', album: 'casastar' },
    { file: '01 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 1', album: 'popular' },
    { file: '02 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 2', album: 'popular' },
    { file: '03 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 3', album: 'popular' },
    { file: '04 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 4', album: 'popular' },
	{ file: '05 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 5', album: 'popular' },
	{ file: '06 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 6', album: 'popular' },
    { file: '07 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 7', album: 'popular' },
    { file: '08 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 8', album: 'popular' },
    { file: '09 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 9', album: 'popular' },
    { file: '10 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 10', album: 'popular' },
    { file: '11 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 11', album: 'popular' },
    { file: '12 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 12', album: 'popular' },
    { file: '13 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 13', album: 'popular' },
    { file: '14 cha3biat shab loutar.mp3.mp3', name: 'أغنية شعبية 14', album: 'popular' },
    { file: 'rai1.mp3', name: 'أغنية راي 1', album: 'rai' },
    { file: 'amazigh2.mp3', name: 'أغنية أمازيغية 1', album: 'amazigh' },
    { file: 'amazigh1.mp3', name: 'أغنية أمازيغية 2', album: 'amazigh' },
    { file: 'amazigh3.mp3', name: 'أغنية أمازيغية 3', album: 'amazigh' },
    { file: 'amazigh5.mp3', name: 'أغنية أمازيغية 5', album: 'amazigh' },  
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
    
    { file: 'eastern1.mp3', name: 'أغنية شرقية 1', album: 'eastern' },
    { file: 'eastern2.mp3', name: 'أغنية شرقية 2', album: 'eastern' },
    { file: 'eastern3.mp3', name: 'أغنية شرقية 3', album: 'eastern' },
    { file: 'LOOP16.mp3', name: 'أغنية مغربية 1', album: 'moroccan' },
    { file: 'LOOP20.mp3', name: 'أغنية مغربية 2', album: 'moroccan' },
    { file: 'LOOP21.mp3', name: 'أغنية مغربية 3', album: 'moroccan' },
    { file: 'LOOP022.mp3', name: 'أغنية مغربية 4', album: 'moroccan' }
];

let currentTrackIndex = 0;
let isRandomPlaying = false;
let currentAlbum = "casastar"; // الألبوم الافتراضي

// دالة عرض الألبوم
function showAlbum(album) {
    const albums = document.querySelectorAll('.songs-container');
    albums.forEach(a => a.style.display = 'none'); // إخفاء جميع الألبومات

    document.getElementById(`${album}-songs`).style.display = 'flex'; // عرض الألبوم المحدد

    currentAlbum = album; // تحديث الألبوم الحالي
    currentTrackIndex = 0; // إعادة المؤشر إلى البداية
}

// دالة تغيير الأغنية
function changeTrack(audioFile, trackName) {
    if (isRandomPlaying) {
        isRandomPlaying = false;
    }

    document.getElementById("track-name").textContent = trackName;
    const audioSource = document.getElementById("audio-source");
    audioSource.src = audioFile;

    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.load();
    audioPlayer.play();

    // تحديث حالة زر التشغيل/الإيقاف المؤقت
    playPauseButton.innerHTML = '<span class="material-icons">pause</span>';

    saveLastPlayed(audioFile, trackName, currentAlbum); // حفظ الأغنية والألبوم
}

const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-btn");

// تبديل بين الإيقاف والتشغيل
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<span class="material-icons">pause</span>';
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<span class="material-icons">play_arrow</span>';
    }
}


// دالة تشغيل الأغنية التالية
function playNext() {
    const activeSongs = songs.filter(song => song.album === currentAlbum);

    currentTrackIndex = (currentTrackIndex + 1) % activeSongs.length; // الانتقال للأغنية التالية (دائرية)
    const nextSong = activeSongs[currentTrackIndex];

    changeTrack(nextSong.file, nextSong.name);
}

// دالة تشغيل الأغنية السابقة
function playPrevious() {
    const activeSongs = songs.filter(song => song.album === currentAlbum);

    currentTrackIndex = (currentTrackIndex - 1 + activeSongs.length) % activeSongs.length; // الانتقال للأغنية السابقة (دائرية)
    const prevSong = activeSongs[currentTrackIndex];

    changeTrack(prevSong.file, prevSong.name);
}

// دالة حفظ آخر أغنية مشغلة
function saveLastPlayed(file, name, album) {
    localStorage.setItem('lastPlayed', JSON.stringify({ file, name, album }));
}

// استعادة آخر أغنية تم تشغيلها
function restoreLastPlayed() {
    const lastPlayed = JSON.parse(localStorage.getItem('lastPlayed'));
    if (lastPlayed) {
        currentAlbum = lastPlayed.album || "casastar"; // تحديد الألبوم الحالي
        showAlbum(currentAlbum); // عرض الألبوم الصحيح
        changeTrack(lastPlayed.file, lastPlayed.name);
    }

    // تحديث حالة زر التشغيل/الإيقاف المؤقت بناءً على حالة مشغل الصوت
    if (audioPlayer.paused) {
        playPauseButton.innerHTML = '<span class="material-icons">play_arrow</span>';
    } else {
        playPauseButton.innerHTML = '<span class="material-icons">pause</span>';
    }
}

// تشغيل الأغنية التالية تلقائيًا عند الانتهاء
document.getElementById("audio-player").addEventListener("ended", playNext);

// تحميل الصفحة
window.onload = function () {
    showAlbum("casastar");
    restoreLastPlayed();
};


function scrollAlbums(direction) {
    const scrollContainer = document.querySelector('.album-scroll-container');
    const scrollAmount = 150; // مقدار التمرير

    scrollContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

    
  
function toggleSongs(button) {
    const album = button.closest('.songs-container'); // الحصول على الألبوم المرتبط بالزر
    const hiddenSongs = album.querySelectorAll('.song.hidden'); // العثور على الأغاني المخفية
    const spinner = button.querySelector('.spinner'); // العثور على الدائرة الدوارة داخل الزر
    
    // إظهار الدائرة الدوارة
    spinner.style.display = "inline-block";
    
    setTimeout(() => {
        hiddenSongs.forEach(song => {
            song.classList.remove('hidden'); // إزالة الـ "hidden" لإظهار الأغاني المخفية
        });

        // إخفاء الدائرة الدوارة
        spinner.style.display = "none";
        
        // إخفاء الزر بعد ظهور الأغاني المخفية
        button.style.display = "none";
    }, 1000); // مدة الدوران (يمكنك تعديلها)
}

