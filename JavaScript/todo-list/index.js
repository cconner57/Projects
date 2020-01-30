document.querySelector('.enter').addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		document.querySelector('.submit').click();
	}
});

function newLi() {
	const li = document.createElement('li');
	const inputLi = document.querySelector('.enter').value;
	const text = document.createTextNode(inputLi);
	li.appendChild(text);
	if (inputLi === '') {
		alert('Please enter something');
	} else {
		document.querySelector('.list').appendChild(li);
	}
	document.querySelector('.enter').value = '';
}
