var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventHandler, false);


const icon = {
    Github: "../static/image/github_color.svg",
    Linkedin: "../static/image/linkedin_color.svg",
    Codepen: "../static/image/codepen_color.svg",
    Instagram: "../static/image/instagram_color.svg",
}

const defaultIcon = {
    Github: "../static/image/github_dark.svg",
    Linkedin: "../static/image/linkedin_dark.svg",
    Codepen: "../static/image/codepen_dark.svg",
    Instagram: "../static/image/instagram_dark.svg",
}

const links = {
    Github: "https://github.com/overcookedkitkat",
    Linkedin: "https://www.linkedin.com/in/birajsapkota/",
    Codepen: "https://codepen.io/KrampusKEK",
    Instagram: "https://instagram.com/overcookedkitkat",
    Email: "mailto:birajsapkota98@gmail.com"
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".contactLogo").forEach(image => {
        image.addEventListener('mouseover', () => {
            const id = image.id;
            const url = icon[id];
            image.setAttribute("src",url);
        });

        image.addEventListener('mouseout', () => {
            const id = image.id;
            const url = defaultIcon[id];
            image.setAttribute("src",url);
        });

        image.addEventListener('click', () => {
            const id = image.id;
            const url = links[id];
            window.open(url,"_blank");
        });
    });
});