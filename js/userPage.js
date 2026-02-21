// const track = document.querySelector('.mar-track');

// track.innerHTML += track.innerHTML;

// window.addEventListener('load', () => {
//     const totalWidth = track.scrollWidth / 2;

//     track.style.setProperty('--scroll-width', totalWidth + 'px');

//     const speed = 100;
//     const duration = totalWidth / speed;

//     track.style.setProperty('--duration', duration + 's');
// });

document.getElementById("goContact").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ 
        behavior: "smooth" 
    });
});



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


function openPJ() {
    const overlay = document.querySelector('.overlay-chitiet');
    const closePop = document.querySelector('.close-popUp-btn');
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
            themDuAn.classList.remove("active-duan");
        }
    }

}