/**
 * Lazy Loading Manager
 * Handles lazy loading for images and content
 */

// Configuration
const config = {
    rootMargin: '50px 0px',
    threshold: 0.1
};

// Lazy load images using Intersection Observer
function initLazyImages() {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
        return;
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '100px', threshold: 0.5 });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Lazy load album content
function initLazyAlbums() {
    if (!('IntersectionObserver' in window)) {
        return;
    }

    const albumObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const albumContainer = entry.target;
                const albumId = albumContainer.dataset.album;
                
                // Only load songs if not already loaded
                if (!albumContainer.classList.contains('loaded')) {
                    loadSongsForAlbum(albumId, albumContainer);
                    albumContainer.classList.add('loaded');
                }
                
                observer.unobserve(albumContainer);
            }
        });
    }, config);

    const albumContainers = document.querySelectorAll('.songs-container[data-album]');
    albumContainers.forEach(container => {
        albumObserver.observe(container);
    });
}

// Function to load songs for a specific album
function loadSongsForAlbum(albumId, container) {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-songs';
    loadingIndicator.innerHTML = '<div class="spinner"></div><p>جاري تحميل الأغاني...</p>';
    container.appendChild(loadingIndicator);

    // Filter songs by album
    const albumSongs = songs.filter(song => song.album === albumId);
    
    setTimeout(() => {
        // Remove loading indicator
        container.removeChild(loadingIndicator);
        
        // Generate song elements
        albumSongs.forEach(song => {
            const songElement = createSongElement(song);
            container.appendChild(songElement);
        });
        
        // Initialize favorite buttons for the newly added songs
        initializeFavoriteButtons();
    }, 300); // Simulate a short loading time for better UX
}

// Helper function to create a song element
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
    
    // Check if song is currently playing and update icon
    const currentAudio = document.getElementById('audio-source');
    if (currentAudio && currentAudio.src.includes(song.file)) {
        const icon = songElement.querySelector('i.material-symbols-outlined');
        if (icon) {
            icon.innerText = "graphic_eq";
        }
    }
    
    return songElement;
}

// Function to render albums with pagination
function renderAlbums() {
    const albumContainer = document.getElementById('album-container'); // تأكد من وجود هذا العنصر في HTML
    albumContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * albumsPerPage;
    const endIndex = startIndex + albumsPerPage;
    const albumsToShow = allAlbums.slice(startIndex, endIndex);

    albumsToShow.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.classList.add('album');

        const img = new Image();
        img.dataset.src = album.image;
        img.classList.add('lazy');
        img.alt = album.name;
        img.loading = 'lazy'; // تحميل الصورة عند الاقتراب منها
        albumElement.appendChild(img);

        const title = document.createElement('p');
        title.textContent = album.name;
        albumElement.appendChild(title);

        albumContainer.appendChild(albumElement);

        // تحميل الصورة مسبقًا
        preloadImage(album.image);
    });

    initLazyImages(); // تفعيل التحميل البطيء
}

// وظيفة لتحميل الصور مسبقًا عند اقترابها
function preloadImage(src) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Use requestIdleCallback for better performance when available
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            initLazyImages();
        });
    } else {
        setTimeout(initLazyImages, 500);
    }
    
    initLazyAlbums();
    
    // Re-check for new lazy elements after album page changes
    document.addEventListener('albumPageChanged', () => {
        setTimeout(() => {
            initLazyImages();
        }, 100);
    });
});
