document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.getElementById('logoContainer');
    const mainNav = document.getElementById('mainNav');

    // Animation au démarrage
    setTimeout(() => {
        logoContainer?.classList.add('pop');
    }, 200);

    setTimeout(() => {
        logoContainer?.classList.remove('pop');
        logoContainer?.classList.add('in-header');
    }, 1500);

    setTimeout(() => {
        mainNav?.classList.add('visible');
    }, 2500);

    // Galeries d'images par service
    const serviceData = {
        installation: {
            title: 'Installation électrique',
            images: [
                'tableau1.png',
                'photo2.jpg',
                'photo3.jpg',
                'tableau2.png'
            ]
        },
        maintenance: {
            title: 'Maintenance',
            images: []
        },
        depannage: {
            title: 'Dépannage',
            images: []
        }
    };

    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');
    const closeModalBtn = document.getElementById('closeModal');
    const serviceCards = document.querySelectorAll('.service[data-service]');

    serviceCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const key = card.getAttribute('data-service');
            const data = serviceData[key];
            if (!data || !modal || !modalGallery) return;

            modalTitle.textContent = data.title;
            modalGallery.innerHTML = '';

            data.images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = data.title;
                modalGallery.appendChild(img);
            });

            modal.style.display = 'flex';
        });
    });

    function closeModal() {
        if (!modal) return;
        modal.style.display = 'none';
        if (modalGallery) modalGallery.innerHTML = '';
    }

    closeModalBtn?.addEventListener('click', closeModal);
    closeModalBtn?.addEventListener('touchend', (e) => {
        e.preventDefault();
        closeModal();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});
