const btnHmbg = document.getElementById('btn-hmbg');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

btnHmbg.addEventListener('click', toggleMenu);
btnHmbg.addEventListener('touchstart', toggleMenu);
