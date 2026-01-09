// Function for Header (Dung co xoa no)
function noticBar(){
    // alert("Hola!");
    const notiBar = document.getElementById("notification");
    if (notiBar.style.display === 'flex') {
        notiBar.classList.toggle("is-visible");
    } else {
        notiBar.style.display = 'none';
        notiBar.style.display = 'flex';
    }
}