const mobileMenu = document.getElementById('mobile-menu');
const overlayMenu = document.getElementById('overlay-menu');
const closeBtn = document.querySelector('.close-btn');

// Open the overlay
mobileMenu.addEventListener('click', () => {
    overlayMenu.style.display = 'block';
});

// Close the overlay when clicking the X
closeBtn.addEventListener('click', () => {
    overlayMenu.style.display = 'none';
});

// Close overlay when screen is resized beyond 768px
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        overlayMenu.style.display = 'none';
    }
});

// Swipe to close the overlay on mobile
let touchStartX = 0;
let touchEndX = 0;

overlayMenu.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

overlayMenu.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        overlayMenu.style.display = 'none';
    }
}

// Close overlay when clicking outside the content area
overlayMenu.addEventListener('click', (event) => {
    if (event.target === overlayMenu) { // Check if the click is on the overlay
        overlayMenu.style.display = 'none';
    }
});

// Close overlay when clicking anywhere on the main page
document.addEventListener('click', (event) => {
    // Check if the overlay is currently open and the click target is not the mobile menu or overlay
    if (overlayMenu.style.display === 'block' && !overlayMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
        overlayMenu.style.display = 'none';
    }
});

