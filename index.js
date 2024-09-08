document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        let scrollPosition = window.scrollY;

        sections.forEach(sec => {
            let top = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    } else {
        console.error('Menu icon or navbar not found');
    }
});
const titles = ["Software Engineer", "MERN Stack Developer", "Competitive Programmer"];
let index = 0;
let charIndex = 0;
let isdel = false;
const speed = 100;
const delay = 1000;
const changetxt = document.getElementById("changetxt");

function typeEffect() {
    const current = titles[index];
    if (isdel) {
        changetxt.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isdel = false;
            index = (index + 1) % titles.length;
        }
    } else {
        changetxt.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isdel = true;
            setTimeout(typeEffect, delay);
            return;
        }
    }
    const timeout = isdel ? speed / 2 : speed;
    setTimeout(typeEffect, timeout);
}

typeEffect();
emailjs.init('dlqpQu-17wR2jS0aK');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

  
    const templateParams = {
        from_name: fullName,
        from_email: email,
        phone_number: phone,
        message: message
    };

  
    emailjs.send('service_fjfbf32', 'template_60eslbl', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
});


document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.progress-line');

    function resetAnimations() {
        bars.forEach(bar => {
            bar.style.animation = 'none'; // Remove the animation
            // Trigger a reflow (forced layout) to restart the animation
            bar.offsetHeight; // Trigger reflow
            bar.style.animation = ''; // Reapply the animation
        });
    }

   
    resetAnimations();

    
    setInterval(resetAnimations, 7000);
});



document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    // Reveal different sections with ScrollReveal
    ScrollReveal().reveal('.about', { origin: 'top' });
    ScrollReveal().reveal('.skills', { origin: 'top' });
    ScrollReveal().reveal('.proj', { origin: 'top' });
    ScrollReveal().reveal('.contact', { origin: 'top' });
    ScrollReveal().reveal('.education', { origin: 'top' });

    // Function to reset skill bar animations
    function resetSkillBarAnimations() {
        const skillBars = document.querySelectorAll('.progress-line');
        skillBars.forEach(bar => {
            bar.style.animation = 'none'; // Remove the animation
            // Trigger a reflow (forced layout) to restart the animation
            bar.offsetHeight; // Trigger reflow
            bar.style.animation = ''; // Reapply the animation
        });
    }

    // Apply reset animations for skills section specifically
    ScrollReveal().reveal('.skills', {
        origin: 'top',
        beforeReveal: function() {
            resetSkillBarAnimations(); // Reset animations before revealing
        }
    });
});

