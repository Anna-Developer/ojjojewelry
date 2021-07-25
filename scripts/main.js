const adaptive = document.getElementById('adaptive');
const header = document.getElementById('header');
const headerNone = document.querySelectorAll('header-none');
const switchMenu = () => {
    header.classList.toggle('bg-black');
    adaptive.classList.toggle('adaptive-checked');
}
adaptive.addEventListener('click', switchMenu);