document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.getElementById('logoContainer');
    const mainNav = document.getElementById('mainNav');

    // Animation au démarrage
    setTimeout(() => {
        logoContainer.classList.add('pop');
    }, 200);

    setTimeout(() => {
        logoContainer.classList.remove('pop');
        logoContainer.classList.add('in-header');
    }, 1500);

    setTimeout(() => {
        mainNav.classList.add('visible');
    }, 2500);

    // Fenêtre modale et diaporama
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');
    const closeModal = document.getElementById('closeModal');
    const services = document.querySelectorAll('.service');

    let slideshowInterval = null;

    // Configuration des images par service
    const serviceData = {
        installation: {
            title: 'Installation électrique',
            images: ['Gaines.jpeg', 'Tableau.jpeg']
        },
        maintenance: {
            title: 'Maintenance',
            images: ['170.JPG', '230.JPG', '326.JPG']
        },
        depannage: {
            title: 'Dépannage',
            images: ['223.JPG', '122.JPG']
        }
    };

    // Fonction pour démarrer la boucle d'affichage des photos toutes les 3 secondes
    function startSlideshow(images) {
        if (!images || images.length === 0) {
            modalGallery.innerHTML = '<p>Aucune photo disponible pour le moment.</p>';
            return;
        }

        let currentIndex = 0;

        // Affichage de la première image
        const imgElement = document.createElement('img');
        imgElement.src = images[currentIndex];
        imgElement.alt = "Photo du service";
        
        // Ajustement dynamique de l'image
        imgElement.style.maxHeight = '100%';
        imgElement.style.maxWidth = '100%';
        imgElement.style.objectFit = 'contain';

        modalGallery.innerHTML = '';
        modalGallery.appendChild(imgElement);

        // Si plusieurs images, on lance la boucle de 3 secondes (3000 ms)
        if (images.length > 1) {
            slideshowInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.style.opacity = '0'; // Effet de transition fondu
                
                setTimeout(() => {
                    imgElement.src = images[currentIndex];
                    imgElement.style.opacity = '1';
                }, 300);
            }, 3000);
        }
    }

    // Fonction pour arrêter le diaporama
    function stopSlideshow() {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
    }

    // Ouverture de la modale au clic sur un service
    services.forEach(service => {
        service.addEventListener('click', () => {
            const key = service.getAttribute('data-service');
            const data = serviceData[key];

            if (data) {
                modalTitle.textContent = data.title;
                stopSlideshow();
                modal.style.display = 'flex';
                startSlideshow(data.images);
            }
        });
    });

    // Fermeture de la modale au clic sur la croix
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        stopSlideshow();
    });

    // Fermeture de la modale au clic à l'extérieur
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            stopSlideshow();
        }
    });
});
