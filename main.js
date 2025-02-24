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
let currentAlbum = "naydanouda"; // الألبوم الافتراضي
let isSeeking = false; // متغير للتحقق من السحب
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

// دالة تغيير الأغنية
function changeTrack(audioFile, trackName) {
    if (isRandomPlaying) isRandomPlaying = false;

    document.getElementById("track-name").textContent = trackName;
    const audioSource = document.getElementById("audio-source");
    audioSource.src = audioFile;

    audioPlayer.load();
    audioPlayer.play();

    playPauseButton.innerHTML = '<span class="material-icons">pause</span>';

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
            currentAlbum = lastPlayed.album || "naydanouda";
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
    showAlbum("naydanouda");
    restoreLastPlayed();

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

