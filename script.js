const jobs = ["Web Developer", "Software Engineer", "Designer", "Freelancer"];
let index = 0;
let charIndex = 0;
let currentJob = "";
let isDeleting = false;
const textElement = document.getElementById('changing-text');

function type() {
    currentJob = jobs[index];

    if (isDeleting) {
        textElement.textContent = currentJob.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentJob.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentJob.length) {
        setTimeout(() => isDeleting = true, 2000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % jobs.length; // Move to next job title
    }

    setTimeout(type, isDeleting ? 100 : 200); // Adjust speed for typing and deleting
}

type();
