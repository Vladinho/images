import validation from './validation.js';
import parseFile from './parseFile.js';

let users = [
    {
        name: "test",
        password: "test"
    }
];

let container = document.querySelector('#mainId');
let nameInput = document.querySelector('#nameInputId');
let passwordInput = document.querySelector('#passwordInputId');
let form = document.querySelector('#formId');
let images = document.querySelector('#images');
let fileInput = document.querySelector('#fileId');
let activeImgClass = 'custom-img--is-active';

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (validation(nameInput.value, passwordInput.value, users)) {
        form.parentElement.classList.add('is-hidden');
        container.classList.remove('is-hidden');

    } else {
        alert(`Such user doesn't exist.`);
    }
});

let state = {activeImg: null};
fileInput.addEventListener("change", function () {
    parseFile(state)
});

document.body.addEventListener('click', function () {
   if (state.activeImg) {
       state.activeImg.classList.remove(activeImgClass)
   }
});