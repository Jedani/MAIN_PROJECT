const menuLink = document.querySelector("#menuLink");

menuLink.addEventListener('click', () => {
    if (menuLink.classList.contains('open')) {
        menuLink.classList.remove('open');
    } else {
        menuLink.classList.add('open')
    }



})
