/* scripts.js */

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'red';
    } else {
        navbar.style.backgroundColor = 'black';
    }
});
