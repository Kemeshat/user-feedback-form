const comments = document.getElementById('comments');
const charCount = document.getElementById('char-count');

comments.addEventListener('input', function (){
charCount.textContent = comments.value.length;
});


