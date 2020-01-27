// Number
let number = 0;
const getNumber = document.querySelector('.number');

// Increase Number
document.querySelector('.increase').addEventListener('click', () => {
	number++;
	getNumber.innerHTML = number;
});

// Reset Number
document.querySelector('.reset').addEventListener('click', () => {
	number = 0;
	getNumber.innerHTML = number;
});

// Decrease Number
document.querySelector('.decrease').addEventListener('click', () => {
	number--;
	getNumber.innerHTML = number;
});
