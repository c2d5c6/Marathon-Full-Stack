const lazyImages = document.querySelectorAll('img[data-src]');
const windowHeight = document.documentElement.clientHeight;
let countCheck = document.querySelector('.check');
let count = 0;
let lazyImagesPosition = [];

if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if (img.dataset.src) {
            lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
            // setTimeout(lazyScrollCheck, 3000); //Задержка
            lazyScrollCheck()
        }
    });
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
    if (document.querySelectorAll('img[data-src]').length > 0) {
        // setTimeout(lazyScrollCheck, 3000); //Задержка
        lazyScrollCheck()
    }
}

function lazyScrollCheck() {
    let imgIndex = lazyImagesPosition.findIndex(item => 
        pageYOffset > item - windowHeight
    );
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
            countCheck.innerHTML = `Images loading ${imgIndex + 1}`;
            count++;
        }

        setTimeout(() => {
            if (count === 20) {
                countCheck.classList.remove('check');
                countCheck.classList.add('hide');
            }
        }, 3000)
        delete lazyImagesPosition[imgIndex];
    }
}
