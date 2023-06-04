const sun = document.getElementById('sun');
const bgOne = document.getElementById('bg-1');
const bgTwo = document.getElementById('bg-2');
const bgThree = document.getElementById('bg-3');
const bgFour = document.getElementById('bg-4');
const bgFive = document.getElementById('bg-5');
const birds = document.getElementById('birds');
const introduction = document.getElementById('intro-div');

// these will be for the noon section
const noon_sun = document.getElementById('noon_sun');
const midOne = document.getElementById('mid-1');
const midTwo = document.getElementById('mid-2');
const midThree = document.getElementById('mid-3');
const midFour = document.getElementById('mid-4');
const midFive = document.getElementById('mid-5');
const midSix = document.getElementById('mid-6');
const midSeven = document.getElementById('mid-7');
const remarks = document.getElementById('remarks');

// this will be the section for the night
const moon = document.getElementById('moon');


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

    //here we start the styling for the noon container
    noon_sun.style.marginLeft = value * 0.5 + 'px';
    noon_sun.style.marginTop = value * 0.15 + 'px';
    midOne.style.top = value * -0.03 + '%';
    midTwo.style.top = value * -0.03 + '%';
    midThree.style.top = value * -0.03 + '%';
    midFour.style.top = value * -0.04 + '%';
    midFive.style.top = value * -0.02 + '%';
    midSix.style.top = value * -0.01 + '%';
    midSeven.style.top = value * -0.01 + '%';
    remarks.style.height = value * 0.004 + 'rem';

    // here we start styling for the moon
    moon.style.marginLeft = value * 0.25 + 'px';
    moon.style.marginTop = value * 0.18 + 'px';

})
