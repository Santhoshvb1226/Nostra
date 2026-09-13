/* =========================
   OFFER BAR
========================= */

function closeOffer() {

    document.querySelector(".offer-bar").style.display = "none";

}


/* =========================
   MOBILE MENU
========================= */

function openMenu() {

    document.getElementById("mobileMenu").style.display = "flex";

}


function closeMenu() {

    document.getElementById("mobileMenu").style.display = "none";

}


/* =========================
   HERO SLIDER
========================= */

let images = [

    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80"

];


let currentImage = 0;


function nextSlide() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("heroImage").src =
        images[currentImage];

}


function previousSlide() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("heroImage").src =
        images[currentImage];

}


/* =========================
   AUTO SLIDER
========================= */

setInterval(function() {

    let image =
        document.getElementById("heroImage");

    if (image) {

        nextSlide();

    }

}, 5000);


/* =========================
   FAVOURITE
========================= */

function addFavourite(button) {

    if (button.innerHTML === "♡") {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}


/* =========================
   NEWSLETTER
========================= */

function subscribe() {

    let email =
        document.getElementById("newsletterEmail").value;

    let message =
        document.getElementById("newsletterMessage");


    if (email === "") {

        message.innerHTML =
            "Please enter your email.";

        message.style.color = "red";

        return;

    }


    let pattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (!email.match(pattern)) {

        message.innerHTML =
            "Please enter a valid email.";

        message.style.color = "red";

        return;

    }


    message.innerHTML =
        "Thank you for subscribing!";

    message.style.color = "green";

}


/* =========================
   COLLECTION SEARCH + FILTER
========================= */

function filterCollection() {

    let search =
        document.getElementById("searchInput");


    if (!search) {
        return;
    }


    let searchText =
        search.value.toLowerCase();


    let checkboxes =
        document.querySelectorAll(
            ".filter-sidebar input:checked"
        );


    let selectedFilters = [];


    checkboxes.forEach(function(box) {

        selectedFilters.push(
            box.value
        );

    });


    let products =
        document.querySelectorAll(
            ".collection-product"
        );


    products.forEach(function(product) {

        let productTags =
            product.dataset.tags.toLowerCase();


        let productName =
            product.querySelector("h3")
            .innerText
            .toLowerCase();


        let matchesSearch =
            productName.includes(searchText);


        let matchesFilter = true;


        if (selectedFilters.length > 0) {

            matchesFilter =
                selectedFilters.some(function(filter) {

                    return productTags.includes(filter);

                });

        }


        if (
            matchesSearch &&
            matchesFilter
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* =========================
   CONTACT FORM
========================= */

function submitContact(event) {

    event.preventDefault();


    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let message =
        document.getElementById("message").value.trim();


    let nameError =
        document.getElementById("nameError");

    let emailError =
        document.getElementById("emailError");

    let messageError =
        document.getElementById("messageError");

    let success =
        document.getElementById("successMessage");


    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";
    success.innerHTML = "";


    let valid = true;


    if (name === "") {

        nameError.innerHTML =
            "Name is required.";

        valid = false;

    }


    let pattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (email === "") {

        emailError.innerHTML =
            "Email is required.";

        valid = false;

    }

    else if (!email.match(pattern)) {

        emailError.innerHTML =
            "Enter a valid email.";

        valid = false;

    }


    if (message === "") {

        messageError.innerHTML =
            "Message is required.";

        valid = false;

    }


    if (valid) {

        success.innerHTML =
            "Message sent successfully!";

        document
            .getElementById("contactForm")
            .reset();

    }

}s