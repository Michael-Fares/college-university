function toggle() {
    const nav = document.getElementById("sidenav");
    const hamburger = document.getElementById("hamburger");
    const patties = Array.from(hamburger.children);
    const links = Array.from(document.querySelectorAll("#links-list li a"));

    if (nav.classList.contains("active")) {
      nav.classList.remove ("active");
      hamburger.classList.remove("active");
      patties.forEach(patty => {
        patty.classList.remove("active");
      });
    } else {
      nav.classList.add ("active");
      hamburger.classList.add("active");
      patties.forEach(patty => {
        patty.classList.add("active");
      });
    }
    Array.from(links).forEach(link => {
        link.addEventListener('click', toggle)
    })
}







