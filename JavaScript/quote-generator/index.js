const quotes = document.querySelector('.quote');
const url = 'https://api.quotable.io/random';

function getQuote() {
	quotes.style.display = 'block';
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			quotes.innerHTML = `<p>${data.content}</p> - <b>${data.author}</b>`;
		})
		.catch((error) => console.log(error));
}
