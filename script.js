const navbarButton = document.getElementById("navBtn");
const sidebar = document.getElementById("sidebar");
const crossButton = document.getElementById("crossBtn");



navbarButton.addEventListener ("click", openSideBar);
crossButton.addEventListener("click", closeSideBar);


function openSideBar() {
    sidebar.classList.add("slider");
}

function closeSideBar() {
    sidebar.classList.remove("slider");
}