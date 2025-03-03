/**
 * Advanced Audio Player Controller
 * This class handles all audio playback functionality
 */
class AudioController {
    constructor() {
        // Core elements
        this.audioPlayer = document.getElementById("audio-player");
        this.audioSource = document.getElementById("audio-source");
        this.progressBar = document.getElementById("progress-bar");
        this.playPauseBtn = document.getElementById("play-pause-btn");
        this.currentTimeEl = document.getElementById("current-time");
        this.durationTimeEl = document.getElementById("duration-time");
        this.volumeControl = document.getElementById("volume-control");
        this.trackNameEl = document.getElementById("track-name");
        this.albumNameEl = document.getElementById("album-name");
        
        // State
        this.currentAlbum = "starchaabi";
        this.currentTrackIndex = 0;
        this.currentSongFile = "";
        this.currentSongName = "";
        this.isRandomPlaying = false;
        this.isSeeking = false;
        
        // Initialize the player
        this.init();
    }
    
    // Setup the audio player and its event listeners
    init() {
        console.log("Initializing audio player...");
        
        // Remove any existing event listeners by cloning the element
        const oldAudio = this.audioPlayer;
        this.audioPlayer = oldAudio.cloneNode(true);
        oldAudio.parentNode.replaceChild(this.audioPlayer, oldAudio);
        
        // Update references
        this.audioSource = document.getElementById("audio-source");
        
        // Setup event listeners
        this.audioPlayer.addEventListener("loadedmetadata", () => this.handleLoadedMetadata());
        this.audioPlayer.addEventListener("timeupdate", () => this.handleTimeUpdate());
        this.audioPlayer.addEventListener("ended", () => this.playNext());
        this.audioPlayer.addEventListener("play", () => this.handlePlay());
        this.audioPlayer.addEventListener("pause", () => this.handlePause());
        
        // Progress bar events
        this.progressBar.addEventListener("mousedown", () => this.isSeeking = true);
        this.progressBar.addEventListener("input", () => this.handleProgressBarInput());
        this.progressBar.addEventListener("change", () => {
            this.handleProgressBarChange();
            this.isSeeking = false;
        });
        this.progressBar.addEventListener("mouseup", () => {
            this.handleProgressBarChange();
            this.isSeeking = false;
        });
        
        // Volume control
        this.volumeControl.addEventListener("input", () => {
            const volume = this.volumeControl.value / 100;
            this.audioPlayer.volume = volume;
            this.audioPlayer.muted = (volume === 0);
            
            const volumeBtn = document.getElementById("volume-btn");
            if (volumeBtn) {
                volumeBtn.innerHTML = this.audioPlayer.muted ? 
                    '<span class="material-icons">volume_off</span>' : 
                    '<span class="material-icons">volume_up</span>';
            }
        });
        
        console.log("Audio player initialized");
    }
    
    // Handle loaded metadata event
    handleLoadedMetadata() {
        if (!isNaN(this.audioPlayer.duration) && this.audioPlayer.duration > 0) {
            this.progressBar.value = 0;
            this.currentTimeEl.textContent = "0:00";
            this.durationTimeEl.textContent = this.formatTime(this.audioPlayer.duration);
        }
    }
    
    // Handle time update event
    handleTimeUpdate() {
        if (!this.isSeeking && !isNaN(this.audioPlayer.duration) && this.audioPlayer.duration > 0) {
            const progress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
            this.progressBar.value = progress;
            this.currentTimeEl.textContent = this.formatTime(this.audioPlayer.currentTime);
        }
    }
    
    // Handle progress bar input (during seeking)
    handleProgressBarInput() {
        if (!isNaN(this.audioPlayer.duration) && this.audioPlayer.duration > 0) {
            const newTime = (this.progressBar.value / 100) * this.audioPlayer.duration;
            this.currentTimeEl.textContent = this.formatTime(newTime);
        }
    }
    
    // Handle progress bar change (after seeking)
    handleProgressBarChange() {
        if (!isNaN(this.audioPlayer.duration) && this.audioPlayer.duration > 0) {
            this.audioPlayer.currentTime = (this.progressBar.value / 100) * this.audioPlayer.duration;
        }
    }
    
