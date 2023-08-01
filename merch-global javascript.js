const hamButton = document.getElementById("hamburger-button");
const exitButton = document.getElementById("exit-button");
const navMenu = document.getElementById("nav-menu");




hamButton.addEventListener('click', () => {
    if (navMenu.style.display ===
        'none') {
            navMenu.style.display = 'grid'
        } else {
            navMenu.style.display = 'none'
        } 
});

exitButton.addEventListener('click', () => {
    if (navMenu.style.display ===
        'grid') {
            navMenu.style.display = 'none'
        }
});