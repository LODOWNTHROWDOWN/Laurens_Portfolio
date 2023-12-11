// Loads the Custom Plastic Forming and QC Dance galleries

if (document.getElementById('custom-plastic-gallery-container') !== null) {
    const section = document.getElementById('custom-plastic-gallery-container');
    section.innerHTML = buildGallery(customPlasticGallery);
} else if (document.getElementById('qc-dance-gallery-container') !== null) {
    const section = document.getElementById('qc-dance-gallery-container');
    section.innerHTML = buildGallery(qcDanceGallery);
}

function buildGallery(galleryItems) {
    const galleryList = galleryItems.map(galleryItem => {
        return `
                <div class="gallery-image">
                    <p class="gallery-description">
                        <a href="${galleryItem.link}">${galleryItem.title}</a>
                    </p>
                    <img src="${galleryItem.image}" alt="${galleryItem.alt}" />
                </div>
                `
    })

    return `${galleryList.join('')}`
}