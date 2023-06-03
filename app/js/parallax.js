const sun = document.getElementById('sun');
const bgOne = document.getElementById('bg-1');
const bgTwo = document.getElementById('bg-2');
const bgThree = document.getElementById('bg-3');
const bgFour = document.getElementById('bg-4');
const bgFive = document.getElementById('bg-5');
const birds = document.getElementById('birds');
const introduction = document.getElementById('intro-div');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    sun.style.top = value * -0.7 + 'px';
    bgOne.style.top = value * -0.3 + 'px';
    bgTwo.style.top = value * -0.2 + 'px';
    bgThree.style.top = value * -0.4 + 'px';
    bgFour.style.top = value * -0.5 + 'px';
    bgFive.style.top = 50 + value * -0.07 + '%';
    birds.style.left = 17 + value * 0.15 + '%';
    birds.style.top = 43 + value * -0.3 + '%';
    introduction.style.height = 3 + value * 0.02 + 'rem';
})