    // Handle play event
    handlePlay() {
        this.playPauseBtn.innerHTML = '<span class="material-icons">pause</span>';
        this.updateCurrentSongIcon("graphic_eq");
    }
    
    // Handle pause event
    handlePause() {
        this.playPauseBtn.innerHTML = '<span class="material-icons">play_arrow</span>';
        this.updateCurrentSongIcon("volume_up");
    }
    
    // Change the current track
    changeTrack(audioFile, trackName) {
        console.log(`Changing track to: ${audioFile}`);
        
        // Get song and album info
        const song = songs.find(s => s.file === audioFile);
        if (!song) {
            console.error("Song not found:", audioFile);
            return;
        }
        
        // Update current state
        this.currentSongFile = audioFile;
        this.currentSongName = trackName;
        this.currentAlbum = song.album;
        
        // Get clean playlist for this album
        const albumPlaylist = this.getAlbumPlaylist(this.currentAlbum);
        
        // Find current index in clean playlist
        this.currentTrackIndex = albumPlaylist.findIndex(s => s.file === audioFile);
        if (this.currentTrackIndex === -1) {
            this.currentTrackIndex = 0;
            console.warn("Song not found in album playlist. Using first song.");
        }
        
        // Reset all song icons
        document.querySelectorAll('.song i.material-symbols-outlined').forEach(icon => {
            icon.innerText = "volume_up";
        });
        
        // Update UI
        const albumName = this.getAlbumDisplayName(this.currentAlbum);
        
        // Visual effect for track change
        this.trackNameEl.classList.add('track-name-changed');
        this.albumNameEl.classList.add('album-name-changed');
        
        setTimeout(() => {
            this.trackNameEl.classList.remove('track-name-changed');
            this.albumNameEl.classList.remove('album-name-changed');
        }, 2000);
        
        // Update text content
        this.trackNameEl.querySelector('span').textContent = trackName;
        this.albumNameEl.querySelector('span').textContent = albumName;
        
        // THIS IS THE CRITICAL PART - Update audio source
        this.audioSource.src = audioFile;
        
        // Print source for debugging
        console.log(`Set audio source to: ${audioFile}`);
        console.log(`Current audio source: ${this.audioSource.src}`);
        
        // Load and play the audio
        this.audioPlayer.load();
        
        const playPromise = this.audioPlayer.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => console.log("Audio started playing"))
                .catch(err => console.error("Error playing audio:", err));
        }
        
        // Update visual indicators
        this.updateCurrentSongIcon("graphic_eq");
        
        // Save last played
        this.saveLastPlayed();
        
        // Switch to album view
        this.showAlbum(this.currentAlbum);
    }
    
    // Play next track
    playNext() {
        const albumPlaylist = this.getAlbumPlaylist(this.currentAlbum);
        
        if (albumPlaylist.length === 0) {
            console.error("Album has no songs");
            return;
        }
        
        // Get next track index
        const nextIndex = (this.currentTrackIndex + 1) % albumPlaylist.length;
        const nextSong = albumPlaylist[nextIndex];
        
        console.log(`Playing next song: ${nextIndex}/${albumPlaylist.length} - ${nextSong.file}`);
        
        this.changeTrack(nextSong.file, nextSong.name);
    }
    
    // Play previous track
    playPrevious() {
        const albumPlaylist = this.getAlbumPlaylist(this.currentAlbum);
        
        if (albumPlaylist.length === 0) {
            console.error("Album has no songs");
            return;
        }
        
        // Get previous track index
        const prevIndex = (this.currentTrackIndex - 1 + albumPlaylist.length) % albumPlaylist.length;
        const prevSong = albumPlaylist[prevIndex];
        
        console.log(`Playing previous song: ${prevIndex}/${albumPlaylist.length} - ${prevSong.file}`);
        
        this.changeTrack(prevSong.file, prevSong.name);
    }
    
    // Play random track
    playRandom() {
        const albumPlaylist = this.getAlbumPlaylist(this.currentAlbum);
        
        if (albumPlaylist.length === 0) {
            console.error("Album has no songs");
            return;
        }
        
        // Get random track
        const randomIndex = Math.floor(Math.random() * albumPlaylist.length);
        const randomSong = albumPlaylist[randomIndex];
        
        console.log(`Playing random song: ${randomIndex}/${albumPlaylist.length} - ${randomSong.file}`);
        
        this.changeTrack(randomSong.file, randomSong.name);
    }
    
    // Toggle play/pause
    togglePlayPause() {
        if (this.audioPlayer.paused) {
            this.audioPlayer.play();
        } else {
            this.audioPlayer.pause();
        }
    }
    
    // Save last played song
    saveLastPlayed() {
        localStorage.setItem('lastPlayed', JSON.stringify({
            file: this.currentSongFile,
            name: this.currentSongName,
            album: this.currentAlbum
        }));
    }
    
    // Restore last played song
    restoreLastPlayed() {
        try {
            const lastPlayed = JSON.parse(localStorage.getItem('lastPlayed'));
            if (lastPlayed && lastPlayed.file) {
                console.log(`Restoring last played: ${lastPlayed.file}`);
                this.currentAlbum = lastPlayed.album;
                this.currentSongFile = lastPlayed.file;
                this.currentSongName = lastPlayed.name;
                
                // Just set the source and update the UI, but don't play automatically
                this.audioSource.src = lastPlayed.file;
                this.audioPlayer.load();
                
                // Update track info display
                const albumName = this.getAlbumDisplayName(lastPlayed.album);
                this.trackNameEl.querySelector('span').textContent = lastPlayed.name;
                this.albumNameEl.querySelector('span').textContent = albumName;
                
                // Don't call showAlbum to avoid displaying songs immediately
            } else {
                console.log("No last played song found");
            }
        } catch (error) {
            console.error("Error restoring last played song:", error);
        }
    }
    
    // Show album
    showAlbum(albumId) {
        const albums = document.querySelectorAll('.songs-container');
        albums.forEach(a => a.style.display = 'none');
        
        const albumElement = document.getElementById(`${albumId}-songs`);
        if (albumElement) {
            albumElement.style.display = 'flex';
        } else {
            console.warn(`Album element not found: #${albumId}-songs`);
        }
        
        this.currentAlbum = albumId;
        console.log(`Switched to album: ${albumId}`);
    }
    
    // Get album display name
    getAlbumDisplayName(albumId) {
        const album = allAlbums.find(a => a.id === albumId);
        return album ? album.name : 'غير معروف';
    }
    
    // Get clean album playlist
    getAlbumPlaylist(albumId) {
        // Filter songs by album
        let albumSongs = songs.filter(song => song.album === albumId);
        
        // Remove duplicates
        const uniqueSongs = new Map();
        albumSongs.forEach(song => {
            if (!uniqueSongs.has(song.file)) {
                uniqueSongs.set(song.file, song);
            }
        });
        
        // Convert back to array
        albumSongs = Array.from(uniqueSongs.values());
        
        // Sort by track number
        albumSongs.sort((a, b) => {
            const numA = parseInt(a.file.match(/^(\d+)/) || ['0']); 
            const numB = parseInt(b.file.match(/^(\d+)/) || ['0']);
            return numA - numB;
        });
        
        return albumSongs;
    }
    
    // Format time in MM:SS
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    // Update current song icon
    updateCurrentSongIcon(iconName) {
        if (this.currentSongFile) {
            const songId = this.currentSongFile.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
            const songElements = document.querySelectorAll(`.song[data-song-id="${songId}"]`);
            
            if (songElements.length > 0) {
                songElements.forEach(element => {
                    const icon = element.querySelector('i.material-symbols-outlined');
                    if (icon) {
                        icon.innerText = iconName;
                    }
                });
            }
        }
    }
}

// Create global player instance
let audioController;

// Initialize the audio controller when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("Creating audio controller...");
    audioController = new AudioController();
    
    // Setup global functions to interface with the controller
    window.changeTrack = (file, name) => audioController.changeTrack(file, name);
    window.playNext = () => audioController.playNext();
    window.playPrevious = () => audioController.playPrevious();
    window.playRandom = () => audioController.playRandom();
    window.togglePlayPause = () => audioController.togglePlayPause();
    window.showAlbum = (albumId) => audioController.showAlbum(albumId);
    
    // Load any saved song info but don't play or show album
    setTimeout(() => {
        audioController.restoreLastPlayed();
    }, 1000);
});