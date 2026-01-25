function noticBar(){
    const notiBar = document.getElementById("notification");
    
    if (notiBar.classList.contains("is-visible")) {
        notiBar.classList.remove("is-visible");
        setTimeout(() => {
            if(!notiBar.classList.contains("is-visible")) {
                    notiBar.style.visibility = 'hidden'; 
            }
        }, 200);
    } else {
        notiBar.style.visibility = 'visible';
        setTimeout(() => {
            notiBar.classList.add("is-visible");
        }, 10);
    }
}

document.addEventListener('click', function(event) {
    const notiBar = document.getElementById("notification");
    const belt = document.querySelector('.belt');
    
    if (notiBar && belt && !notiBar.contains(event.target) && !belt.contains(event.target) && notiBar.classList.contains('is-visible')) {
        notiBar.classList.remove("is-visible");
    }
});