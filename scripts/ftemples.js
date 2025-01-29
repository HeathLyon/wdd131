const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('open');
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;