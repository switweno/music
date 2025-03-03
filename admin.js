// Authentication check - run before any other code
(function() {
    const token = sessionStorage.getItem('adminAuth');
    if (!token) {
        window.location.href = 'index.html';
        throw new Error('Authentication required');
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and tabs
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the corresponding tab
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // =================== Album Functionality ===================
    const generateAlbumBtn = document.getElementById('generate-album');
    const albumCodeOutput = document.getElementById('album-code-output');
    const albumCode = document.getElementById('album-code');
    const copyAlbumCodeBtn = document.getElementById('copy-album-code');
    
    generateAlbumBtn.addEventListener('click', function() {
        const albumId = document.getElementById('album-id').value.trim();
        const albumName = document.getElementById('album-name').value.trim();
        const albumImage = document.getElementById('album-image').value.trim();
        
        if (!albumId || !albumName || !albumImage) {
            alert('يرجى ملء جميع حقول الألبوم');
            return;
        }
        
        const code = `{ id: '${albumId}', name: '${albumName}', image: '${albumImage}' },`;
        
        albumCode.textContent = code;
        albumCodeOutput.style.display = 'block';
        
        // Scroll to the code output
        albumCodeOutput.scrollIntoView({behavior: 'smooth'});
    });
    
    copyAlbumCodeBtn.addEventListener('click', function() {
        copyToClipboard(albumCode.textContent);
        this.textContent = 'تم النسخ!';
        setTimeout(() => {
            this.textContent = 'نسخ';
        }, 2000);
    });
    
    // Albums List Generator
    const generateAlbumsListBtn = document.getElementById('generate-albums-list');
    const albumsListOutput = document.getElementById('albums-list-output');
    const albumsListCode = document.getElementById('albums-list-code');
    const copyAlbumsListBtn = document.getElementById('copy-albums-list');
    
    generateAlbumsListBtn.addEventListener('click', function() {
        const albumsCount = parseInt(document.getElementById('albums-count').value);
        
        if (isNaN(albumsCount) || albumsCount < 1) {
            alert('يرجى إدخال عدد صحيح للألبومات');
            return;
        }
        
        let code = '// Album definitions\nconst allAlbums = [\n';
        
        for (let i = 1; i <= albumsCount; i++) {
            code += `    { id: 'album${i}', name: 'ALBUM ${i}', image: 'album${i}.png' },\n`;
        }
        
        code += '    // Add more albums as needed\n];';
        
        albumsListCode.textContent = code;
        albumsListOutput.style.display = 'block';
        
        // Scroll to the code output
        albumsListOutput.scrollIntoView({behavior: 'smooth'});
    });
    
    copyAlbumsListBtn.addEventListener('click', function() {
        copyToClipboard(albumsListCode.textContent);
        this.textContent = 'تم النسخ!';
        setTimeout(() => {
            this.textContent = 'نسخ';
        }, 2000);
    });
    
    // =================== Songs Functionality ===================
    const previewSongsBtn = document.getElementById('preview-songs');
    const generateSongsBtn = document.getElementById('generate-songs');
    const songsPreview = document.getElementById('songs-preview');
    const songsCodeOutput = document.getElementById('songs-code-output');
    const songsCode = document.getElementById('songs-code');
    const copySongsCodeBtn = document.getElementById('copy-songs-code');
    
    previewSongsBtn.addEventListener('click', function() {
        const songPrefix = document.getElementById('song-prefix').value.trim();
        const songNamePrefix = document.getElementById('song-name-prefix').value.trim();
        const startNumber = parseInt(document.getElementById('start-number').value);
        const songCount = parseInt(document.getElementById('song-count').value);
        const numberPadding = parseInt(document.getElementById('number-padding').value);
        const fileExtension = document.getElementById('file-extension').value;
        
        if (!songPrefix || !songNamePrefix || isNaN(startNumber) || isNaN(songCount)) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }
        
        songsPreview.innerHTML = '';
        
        for (let i = startNumber; i < startNumber + songCount; i++) {
            let fileName;
            
            if (numberPadding === 0) {
                // No numbering option (for URLs)
                fileName = `${songPrefix}${fileExtension}`;
            } else {
                // Regular numbering with padding
                const paddedNumber = i.toString().padStart(numberPadding, '0');
                fileName = `${paddedNumber} ${songPrefix}${fileExtension}`;
            }
            
            const songName = `${songNamePrefix} ${i}`;
            
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            previewItem.textContent = `${fileName} - ${songName}`;
            
            songsPreview.appendChild(previewItem);
        }
        
        songsPreview.style.display = 'block';
    });
    
    generateSongsBtn.addEventListener('click', function() {
        const songPrefix = document.getElementById('song-prefix').value.trim();
        const songNamePrefix = document.getElementById('song-name-prefix').value.trim();
        const startNumber = parseInt(document.getElementById('start-number').value);
        const songCount = parseInt(document.getElementById('song-count').value);
        const albumId = document.getElementById('album-id-songs').value.trim();
        const numberPadding = parseInt(document.getElementById('number-padding').value);
        const fileExtension = document.getElementById('file-extension').value;
        
        if (!songPrefix || !songNamePrefix || !albumId || isNaN(startNumber) || isNaN(songCount)) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }
        
        let code = '// Songs for album: ' + albumId + '\n';
        
        for (let i = startNumber; i < startNumber + songCount; i++) {
            let fileName;
            
            if (numberPadding === 0) {
                // No numbering option (for URLs)
                fileName = `${songPrefix}${fileExtension}`;
            } else {
                // Regular numbering with padding
                const paddedNumber = i.toString().padStart(numberPadding, '0');
                fileName = `${paddedNumber} ${songPrefix}${fileExtension}`;
            }
            
            const songName = `${songNamePrefix} ${i}`;
            
            code += `{ file: '${fileName}', name: '${songName}', album: '${albumId}' },\n`;
        }
        
        songsCode.textContent = code;
        songsCodeOutput.style.display = 'block';
        
        // Scroll to the code output
        songsCodeOutput.scrollIntoView({behavior: 'smooth'});
    });
    
    copySongsCodeBtn.addEventListener('click', function() {
        copyToClipboard(songsCode.textContent);
        this.textContent = 'تم النسخ!';
        setTimeout(() => {
            this.textContent = 'نسخ';
        }, 2000);
    });
    
    // Helper function to copy text to clipboard
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});
