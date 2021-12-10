function transformation() {
    let transformHero = document.getElementById('hero')
    let transformLab = document.getElementById('lab');

    if (transformHero.innerHTML === 'Bruce Banner') {
        transformHero.innerHTML = 'Hulk';
        transformHero.style.fontSize = '130px';
        transformHero.style.letterSpacing = '6px';
        transformLab.style.background = '#70964b';
    } else {
        transformHero.innerHTML = 'Hulk';
        transformHero.innerHTML = 'Bruce Banner';
        transformHero.style.fontSize = '60px'
        transformHero.style.letterSpacing = '2px';
        transformLab.style.background = '#ffb300';
    }
}