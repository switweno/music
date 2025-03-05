/**
 * ملف معطّل للمفضلة - تم إلغاء ميزة مفضلة الألبومات
 */
console.log('Album favorites feature has been disabled');

// إنشاء واجهات فارغة للتوافق مع الكود الموجود
window.albumFavorites = {
    refresh: function() { return false; },
    toggle: function() { return false; },
    getList: function() { return []; },
    updateSection: function() { return false; }
};

window.refreshAlbumFavorites = function() {
    return false;
};
