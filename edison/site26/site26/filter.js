const liItem = document.querySelectorAll('.filter-menu li');
const imgItem = document.querySelectorAll('.product .itemBox');

liItem.forEach(li => {
    li.onclick = () =>{
        liItem.forEach(other =>{
            other.className = "";
        })
        li.className = "active";

        const value = li.textContent;
        imgItem.forEach(img => {
            img.classList.add('delete');
            img.classList.remove('active');
            if(img.getAttribute('data-item') == value.toLowerCase() || value == 'All'){
                img.classList.add('active');
                img.classList.remove('delete');
            }
        })
    }
})

const abobus = document.getElementById('abobus');

abobus.onmouseover = () => {
    document.getElementById('abobus-audio').play();
}

abobus.onmouseout = () => {
    document.getElementById('abobus-audio').pause();
    document.getElementById('abobus-audio').currentTime = 0;
}