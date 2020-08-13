/* Alastair Odhiambo
Student ID: 145845194 */

//Product List
var products = [
  {
    name: 'Green Side Bag',
    info: '100% Polyester',
    price: 'CAD 75',
    url: 'men-1.jpg',
    category: 'Men'
  },
  {
    name: 'Beige Overcoat',
    info: '100% Waterproof',
    price: 'CAD 399',
    url: 'men-2.jpg',
    category: 'Men'
  },
  {
    name: 'Yellow Graphic Tee',
    info: '100% Cotton',
    price: 'CAD 40',
    url: 'men-3.jpg',
    category: 'Men'
  },
  {
    name: 'Black Leather Bomber',
    info: 'Genuine Leather',
    price: 'CAD 650',
    url: 'men-4.jpg',
    category: 'Men'
  },
  {
    name: 'Floral Shirt',
    info: '100% Cotton',
    price: 'CAD 75',
    url: 'men-5.jpg',
    category: 'Men'
  },
  {
    name: 'Red Long Sleeve Top',
    info: '100% Cotton',
    price: 'CAD 84',
    url: 'women-1.jpg',
    category: 'Women'
  },
  {
    name: 'White Long Sleeve Top',
    info: '100% Cotton',
    price: 'CAD 95',
    url: 'women-2.jpg',
    category: 'Women'
  },
  {
    name: 'Beige Laced V Top',
    info: '60% Cotton 40% Polyester',
    price: 'CAD 105',
    url: 'women-3.jpg',
    category: 'Women'
  },
  {
    name: 'Sky Blue Peacoat',
    info: '100% Waterproof',
    price: 'CAD 400',
    url: 'women-4.jpg',
    category: 'Women'
  },
  {
    name: 'Floral Summer Dress',
    info: 'Belt Included',
    price: 'CAD 110',
    url: 'women-5.jpg',
    category: 'Women'
  },
  {
    name: 'Black Bow Skirt',
    info: 'Poplin Fabric',
    price: 'CAD 150',
    url: 'women-6.jpg',
    category: 'Women'
  }
];

//Function that loads the pictures
function loadContent(checkCategory = '') {
  function displayCard(item) {
    let contentSelector = document.querySelector('#content');
    let div = document.createElement('div');
    div.className = 'item-card-wrapper';
    div.innerHTML = `
  <a href="#">
  <div class="item-card-image">
    <img alt="${item.name}" src="images/${item.url}" width="240"/>
    <p>${item.name}<br>${item.info}<br><span class="item-card-category">${item.category}</span><span class="item-card-price">${item.price}<span></p>
  </div>
  </a>`;
    contentSelector.appendChild(div);
  }

  function contentFilter(item) {
    return item.category === checkCategory;
  }

  //Edited as recommended to simplify (!(checkcategory === '')) to checkCategory.
  if (checkCategory) {
    let filtered = products.filter(contentFilter);
    filtered.forEach(displayCard);
  } else products.forEach(displayCard);
}

//Hide Main Background
function hideBackground() {
  let mainBackground = document.querySelector('#main-background');
  mainBackground.hidden = true;
}

//SHow Category Header
function showCategoryHeader(option) {
  let categoryHeader = document.querySelector('#category-header');
  categoryHeader.hidden = false;
  categoryHeader.innerHTML = `<h2>${option}</h2>`;
}

//Page Load Setup
window.onload = function() {
  //Menu
  var menuSelector = document.querySelector('#menu');
  menuSelector.addEventListener('click', function() {
    var sideMenuSelector = document.querySelector('#side-menu');
    if (sideMenuSelector.hasAttribute('hidden')) {
      sideMenuSelector.hidden = false;
    } else sideMenuSelector.hidden = true;
  });

  //Clear All Content
  var clearTable = function() {
    let contentSelector = document.querySelector('#content');
    let divSelector = contentSelector.querySelectorAll('div');
    if (divSelector.length > 0) contentSelector.innerHTML = '';
  };

  //Initially load all content
  loadContent();

  //Load Men's
  var menSelector = document.querySelector('#men');
  menSelector.addEventListener('click', function() {
    hideBackground();
    clearTable();
    loadContent('Men');
    showCategoryHeader('Men');
  });

  //Load Women's
  var womenSelector = document.querySelector('#women');
  womenSelector.addEventListener('click', function() {
    hideBackground();
    clearTable();
    loadContent('Women');
    showCategoryHeader('Women');
  });

  //Search
  var search = document.querySelector('#search-wrapper button');
  var input = document.querySelector('#search-wrapper input');

  search.addEventListener('click', function() {
    if (input.hasAttribute('hidden')) {
      input.hidden = false;
    } else input.hidden = true;
  });

  input.onclick = function() {
    input.value = '';
  };

  //About
  var about = document.querySelector('#about');
  about.addEventListener('click', function() {
    var aboutContent = document.querySelector('#about-content');
    if (aboutContent.hasAttribute('hidden')) {
      aboutContent.hidden = false;
    } else aboutContent.hidden = true;
  });

  var closeAbout = document.querySelector('#close-about');
  closeAbout.addEventListener('click', function() {
    var aboutContent = document.querySelector('#about-content');
    if (aboutContent.hasAttribute('hidden')) {
      aboutContent.hidden = false;
    } else aboutContent.hidden = true;
  });
};
