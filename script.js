document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.getElementById('logoContainer');
    const mainNav = document.getElementById('mainNav');

    // Étape 1 : Le logo apparaît au milieu et grossit
    setTimeout(() => {
        logoContainer.classList.add('pop');
    }, 200);

    // Étape 2 : Le logo se déplace en haut à gauche et reste visible dans le bandeau bleu
    setTimeout(() => {
        logoContainer.classList.remove('pop');
        logoContainer.classList.add('in-header');
    }, 1500);

    // Étape 3 : Le menu de navigation apparaît sur la droite
    setTimeout(() => {
        mainNav.classList.add('visible');
    }, 2500);
});

function telechargerApp() {
    alert("Bientôt disponible sur le Play Store !");
}
