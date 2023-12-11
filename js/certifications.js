const section = document.getElementById('certification_wrapper');
section.innerHTML = buildCertifications(certifications);

function buildCertifications(certifications) {
    const certificationList = certifications.map(certification => {
        return `
                <div class="certification_post">
                        <div class="certification_post-heading">
                            <p class="certification_post-subtitle">${certification.subtitle}</p>
                            <h3 class="certification_post-title">${certification.title}</h3>
                        </div>
                        <div class="certification_post-thumbnail">
                            <img src="${certification.image}" alt="${certification.alt}">
                        </div>
                </div>
                `
    })

    return `${certificationList.join('')}`
}