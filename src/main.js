import createPassword from './function';
// const createPassword = require('./function.js');]
import './style.css';

const btn = document.querySelector('.btn');
const passText = document.querySelector('.password');

const updateApp = () => {
  btn.addEventListener('click', () => {
    passText.innerHTML = createPassword();
  });
};

window.onload = () => {
  updateApp();
};
