/**
 * Albums data structure
 * This file contains the definition of all albums and their metadata
 */

# شرح ملف بيانات الألبومات

## الهدف من هذا الملف:
هذا ملف خاص بتعريف الألبومات وبياناتها بشكل منفصل عن منطق التطبيق الرئيسي، لتسهيل إضافة وتعديل الألبومات بدون التأثير على الكود الأساسي.

## محتويات الملف:

1. **مصفوفة `allAlbums`**:
   - تحتوي على معلومات جميع الألبومات المتاحة
   - لكل ألبوم ثلاث خصائص:
     - `id`: المعرف الفريد للألبوم (يستخدم للربط مع الأغاني)
     - `name`: اسم الألبوم الذي سيظهر للمستخدم
     - `image`: مسار صورة الألبوم

2. **دالة `getAlbumDisplayName`**:
   - تقوم بإرجاع اسم الألبوم عند إعطائها معرف الألبوم
   - مفيدة لعرض اسم الألبوم في واجهة المستخدم

3. **دالة `getAlbumImage`**:
   - تقوم بإرجاع مسار صورة الألبوم عند إعطائها معرف الألبوم
   - مفيدة لعرض صورة الألبوم في واجهة المستخدم

## كيفية إضافة ألبوم جديد:

أضف سطر جديد إلى مصفوفة `allAlbums` بالشكل التالي:
```javascript
{ id: 'معرف-الألبوم-الجديد', name: 'اسم الألبوم الجديد', image: 'مسار-صورة-الألبوم.jpg' }
```

**ملاحظة**: تأكد أن معرف الألبوم (`id`) يطابق المعرف المستخدم في خاصية `album` للأغاني في ملف `main.js`.

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
    { id: 'kamalnew', name: 'KAMAL NEW', image: 'kamalnews.png' },
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
