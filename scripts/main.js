'use strict'

// menu
const adaptive = document.getElementById('adaptive');
const header = document.getElementById('header');
const headerNone = document.querySelectorAll('.header-none');
const switchMenu = () => {
    header.classList.toggle('bg-black');
    adaptive.classList.toggle('adaptive-checked');
    for (let i = 0; i < headerNone.length; i++) {
        headerNone[i].classList.toggle('header-none')
    }
}
adaptive.addEventListener('click', switchMenu);

// search
const search = document.getElementById('search');
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

function switchSearchTools(event) {
    if (event.target.id == 'searchIcon') {
        search.innerHTML = `<input type="search" placeholder="Поиск" class="header__search" id="searchInput">`;
    } else if (event.target.id == 'searchInput') {
        return
    } else {
        search.innerHTML = `<img src="./img/search-icon.png" id="searchIcon">`;
    }
}

document.addEventListener('click', switchSearchTools);