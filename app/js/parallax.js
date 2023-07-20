let responsiveText = document.querySelector(".responsiveText");


function parallax() {
    window.addEventListener("scroll", () => {
        let offsetY = window.scrollY;
        responsiveText.style.transform = `translateY(${-offsetY * 0.1}px)`
    })


}

export default parallax;
