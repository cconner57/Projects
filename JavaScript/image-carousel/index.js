let i = 0;
let images = [];

images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';

function changeImg() {
	document.slide.src = images[i];
	i < images.length - 1 ? i++ : i = 0;
	setTimeout('changeImg()', 3000);
}

window.onload = changeImg;