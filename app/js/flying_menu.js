let list = document.querySelectorAll('.header__links a');

function exchange() {
    list.forEach(link => {
        let letters = link.textContent.split('');
        link.textContent = '';
        letters.forEach((letter, i) => {
            i++;
            let span = document.createElement("span");
            let delay = i / 16;

            let letterOut = document.createElement('span');
            letterOut.textContent = letter;
            letterOut.style.transitionDelay = '${delay}s';
            letterOut.classList.add('out');
            span.append(letterOut);


            let letterin = document.createElement('span');
            letterin.textContent = letter;
            letterin.style.transitionDelay = '${delay}s';
            letterin.classList.add('in');
            span.append(letterin);

            link.append(span);
        })

    })
}

export default exchange;
