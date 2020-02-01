document.querySelector('.enter').addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		document.querySelector('.submit').click();
	}
});

function getPokemon() {
	const searchPokemon = document.querySelector('input').value;
	const pokemon = searchPokemon.toLowerCase();

	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
		.then((response) => response.json())
		.then((data) => {
			const source = document.querySelector('img');
			source.src = `${data.sprites['front_default']}`;
		})
		.catch((error) => {
			alert('Please enter the correct Pokemon name');
			console.log(error);
		});
	document.querySelector('input').value = '';
}
