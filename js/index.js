document.addEventListener("DOMContentLoaded", () => {
    const menubtns = document.querySelectorAll(".menu__btn");
    const drops = document.querySelectorAll(".dropdown");
    menubtns.forEach(el => {
        el.addEventListener("click", (e) => {
            let currentbtn = e.currentTarget;
            let drop = currentbtn.closest(".menu__item").querySelector(".dropdown");
            menubtns.forEach(el => {
                if (el !== currentbtn) {
                    el.classList.remove("menu__btn--active");
                }
            })
            drops.forEach(el => {
                if (el !== currentbtn) {
                    el.classList.remove("dropdown--active")
                }
            })
            drop.classList.toggle("dropdown--active");
            currentbtn.classList.add("menu__btn--active");
        })
    })
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".menu")) {
            menubtns.forEach(el => {
                    el.classList.remove("menu__btn--active");
            })
            drops.forEach(el => {
                    el.classList.remove("dropdown--active")
            })
        }
    })
});