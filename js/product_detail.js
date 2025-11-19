document.addEventListener('click', () => {
    const actualImage = document.getElementById('actual-image');
    const allImages = document.querySelectorAll('#all-images img');

    allImages.forEach((image)=> {
        image.addEventListener('click', () => {
            allImages.forEach((image) => {
                image.classList.remove('active-image')
            })
            let srcImage = image.src
            srcImage = srcImage.replace(".png", ".jpg")
            actualImage.src = srcImage
            image.classList.add('active-image')
        });
    });
})