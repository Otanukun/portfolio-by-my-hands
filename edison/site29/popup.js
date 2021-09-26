const popup = document.querySelector('.popup');
const close = document.querySelector('.close');


window.addEventListener("load", () => {
    setTimeout(()=> {
        popup.style.display = "block";
    }, 2000);
});

close.addEventListener("click", () => {
    popup.style.display = "none";
});