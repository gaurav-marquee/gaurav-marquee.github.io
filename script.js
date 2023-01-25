const navbarButton = document.getElementById("navBtn");
const sidebar = document.getElementById("sidebar");
const crossButton = document.getElementById("crossBtn");


const heroSecBtn = document.getElementById("hero-modal-btn");
const heroSecModal = document.getElementById("hero-modal");
const heroModalClose = document.getElementById("modal-cross-btn")


const servicesMenu = document.getElementById("servicesMenuLink")
const servicesNavmenu = document.getElementById("servicesMenuContent")

navbarButton.addEventListener ("click", openSideBar);
crossButton.addEventListener("click", closeSideBar);


heroSecBtn.addEventListener ("click", openHeroModal);
heroModalClose.addEventListener ("click", closeHeroModal);

servicesMenu.addEventListener("click", openServicesMenu);
// window.addEventListener("click", closeServicesMenu);



function openSideBar() {
    sidebar.classList.toggle("slider");
}

function closeSideBar() {
    sidebar.classList.remove("slider");
}


function openHeroModal() {
    heroSecModal.classList.add("modal-slider");
}

function closeHeroModal() {
    heroSecModal.classList.remove("modal-slider");
}

function openServicesMenu() {
    servicesNavmenu.classList.toggle("services-menu-slider");
}

// function closeServicesMenu() {
//     servicesNavmenu.classList.remove("services-menu-slider");
// }

// ***sidddebar-dropdown****

const sidebarDropdown = document.getElementById("sidebarDropdown");
const dropdownLink = document.getElementById("dropdownLink");

dropdownLink.addEventListener("click", toggleSideMenu);

function toggleSideMenu() {
    sidebarDropdown.classList.toggle("show-sidebar-dorpdown");
}



// $(document).ready(function(){
//     $("#myForm").submit(function(){
//         var firstName = $("#firstName").val();
//         var lastName = $("#lastName").val();
//         var email = $("#email").val();
        
//         if (firstName == ""){
//             $("#fname_err").html("**First name is required.");
//             $("#fname_err").css("color", "red");
//         }

//         if (lastName == ""){
//             $("#lname_err").html("**Last name is required.");
//             $("#lname_err").css("color", "red");
//         }

//         if (email == ""){
//             $("#email_err").html("**The Email must be filled.");
//             $("#email_err").css("color", "red");
//         }
//     });
// });



$(document).ready(function(){
    $("#myForm").validate({
        rules: {
            firstName:{
                required: true,
                minlength: 1,
                maxlength: 50
            },
            lastName:{
                required: true,
                minlength: 1,
                maxlength: 50
            },
            email:{
                required: true,
                email: true
            },
            subject: "required",
            message: "required"
        },
        messages: {
            firstName:{
                required: "**please enter your first name",
                minlength: "**Name at least 1 characters",
                maxlength: "**Please enter between 2 and 50 characters" 
            },
            lastName:{
                required: "**please enter your last name",
                minlength: "**Name at least 1 characters",
                maxlength: "**Please enter between 2 and 50 characters" 
            },
            email:{
                required: "**please enter your email address",
                email: "**please enter valid email address"
            },
            subject: "**please enter subject",
            message: "**please write messages"
        }
    });

    // $("a.active").parents('input, textarea').css("outline", "1px solid #dc3545");
});