function noticBar(){
    const notiBar = document.getElementById("notification");
    
    if (notiBar.classList.contains('is-visible')) {
        notiBar.classList.remove("is-visible");
        setTimeout(() => { notiBar.style.display = 'none'; }, 200);
    } else {
        notiBar.style.display = 'flex';
        setTimeout(() => { notiBar.classList.add("is-visible"); }, 10);
    }
}

document.addEventListener('click', function(event) {
    const notiBar = document.getElementById("notification");
    const belt = document.getElementById('belt');
    if (notiBar && belt && !notiBar.contains(event.target) && !belt.contains(event.target)) {
            notiBar.classList.remove("is-visible");
            setTimeout(() => { notiBar.style.display = 'none'; }, 200);
    }
});

const modal = document.getElementById('project-modal');
const openBtn = document.getElementById('open-modal-btn');
const closeX = document.getElementById('close-modal-x');
const closeBtn = document.getElementById('close-modal-btn');
const uploadTrigger = document.getElementById('upload-trigger');
const fileInput = document.getElementById('file-input');

openBtn.addEventListener('click', () => {
    modal.classList.add('open');
});

function closeModal() {
    modal.classList.remove('open');
}

closeX.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

uploadTrigger.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
    if(e.target.files.length > 0) {
        uploadTrigger.querySelector('p').innerHTML = `Đã chọn: <b>${e.target.files[0].name}</b>`;
        uploadTrigger.style.background = "#eff6ff";
        uploadTrigger.style.borderColor = "#4D7CFE";
    }
});
