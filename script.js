const molesContainer = document.getElementById('moles');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 30;
let timerInterval;

function createMole() {
    const mole = document.createElement('div');
    mole.classList.add('mole');
    mole.style.left = Math.floor(Math.random() * 340) + 'px'; // Random horizontal position
    mole.style.top = Math.floor(Math.random() * 340) + 'px'; // Random vertical position
    mole.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        molesContainer.removeChild(mole);
    });
    molesContainer.appendChild(mole);
    setTimeout(() => {
        molesContainer.removeChild(mole);
    }, Math.floor(Math.random() * 2000) + 1000); // Random appearance time
}

function updateTimer() {
    timerDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        alert('Time is up! Your score: ' + score);
        location.reload(); // Reload the page to restart the game
    }
    timeLeft--;
}

timerInterval = setInterval(updateTimer, 1000);

setInterval(createMole, 500); // Generate moles every second
