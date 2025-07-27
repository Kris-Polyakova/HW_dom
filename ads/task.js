const messages = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function rotation() {
    messages[currentIndex].classList.remove('rotator__case_active')
    currentIndex = (currentIndex + 1) % messages.length;
    messages[currentIndex].classList.add('rotator__case_active')
}

setInterval(() => {
    rotation()
}, 1000)