const navbarListButton = () => {
    const nav_list = document.getElementById("navbar_list");

    if (nav_list) {
        nav_list.classList.toggle("nav-list-show");
    } else {
        console.error("Can't find the Element");
    }
}