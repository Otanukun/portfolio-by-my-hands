
window.addEventListener("load", () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preload-finish');
})

const stars = document.querySelectorAll("#star");

stars.forEach(star => {
    let duration = Math.random() * (1.3-0.4)  + 0.4;
    star.style.animation = `stars ${duration}s infinite linear`;
});
