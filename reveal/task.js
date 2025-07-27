const reveals = document.querySelectorAll('.reveal');

function isVisible (el){
    const {top, bottom} = el.getBoundingClientRect();
    if (bottom < 0) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }

    return true
}

window.addEventListener('scroll', function() {
    reveals.forEach(re => isVisible(re) ? re.classList.add('reveal_active') : re.classList.remove('reveal_active'));
});