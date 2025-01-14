
let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const events = document.querySelectorAll('.event');
    const eventWidth = events[0].clientWidth + 20;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > events.length - 1) {
        currentIndex = events.length - 1;
    }

    const offset = -currentIndex * eventWidth;
    track.style.transform = `translateX(${offset}px)`;
}
