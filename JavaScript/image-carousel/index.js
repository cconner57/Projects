let i = 0;
let images = [];

images[0] = 'https://placeimg.com/640/480/animals';
images[1] = 'https://placeimg.com/640/480/tech';
images[2] = 'https://placeimg.com/640/480/nature';

function changeImg() {
	document.slide.src = images[i];
	i < images.length - 1 ? i++ : i = 0;
	setTimeout('changeImg()', 3000);
}

window.onload = changeImg;