let i = 0;
let images = [];
let time = 3000;

// Image list
images[0] = 'assets/images/phone1.jpg';
images[1] = 'assets/images/phone2.jpg';
images[2] = 'assets/images/phone3.jpg';
images[3] = 'assets/images/phone5.jpg';

// Change Image
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImg()', time);
}

window.onload = changeImg;
