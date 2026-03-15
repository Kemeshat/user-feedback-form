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




