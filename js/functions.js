document.onreadystatechange = function () {
    setTimeout(splashscreen, 2000);
};

function splashscreen() {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            ".splashscreen").style.visibility = "visible";
    } else {
        document.querySelector(
            ".splashscreen").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
}

/***************** Responsive Nav ******************/

function navigation() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
}))

