let menuBtn = document.getElementById('menuBtn');
let menuBar = document.getElementById('menuBar');
let signupBtn = document.getElementById('signupBtn');
let modal = document.getElementById('formModal');
let closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', function() {
    menuBar.classList.toggle('show');
})
signupBtn.addEventListener('click', function() {
    modal.classList.add('show');
})
signupBtn.addEventListener('click', function() {
    modal.classList.add('show');
})
closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
})