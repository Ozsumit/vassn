function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS

    function updateCounter() {
        start += increment;
        element.textContent = Math.floor(start);
        if (start < target) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}

function checkScroll() {
    const counterSection = document.querySelector('.counter-section');
    const position = counterSection.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        animateCounter(document.getElementById('teacherCount'), 30, 1000);
        animateCounter(document.getElementById('studentCount'), 600, 1500);
        animateCounter(document.getElementById('staffCount'), 10, 1200);
        animateCounter(document.getElementById('experiencecount'), 33, 1300);
        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check on initial load