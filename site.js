let nav = document.querySelector("nav");
nav.addEventListener("mouseover", () => {
    nav.classList.add("regain");
    setTimeout(() => {
        nav.classList.remove("regain");
    }, 5000);
});
