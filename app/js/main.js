function generator() {
    let generate = document.querySelector('.container');
    for (let i = 0; i <= 30; i++) {
        let blocks = document.createElement('div');
        blocks.classList.add('block');
        generate.appendChild(blocks);
    }
}
export default generator;
