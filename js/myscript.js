// 获取按钮和图像容器
const showMoreButton = document.getElementById('showMore');
const gallery = document.getElementById('gallery');

// 图片的数组
const additionalImages = [
    { src: 'image4.jpg', alt: '作品 4' },
    { src: 'image5.jpg', alt: '作品 5' },
    { src: 'image6.jpg', alt: '作品 6' }
];

// 点击按钮后显示更多图片
showMoreButton.addEventListener('click', () => {
    additionalImages.forEach(image => {
        // 创建新的图像元素
        const newImageDiv = document.createElement('div');
        newImageDiv.classList.add('image-container');
        
        const newImage = document.createElement('img');
        newImage.src = image.src;
        newImage.alt = image.alt;

        // 将新的图像元素添加到画廊
        newImageDiv.appendChild(newImage);
        gallery.appendChild(newImageDiv);
    });

    // 隐藏按钮
    showMoreButton.style.display = 'none';
});
