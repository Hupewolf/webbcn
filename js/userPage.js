const track = document.querySelector('.mar-track');

track.innerHTML += track.innerHTML;

window.addEventListener('load', () => {
    const totalWidth = track.scrollWidth / 2;

    track.style.setProperty('--scroll-width', totalWidth + 'px');

    const speed = 100;
    const duration = totalWidth / speed;

    track.style.setProperty('--duration', duration + 's');
});