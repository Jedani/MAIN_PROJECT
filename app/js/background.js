const light = document.querySelector('.light');
const grid = document.querySelector('.container');

function lighter() {
    grid.addEventListener('mousemove', (e) => {
        light.style.left = '${e.clientX}px';
        light.style.top = '${e.clientY}px';
    })

}

export default lighter;
