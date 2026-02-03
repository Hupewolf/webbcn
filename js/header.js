// function noticBar(){
//     const notiBar = document.getElementById("notification");
    
//     if (notiBar.classList.contains('is-visible')) {
//         notiBar.classList.remove("is-visible");
//         setTimeout(() => { notiBar.style.display = 'none'; }, 200);
//     } else {
//         notiBar.style.display = 'flex';
//         setTimeout(() => { notiBar.classList.add("is-visible"); }, 10);
//     }
// }

// document.addEventListener('click', function(event) {
//     const notiBar = document.getElementById("notification");
//     const belt = document.getElementById('belt');
//     if (notiBar && belt && !notiBar.contains(event.target) && !belt.contains(event.target)) {
//             notiBar.classList.remove("is-visible");
//             setTimeout(() => { notiBar.style.display = 'none'; }, 200);
//     }
// });

// const modal = document.getElementById('project-modal');
// const openBtn = document.getElementById('open-modal-btn');
// const closeX = document.getElementById('close-modal-x');
// const closeBtn = document.getElementById('close-modal-btn');
// const uploadTrigger = document.getElementById('upload-trigger');
// const fileInput = document.getElementById('file-input');

// openBtn.addEventListener('click', () => {
//     modal.classList.add('open');
// });

// function closeModal() {
//     modal.classList.remove('open');
// }

// closeX.addEventListener('click', closeModal);
// closeBtn.addEventListener('click', closeModal);

// window.addEventListener('click', (e) => {
//     if (e.target === modal) closeModal();
// });

// uploadTrigger.addEventListener('click', () => fileInput.click());
// fileInput.addEventListener('change', (e) => {
//     if(e.target.files.length > 0) {
//         uploadTrigger.querySelector('p').innerHTML = `Đã chọn: <b>${e.target.files[0].name}</b>`;
//         uploadTrigger.style.background = "#eff6ff";
//         uploadTrigger.style.borderColor = "#4D7CFE";
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.mar-track');
    
    if (track) {
        track.innerHTML += track.innerHTML;

        window.addEventListener('load', () => {
            const totalWidth = track.scrollWidth / 2;
            track.style.setProperty('--scroll-width', totalWidth + 'px');

            const speed = 100; 
            const duration = totalWidth / speed;
            track.style.setProperty('--duration', duration + 's');
        });
    }

    const hamburgerBtn = document.querySelector('.hamburger-bar');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                mobileMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        });
    } else {
        console.error("Không tìm thấy ID 'mobileMenu' hoặc class 'hamburger-bar'");
    }
});