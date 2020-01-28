let time = 11;
let myInterval = -1;

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const title = document.querySelector('.currentTime');

startBtn.addEventListener('click', () => {
	start();
});

pauseBtn.addEventListener('click', () => {
	pause();
});

resetBtn.addEventListener('click', () => {
	reset();
});

function start() {
	if (myInterval === -1) {
		myInterval = setInterval(function() {
			time--;
			title.innerHTML = time;
			if (time === 0) {
				title.innerHTML = `Time's up!`;
				clearInterval(myInterval);
				myInterval = -1;
				time = 11;
			}
		}, 1000);
	}
}

function pause() {
	clearInterval(myInterval);
	myInterval = -1;
}

function reset() {
	pause();
	time = 11;
	start();
}
