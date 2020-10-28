const buttonElement = document.createElement('button');
const divElement = document.querySelector('form');
buttonElement.classList.add('btn');
buttonElement.classList.add('btn-primary');
buttonElement.setAttribute('type', 'submit');
buttonElement.textContent = 'Submit';
divElement.appendChild(buttonElement);