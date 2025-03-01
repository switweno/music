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
        // Fallback for browsers that don't support Intersection Observer
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
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
                
                // Add a fade-in effect
                img.style.opacity = 0;
                setTimeout(() => {
                    img.style.opacity = 1;
                }, 50);
            }
        });
    }, config);

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        // Add placeholder styles
        img.style.transition = 'opacity 0.3s ease';
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
    songElement.setAttribute('onclick', `changeTrack('${song.file}', '${song.name}')`);
    
    // Generate unique ID for favorite functionality
    const songId = song.file.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    songElement.dataset.songId = songId;
    
    songElement.innerHTML = `
        <i class="material-symbols-outlined">volume_up</i>
        <div class="song-title">${song.name}</div>
        <button class="favorite-btn" onclick="toggleFavorite(event, '${songId}', '${song.file}', '${song.name}', '')">
            <i class="material-icons">favorite_border</i>
        </button>
    `;
    
    return songElement;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLazyImages();
    initLazyAlbums();
    
    // Re-check for new lazy elements after album page changes
    document.addEventListener('albumPageChanged', () => {
        setTimeout(() => {
            initLazyImages();
        }, 100);
    });
});
