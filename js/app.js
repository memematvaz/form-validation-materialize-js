'use strict'

const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const btnSend = document.getElementById('send');

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', startApp)
}


function startApp() {
    btnSend.disabled = true;

}