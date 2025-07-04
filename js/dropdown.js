const navBar = () => {
    const nav_main = document.getElementById("nav_main");

    if (nav_main) {
        nav_main.classList.toggle("nav-show")
    }
}

const navList = () => {
    const nav_list = document.getElementById("nav_list");

    if (nav_list) {
        nav_list.classList.toggle("nav-list-tablet-mode");
        nav_list.classList.toggle("nav-list-show");
    } else {
        console.error("Can't find the Element");
    }
}