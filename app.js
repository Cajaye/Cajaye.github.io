let year = document.getElementById("year");

if (year) {
    year.innerText = new Date().getFullYear();
}


let form = document.getElementById("memb-form");
let appoitment_form = document.getElementById("appointment_form")
let firstname = document.getElementById("first-name");
let lastname = document.getElementById("last-name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age_check");
let bio = document.getElementById("bio");
let dropdown = document.getElementById("dropdown");
let service_price = document.getElementById("service_price");
let date = document.getElementById("date");

let service_dropdown = document.getElementById("service_dropdown");
let reason = document.getElementById("reason");

let review_form = document.getElementById("review_form");

if (service_dropdown && service_dropdown.value === "Hotel reservations") {
    service_price.innerText = "$80 000"
};

if (service_dropdown) {
    service_dropdown.addEventListener("change", function () {
        if (service_dropdown.value === "Hotel reservations") {
            service_price.innerText = "$80 000"
        } else if (service_dropdown.value === "Transportation services") {
            service_price.innerText = "$40 000"
        } else if (service_dropdown.value === "Group travel planning") {
            service_price.innerText = "$100 000"
        } else if (service_dropdown.value === "Tour packages") {
            service_price.innerText = "$60 000"
        }
    })
};

if (review_form) {
    review_form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for making a review");
        document.getElementById("make_review").value = "";
    });
};


if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let message = "Hey, " + firstname.value + " " + lastname.value + ", " + "you are now a member of Book it " + "your email is: " + email.value + ", " + "your phone number is: " + phone.value + ", " + "you heard about Book it on: " + dropdown.value + " " + "and some information about yourself:" + " " + bio.value;
        alert(message);
    })
};

if (appoitment_form) {
    appoitment_form.addEventListener("submit", function (e) {
        e.preventDefault();
        let message = "Hey, " + firstname.value + " " + lastname.value + ", " + "you have an appoitment set for " + date.value + " " + "your email is: " + email.value + ", " + "your phone number is: " + phone.value + ", " + "the service needed is: " + service_dropdown.value + " " + "and your reason for making an appoitment:" + " " + reason.value;
        alert(message);
    })
};