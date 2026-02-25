function AddProject() {
    const themDuAn = document.querySelector('.overlay');
    const popUpDuAn = document.querySelector('.themDuAn-popUp');
    const closePop = document.querySelector('.close-popUp-btn');

    themDuAn.classList.toggle('active-duan')
    
    themDuAn.onclick = () => {
        themDuAn.classList.remove("active-duan");
    };

    popUpDuAn.onclick = (e) => {
        e.stopPropagation();
    };

    if(closePop) {
        closePop.onclick = () => {
            themDuAn.classList.remove("active-duan");
        }
    }

}
