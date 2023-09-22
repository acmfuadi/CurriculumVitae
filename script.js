// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu hover effect
const menuItems = document.querySelectorAll('nav ul li');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#333';
        item.style.color = '#fff';
    });
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
        item.style.color = '#333';
    });
});
