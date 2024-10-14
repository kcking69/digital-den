let i = 0;
let images = [];
let time = 3000;

// Image list
images[0] = 'assets/images/phone1.jfif';
images[1] = 'assets/images/phone2.jfif';
images[2] = 'assets/images/phone3.jfif';
images[3] = 'assets/images/phone4.jfif';
images[4] = 'assets/images/phone5.jfif';
images[5] = 'assets/images/phone6.jfif';

// Change Image
function changeImg() {
  document.slide.src = images[i];
  document.slide1.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImg()', time);
}

window.onload = changeImg;
