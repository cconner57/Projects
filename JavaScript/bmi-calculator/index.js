const chart = document.querySelector('.chart');
const results = document.querySelector('.results');

document.querySelector('.submit').addEventListener('click', (e) => {
	e.preventDefault();
	calculateBmi();
});

function calculateBmi() {
	let weight = document.BMI.weight.value;
	let height = document.BMI.inches.value;
	if (weight > 0 && height > 0) {
		let bmiResults =  Math.round((weight /(height*height)) * 703.06957964);
		document.BMI.value = bmiResults;
		if (bmiResults < 18.5) {
			results.innerHTML = `BMI: ${bmiResults} - Underweight`;
			chart.style.display = 'block';
			console.log('test1');
		}
		if (bmiResults > 18.5 && bmiResults < 25) {
			results.innerHTML = `BMI: ${bmiResults} - Normal`;
			chart.style.display = 'block';
			console.log('test2');
		}
		if (bmiResults > 25 && bmiResults < 30) {
			results.innerHTML = `BMI: ${bmiResults} - Overweight`;
			chart.style.display = 'block';
			console.log('test3');
		}
		if (bmiResults > 30) {
			results.innerHTML = `BMI: ${bmiResults} - Obese`;
			chart.style.display = 'block';
		}
	} else {
		alert('Please fill everything in');
	}
}
