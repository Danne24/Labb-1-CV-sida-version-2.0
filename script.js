
const hamburger = document.querySelector(".hamb-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

window.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'b') {
        alert('Hello! You found me!');
    }
})

function changeBackgroundColor(color) {
    document.getElementById('home').style.backgroundImage = "url('Image/Pi scene.png')";
    document.getElementById('about').style.backgroundColor = "orange";
    document.getElementById('contact').style.backgroundColor = "orange";
}

window.addEventListener('click', function (e) {
    console.log(`x: ${e.x} | y: ${e.y}`);

    if (e.x <= 40 && e.y <= 750) {
        changeBackgroundColor();
    }
});