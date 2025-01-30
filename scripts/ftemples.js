const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('open');
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage Alaska united states",
        dedicated: "1999",
        area: 99516,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg"
        
      },
      {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage Alaska",
        dedicated: "1999",
        area: 99516,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg"
      },
      {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage Alaska",
        dedicated: "1999",
        area: 99516,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg"
      },
  ];
  let selectedCategory = 0;
  const templeList = document.getElementById("templeList");
  
  
  function changeCategory(num) {
      selectedCategory = num;
      console.log("Selected Category:", selectedCategory);
      
      displayTemples(); 
  }
  
 
  function displayTemples() {
      templeList.innerHTML = ""; 
  
      
      const filteredTemples = temples.filter(temple => {
          if (selectedCategory === 1) return true; 
          if (selectedCategory === 2) return parseInt(temple.dedicated.split(",")[0]) < 1900; 
          if (selectedCategory === 3) return parseInt(temple.dedicated.split(",")[0]) >= 2000; 
          if (selectedCategory === 4) return temple.area >= 100000; 
          if (selectedCategory === 5) return temple.area < 100000; 
          return true; 
      });
  
    
      filteredTemples.forEach(temple => {
          const templeCard = document.createElement("div");
          templeCard.classList.add("temple-card");
  
          templeCard.innerHTML = ` 
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              <h3>${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area} sq ft</p>
          `;
  
          templeList.appendChild(templeCard);
      });
  }
  
  // Initial load
  displayTemples();
