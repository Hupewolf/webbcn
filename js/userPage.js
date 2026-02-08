const track = document.querySelector('.mar-track');

track.innerHTML += track.innerHTML;

window.addEventListener('load', () => {
    const totalWidth = track.scrollWidth / 2;

    track.style.setProperty('--scroll-width', totalWidth + 'px');

    const speed = 100;
    const duration = totalWidth / speed;

    track.style.setProperty('--duration', duration + 's');
});

document.getElementById("goContact").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ 
        behavior: "smooth" 
    });
});

// const chips = document.querySelectorAll('.chip');
// const cards = document.querySelectorAll('.project-card');
// const searchInput = document.getElementById('searchInput');

// const drawer = document.getElementById('drawer');
// const overlay = document.getElementById('overlay');
// const openFilter = document.getElementById('openFilter');
// const apply = document.getElementById('apply');
// const reset = document.getElementById('reset');

// let activeType = 'all';
// let activeTags = [];

// chips.forEach(chip => {
//     chip.onclick = () => {
//         chips.forEach(c => c.classList.remove('actives'));
//         chip.classList.add('actives');
//         activeType = chip.dataset.type;
//         filter();
//     };
// });

// searchInput.oninput = filter;

// openFilter.onclick = () => {
//     drawer.classList.add('show');
//     overlay.classList.add('show');
// };

// overlay.onclick = closeDrawer;

// function closeDrawer() {
//     drawer.classList.remove('show');
//     overlay.classList.remove('show');
// }

// apply.onclick = () => {
//     activeTags = [...drawer.querySelectorAll('input:checked')]
//         .map(i => i.value);
//     closeDrawer();
//     filter();
// };

// reset.onclick = () => {
//     drawer.querySelectorAll('input').forEach(i => i.checked = false);
//     activeTags = [];
//     filter();
// };

// function filter() {
//     const keyword = searchInput.value.toLowerCase();

//     cards.forEach(card => {
//         const type = card.dataset.type;
//         const tags = card.dataset.tags;
//         const text = card.innerText.toLowerCase();

//         const matchType = activeType === 'all' || type === activeType;
//         const matchSearch = text.includes(keyword);
//         const matchTag = activeTags.length === 0 ||
//             activeTags.some(tag => tags.includes(tag));

//         card.classList.toggle(
//             'hide',
//             !(matchType && matchSearch && matchTag)
//         );
//     });
// }
