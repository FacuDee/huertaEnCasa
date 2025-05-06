document.addEventListener('DOMContentLoaded', function() {
    // Tabs de la guía de cultivo
    const tabBtns = document.querySelectorAll('.tab-btn');
    const vegetableContents = document.querySelectorAll('.vegetable-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones y contenidos
            tabBtns.forEach(b => b.classList.remove('active'));
            vegetableContents.forEach(c => c.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const vegetable = this.getAttribute('data-vegetable');
            document.getElementById(vegetable).classList.add('active');
        });
    });
    
    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para el header fixed
                behavior: 'smooth'
            });
        });
    });
    
    // Formulario de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Aquí podrías agregar código para enviar el email a tu backend
            alert(`Gracias por suscribirte con el email: ${email}`);
            this.reset();
        });
    }
    
    // Efecto de aparición al hacer scroll
    const fadeElements = document.querySelectorAll('.benefit-card, .section-title');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Establecer opacidad inicial
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', checkFade);
    window.addEventListener('load', checkFade);
});

// Menú Hamburguesa
const hamburgerBtn = document.querySelector('.hamburger-btn');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

// Crear overlay dinámicamente
const navOverlay = document.createElement('div');
navOverlay.classList.add('nav-overlay');
document.body.appendChild(navOverlay);

// Alternar menú
hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('open');
    const icon = this.querySelector('i');
    if(this.classList.contains('open')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
    mainNav.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('open');
        mainNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Cerrar menú al hacer clic en el overlay
navOverlay.addEventListener('click', function() {
    hamburgerBtn.classList.remove('open');
    mainNav.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

// Evitar scroll cuando el menú está abierto
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .no-scroll {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});

// Botón Volver Arriba
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) { // Mostrar después de 300px de scroll
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll suave al hacer clic
backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});