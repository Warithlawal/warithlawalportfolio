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

// CONATCT SECTION SCROLL ANIMATION

const contactSection = document.querySelector('.contact');

const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactSection.classList.add('show');
        }
    });
}, { threshold: 0.3 });

contactObserver.observe(contactSection);


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".links ul li a");

const observerr = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach(link => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6, 
  }
);

sections.forEach(section => observerr.observe(section));




const form = document.getElementById("contactForm");
const successAlert = document.getElementById("successAlert");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        fullName: form.fullName.value,
        email: form.email.value,
        message: form.message.value,
    };

    // 1️⃣ Send to YOU
    emailjs.send("service_pmous8b", "template_peshu48", formData)

        .then(() => {

            // 2️⃣ Send auto reply to USER
            emailjs.send("service_pmous8b", "template_24ch25p", formData)

            // Reset form
            form.reset();

            // Show success toast
            successAlert.classList.remove("hidden");
            successAlert.classList.add("show");

            // Hide after 4 seconds
            setTimeout(() => {
                successAlert.classList.remove("show");
            }, 4000);
        })

        .catch((error) => {
            console.log("FAILED...", error);
        });
});

