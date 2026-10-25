document.addEventListener("DOMContentLoaded", () => {
    const imgFullSizeEl = document.getElementById("lightbox-image");
    const lightBoxEl = document.querySelector(".lightbox");
    const closeBtn = document.getElementById("close-btn");

    function openLightBox(src) {
        imgFullSizeEl.src = src;
        lightBoxEl.style.display = "flex";
    }
    function closeLightBox() {
        lightBoxEl.style.display = "none";
    }
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            openLightBox(item.src.replace("-thumbnail", ""));
        })
    })
    closeBtn.addEventListener("click", closeLightBox);
    lightBoxEl.addEventListener("click", (e) => {
        if (e.target == lightBoxEl) {
            closeLightBox();
        }
    })
})