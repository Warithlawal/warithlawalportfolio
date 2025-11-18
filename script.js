// ABOUT SECTION SCROLL ANIMATION
const aboutSection = document.querySelector('.about');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutSection.classList.add('show');
        }
    });
}, { threshold: 0.3 });

observer.observe(aboutSection);


// SKILLS SECTION SCROLL ANIMATION
const skillsSection = document.querySelector('.skills');

const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillsSection.classList.add('show');
        }
    });
}, { threshold: 0.3 });

skillsObserver.observe(skillsSection);

// PROJECTS SECTION SCROLL ANIMATION
const projectSection = document.querySelector('.projects');

const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            projectSection.classList.add('show');
        }
    });
}, { threshold: 0.3 });

projectObserver.observe(projectSection);
