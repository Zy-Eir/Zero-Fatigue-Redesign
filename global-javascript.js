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


const rosterButton = document.getElementById("roster-button");

const rosterDropdown = document.getElementById("roster-dropdown");




rosterButton.addEventListener('click', () => {
    if (rosterDropdown.style.display ===
        'none') {
            rosterDropdown.style.display = 'grid'
        } else {
            rosterDropdown.style.display = 'none'
        } 
});

const rosterBack = document.getElementById("roster-back");

rosterBack.addEventListener('click', () => {
    if (rosterDropdown.style.display ===
        'grid') {
            rosterDropdown.style.display = 'none'
        } else {
            rosterDropdown.style.display = 'grid'
        } 
});

const rosterButtonDesktop = document.getElementById("roster-button-desktop");

const rosterDropdownDesktop = document.getElementById("roster-dropdown-desktop");



rosterButtonDesktop.addEventListener('click', () => {
    if (rosterDropdownDesktop.style.display ===
        'none') {
            rosterDropdownDesktop.style.display = 'grid'
        } else {
            rosterDropdownDesktop.style.display = 'none'
        } 
});


const footerButton = document.getElementById("footer-button");

const footerDropdownMenu = document.getElementById("footer-dropdown-menu");



footerButton.addEventListener('click', () => {
    if (footerDropdownMenu.style.display ===
        'none') {
            footerDropdownMenu.style.display = 'grid'
        } else {
            footerDropdownMenu.style.display = 'none'
        } 
});


/*
 code below adds and removes the slide in animation class each time after it plays.
*/

rosterButton.addEventListener('click', () => {
   
    rosterDropdown.classList.toggle("roster-dd")
      
});

rosterDropdown.addEventListener('animationend', () => {
   
    rosterDropdown.classList.remove("roster-dd")
      
});














