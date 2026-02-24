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

function changeTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light'); 
    } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}



function updateIndicator() {
    const navbar = document.querySelector('navbar');
    const activeItem = navbar.querySelector('.item.active');
    const indicator = navbar.querySelector('.indicator');

    if (activeItem && indicator) {
        // Lấy vị trí và chiều rộng của item đang active
        indicator.style.width = `${activeItem.offsetWidth}px`;
        indicator.style.left = `${activeItem.offsetLeft}px`;
    }
}

// Chạy ngay khi load trang
window.onload = updateIndicator;

// Nếu bạn muốn khi di chuột (hover) thanh trượt cũng chạy theo
const items = document.querySelectorAll('.item');
const indicator = document.querySelector('.indicator');

items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        indicator.style.width = `${e.target.offsetWidth}px`;
        indicator.style.left = `${e.target.offsetLeft}px`;
    });

    // Khi rời chuột thì quay về item đang active
    item.addEventListener('mouseleave', updateIndicator);
});