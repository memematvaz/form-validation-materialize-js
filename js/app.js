'use strict'

const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const btnSend = document.getElementById('send');
const form = document.getElementById('send-mail');
const btnReset = document.getElementById('resetBtn')


eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', startApp);
    email.addEventListener('blur', validation);
    subject.addEventListener('blur', validation);
    message.addEventListener('blur', validation);
    btnSend.addEventListener('click', send);
    btnReset.addEventListener('click', reset);
}



function startApp() {
    btnSend.disabled = true;

}

function validation() {
    validateLength(this);

    if (!this) {

    } else if (this.type === 'email') {
        validateEmail(this);
    }

    let errors = document.querySelectorAll('.error');

    if (email.value !== '' && subject.value !== '' && message.vale !== '' && errors.length === 0) {
        btnSend.disabled = false;
    }
}



function validateLength(text) {
    if (!text) {

    } else if (text.value.length > 0) {
        text.style.borderBottomColor = 'green';
        text.classList.remove('error');
    } else {
        text.style.borderBottomColor = 'red';
        text.classList.add('error');
    }
}

function validateEmail(text) {

    if (text.value.indexOf('@') !== -1) {
        text.style.borderBottomColor = 'green';
        text.classList.remove('error');
    } else {
        text.style.borderBottomColor = 'red';
        text.classList.add('error');
    }
}

function send(e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';
    const sended = document.createElement('img');
    sended.src = 'img/mail.gif';
    sended.style.display = 'block';

    setTimeout(function() {
        spinner.style.display = 'none';
        document.querySelector('#loaders').appendChild(sended);

        setTimeout(function() {
            sended.remove();
            form.reset();
            btnSend.disabled = true;
            validation();
        }, 5000);

    }, 3000);
}

function reset(e) {

    e.preventDefault();
    form.reset();
    btnSend.disabled = true;
    validation();
    text.style.borderBottomColor = 'red';
    text.classList.add('error');

}