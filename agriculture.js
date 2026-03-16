
// ====== 1️⃣ Navbar scroll effect ======
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 1000) {
        navbar.classList.add('shadow-lg', 'bg-success');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-success');
    }
});

// ====== 2️⃣ Smooth scroll to sections ======
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ====== 3️⃣ "Explore Now" button alert ======
document.querySelectorAll('.btn-danger').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Thank you for exploring our agriculture services! 🌱");
    });
});

// ====== 4️⃣ Testimonials auto-slide ======
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.py-5.bg-light .card');
function showTestimonials() {
    testimonials.forEach((t, i) => {
        t.style.display = i === testimonialIndex ? 'block' : 'none';
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
if (testimonials.length > 0) {
    showTestimonials();
    setInterval(showTestimonials, 1000); // change testimonial every 5s
}

// ====== 5️⃣ Dynamic Year in footer (if you have a span with id="year") ======
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}



//===================contact -form validation============//

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
const message = document.querySelector('textarea').value.trim();

if(name === "" || email === "" || message === ""){
alert("Please fill all required fields");
e.preventDefault();
}

});



