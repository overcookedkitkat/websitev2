document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLink = document.querySelector('.navLink');

    burgerMenu.addEventListener('click', function () {
        navLink.classList.toggle('active');
    });
});

const obj = {
    Github: "https://github.com/overcookedkitkat",
    Linkedin: "https://www.linkedin.com/in/birajsapkota/",
    Codepen: "https://codepen.io/KrampusKEK",
    Instagram: "https://instagram.com/overcookedkitkat",
    Email: "mailto:birajsapkota98@gmail.com"
};

// Add event listeners to each image
document.querySelectorAll('.footerIcon').forEach(icon => {
    icon.addEventListener('click', function() {
        const id = this.id; // Get the id of the clicked image
        const url = obj[id]; // Get the corresponding URL from the object
        if (url) {
            window.open(url, "_blank") // Redirect to the URL
        } else {
            console.log("Oops, something went wrong :(");
        }
    });
});
