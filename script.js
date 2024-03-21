document.addEventListener('DOMContentLoaded', function() {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');

    toggleMenuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
