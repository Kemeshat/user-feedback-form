const comments = document.getElementById('comments');
const charCount = document.getElementById('char-count');

comments.addEventListener('input', function (){
charCount.textContent = comments.value.length;
});

const form = document.getElementById('feedback-form');
form.addEventListener ("mouseover", function (event){
    if (event.target.tagName === "INPUT"|| event.target.tagName === "TEXTAREA"){

const tip= event.target.nextElementSibling;
if (tip){
    tip.style.display = "block";
}
    }
});

form.addEventListener ("mouseout", function (event){
    if (event.target.tagName === "INPUT"|| event.target.tagName === "TEXTAREA"){
const tip = event.target.nextElementSibling;

if (tip){
tip.style.display = "none";
}

    }
});

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (event){
event.preventDefault();

if (nameInput.value === "" || emailInput.value === "" || comments.value === ""){
alert ("Please fill out all fields before submitting.");
return;
}

alert ("Thank you for your feedback!");
form.reset();
charCount.textContent = "0";
});



