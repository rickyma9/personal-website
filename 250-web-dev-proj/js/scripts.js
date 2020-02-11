// from w3 schools
var slideIndex = 1;
showSlides(slideIndex);

// next/prev controls
function plusSlides(n){
    showSlides(slideIndex = n);
}

//thumbnail image control

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) {slideIndex = slides.length }
    for (i = 0; i < slides.length, i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active" , "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setTimeout(showSlides, 2000);
}

function validate () {
    var d = new Date($("#txtDate").val());
    var today = new Date();

    if (d >= today) {
        alert("Date of Birth is not valid. Date has to be before today.");
        return false;
    }
    
    var phone = $("#phone").val();
    if (isNaN(phone)) {
        alert("Phone number is not valid or not in a valid format.");
        return false;
    }
    var len = phone.toString().length;

    if (len != 10) {
        alert("Phone number is not valid or not in a valid format.");
        return false;
    }

    var zip = $("#zip").val();
    if (zip.length != 5) {
        alert("Zip code must be 5 digits.");
        return false;
    }

    var name = $("#uname").val();
    var len = name.length;
    if (len == 1) {
        alert("asd")
        return false;
    }

    return true;
}