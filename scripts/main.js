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