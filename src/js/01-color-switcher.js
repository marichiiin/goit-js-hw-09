
let timerId = null;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
console.log(startBtn);

startBtn.addEventListener('click', changebg);
stopBtn.addEventListener('click', stopchangebg);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changebg() {
    startBtn.setAttribute('disabled', '');
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
}

function stopchangebg() {
    startBtn.removeAttribute('disabled');
    clearInterval(timerId);
}