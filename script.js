const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Mouse Moving Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; // Rotation calculation X
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20; // Rotation calculation Y
    
    // Set the rotation
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In (Jab mouse card ke andar aaye)
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'; // Remove transition for instant follow
});

// Animate Out (Jab mouse card se bahar jaye wapas normal ho jaye)
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});