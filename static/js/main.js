/* 
** Theme: File Script Main WebSite;
** Author: Abdallah Mohamed;
** Version: 1.0.0;
*/

///////
// Event Icon Menu Hamburger
///////
let hamburgerBox = document.getElementById('hamburger-box');
let navigation = document.getElementById('navigation')
let bodyOverHidden = document.querySelector('.body-over-hidden')

hamburgerBox.addEventListener('click', () => {
  hamburgerBox.classList.toggle('active');
  navigation.classList.toggle('show');
  bodyOverHidden.classList.toggle('is-hidden');
})

///////
// Event Slideshow
///////
let imgPortfolio = Array.from(document.querySelectorAll('.img-portfolio img'));
let indexImg =  imgPortfolio.length;
let dots = document.querySelector('.dots');
let insexDots = dots.length;
let startIndex = 0;

for (let i = 0; i < indexImg; i++) {
  
  // Creat Element Span
  let creatSpan = document.createElement('span');
  creatSpan.setAttribute('class', 'dot');
  creatSpan.setAttribute('data-index', i);

  // Appnd Chailed Dots
  dots.appendChild(creatSpan);

}

let dot = Array.from(document.querySelectorAll('span'));

for (let n = 0; n < dot.length; n++) {

  dot[n].onclick = function () {
    startIndex = parseInt(this.getAttribute('data-index'));
    theChecker();
  }

}
theChecker();

// Create The Checker Function
function theChecker() {

  // Remove All Active
  removeAllActive();

  // Set Active Class on Current Slide
  // imgPortfolio[startIndex - 1].classList.add('active');
  imgPortfolio[startIndex].classList.add('is-active');

  // Set Active class on Current Pagination Item
  dots.children[startIndex].classList.add('active');

}

// Remove All Active Class From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  imgPortfolio.forEach(function (img) {
      img.classList.remove('is-active');
  });

  // Loop Through Pagination Bullets
  dot.forEach(function (bullet) {

      bullet.classList.remove('active');

  });

}

// Auto Slide Posts
function autoSlide() {

  for (q = 0; q < indexImg; q++) {
    // Remove All Active
    removeAllActive();
  }

  startIndex++;
  if (startIndex > indexImg) {
    startIndex = 1;
  }
  // Set Active Class on Current Slide
  imgPortfolio[startIndex - 1].classList.add('is-active');

  // Set Active class on Current Pagination Item
  dots.children[startIndex - 1].classList.add('active');
  setTimeout(autoSlide, 3000);
}

let hasClassBody = document.body.classList.contains('body-home');

if (hasClassBody == true) {
  setTimeout(autoSlide, 1000);
}