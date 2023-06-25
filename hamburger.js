function toggle() {
    const nav = document.getElementById("sidenav");
    const hamburger = document.getElementById("hamburger");
    const patties = Array.from(hamburger.children);
    const links = Array.from(document.querySelectorAll("#links-list li a"));

    if (nav.style.display === "flex") {
      nav.style.display = "none";
      hamburger.classList.remove("active");
      patties.forEach(patty => {
        patty.classList.remove("active");
      });
    } else {
      nav.style.display = "flex";
      hamburger.classList.add("active");
      patties.forEach(patty => {
        patty.classList.add("active");
      });
    }
    Array.from(links).forEach(link => {
        link.addEventListener('click', toggle)
    })
}







