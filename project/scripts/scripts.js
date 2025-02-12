document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    setupMenuToggle();
    loadRobots();
    updateReviewCounter();
});

document.addEventListener("DOMContentLoaded", () => {
    setupMenuToggle();  // ✅ Ensure menu toggle is set up
    loadRobots();  
    updateReviewCounter();
});


function setupMenuToggle() {
    const menuButton = document.getElementById("menuButton");
    const menuItems = document.getElementById("menuItems");

    if (menuButton && menuItems) {
        menuButton.addEventListener("click", () => {
            menuItems.classList.toggle("open"); 
        });
    } else {
        console.error("Menu button or menu items not found.");
    }
}

/** robots */
const robots = [
    { id: 1, name: "Spot", description: "Boston Dynamics Spot Robot.", image: "images/mika-baumeister-SpotLarge-unsplash.jpg", url: "https://www.bostondynamics.com/spot" },
    { id: 2, name: "UAV Aerial Drone", description: "Drones or UAVs used in a variety of rescue operations.", image: "images/karl-greif-Droneunsplash.jpg", url: "https://uavcoach.com/search-and-rescue-drones/" },
    { id: 3, name: "RoboSimian", description: "NASA's JPL multi-purpose robot that can move through difficult terrain.", image: "images/Robo (1).jpg", url: "https://www.jpl.nasa.gov/robotics-at-jpl/robosimian/" }
];

function loadRobots() {
    const featuredSection = document.getElementById("featured");

    if (!featuredSection) return;

    featuredSection.innerHTML = `<h2>Featured Robots</h2>`; // Reset and add header

    robots.forEach(robot => {
        const robotCard = document.createElement("div");
        robotCard.classList.add("robot-card");

        robotCard.innerHTML = `
            <img src="${robot.image}" alt="${robot.name} "loading="lazy">
            <h3>${robot.name}</h3>
            <p>${robot.description}</p>
            <a href="${robot.url}" target="_blank" rel="noopener noreferrer" class="learn-more">Learn More</a>
        `;

        featuredSection.appendChild(robotCard);
    });
}


function updateReviewCounter() {
    const counterDisplay = document.getElementById("reviewCounter");

    if (!counterDisplay) return;

    let reviewCount = localStorage.getItem("reviewCount") || 0;
    counterDisplay.textContent = `Reviews Submitted: ${reviewCount}`;
}


function incrementReviewCounter() {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
    updateReviewCounter();
}


const reviewForm = document.getElementById("reviewForm");

if (reviewForm) {
    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        incrementReviewCounter();
        alert("Thank you for your review!");
    });
}