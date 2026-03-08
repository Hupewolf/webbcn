
document.getElementById("goContact").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ 
        behavior: "smooth" 
    });
});

function openPJ() {
    const overlay = document.querySelector('.overlay-chitiet');
    const closePop = document.querySelector('.close-popUp-btn-CT');
    const chiTiet1 = document.querySelector('.chiTietDuAn-1');

    overlay.classList.toggle('moChiTiet');

    overlay.onclick = () => {
        overlay.classList.remove('moChiTiet');
    };

    chiTiet1.onclick = (e) => {
        e.stopPropagation();
    };


    if(closePop) {
        closePop.onclick = () => {
            overlay.classList.remove("moChiTiet");
        }
    }

}
function search(e) {
    if (e) e.stopPropagation();
    const box = document.getElementById('searchBox');
    const input = document.getElementById('searchInput');
    
    box.classList.toggle('expanded');
    
    if (box.classList.contains('expanded')) {
        setTimeout(() => input.focus(), 100);
    }
}

document.addEventListener('click', (e) => {
    const box = document.getElementById('searchBox');
    if (box && !box.contains(e.target) && box.classList.contains('expanded')) {
        box.classList.remove('expanded');
    }
});

document.getElementById('searchBox').onclick = (e) => {
    e.stopPropagation();
};

function openSetting() {
    const settingBox = document.querySelector('.setting-bar');
    settingBox.classList.toggle('active-setting');
    
}

function noticBar() {
    const notic = document.querySelector('.notic-bar');
    notic.classList.toggle('active-notic');

}


lucide.createIcons();

function closePJ() {
            document.querySelector('.overlay-chitiet').style.display = 'none';
        }