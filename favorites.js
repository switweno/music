/**
 * نظام إدارة المفضلة
 */

class FavoritesManager {
    constructor() {
        this.favorites = [];
        this.loadFromStorage();
    }
    
    // تحميل المفضلة من التخزين المحلي
    loadFromStorage() {
        const stored = localStorage.getItem('musicFavorites');
        if (stored) {
            try {
                this.favorites = JSON.parse(stored);
            } catch (e) {
                console.error('خطأ في تحميل المفضلة:', e);
                this.favorites = [];
            }
        }
    }
    
    // حفظ المفضلة في التخزين المحلي
    saveToStorage() {
        localStorage.setItem('musicFavorites', JSON.stringify(this.favorites));
    }
    
    // إضافة أغنية إلى المفضلة
    addFavorite(song) {
        if (!this.isFavorite(song.id)) {
            this.favorites.push(song);
            this.saveToStorage();
            return true;
        }
        return false;
    }
    
    // إزالة أغنية من المفضلة
    removeFavorite(songId) {
        const index = this.favorites.findIndex(song => song.id === songId);
        if (index !== -1) {
            this.favorites.splice(index, 1);
            this.saveToStorage();
            return true;
        }
        return false;
    }
    
    // التحقق مما إذا كانت الأغنية في المفضلة
    isFavorite(songId) {
        return this.favorites.some(song => song.id === songId);
    }
    
    // الحصول على قائمة المفضلة
    getFavorites() {
        return [...this