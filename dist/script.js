const nav = document.querySelector("nav")

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('changeColor')
    } else {
        nav.classList.remove('changeColor')
    }
})