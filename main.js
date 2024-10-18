const faqIcons = document.querySelectorAll('.reveal');
const answers = document.querySelectorAll('.answer');

let i = 0;
const images = [];
const time = 3000;

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

// Faq Icon toggle
let show = false;

for (let i = 0; i < faqIcons.length; i++) {
  faqIcons[i].addEventListener('click', () => {
    if (!show) {
      answers[i].style.display = 'block';
      faqIcons[i].style.transform = 'rotate(180deg)';
      show = true;
    } else {
      answers[i].style.display = 'none';
      faqIcons[i].style.transform = 'rotate(0)';
      show = false;
    }
  });
}

// Animate on Scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    //  else {
    //   entry.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll('.notshow');
hiddenElements.forEach((el) => observer.observe(el));
