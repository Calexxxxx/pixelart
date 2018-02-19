const navToggle = document.getElementById('toggle-nav');
const closeNav = document.getElementById('close-nav');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', function() {
  nav.classList.add('nav-open');
});

closeNav.addEventListener('click', function() {
  nav.classList.remove('nav-open');
});

const picker = document.getElementById('picker');
const ctx = picker.getContext('2d');
let preview = document.getElementById('preview');
const imgsrc = '../pixelart/assets/colorpicker.png';
const image = new Image();
let rVal = document.getElementById('rVal');
let gVal = document.getElementById('gVal');
let bVal = document.getElementById('bVal');
let rgbVal = document.getElementById('rgbVal');
let hexVal = document.getElementById('hexVal');
let hexValSelected = document.getElementById('hex-val-selected');
let pixelColor;
let dColor;
let imgdata;
let pixel;

// load the image in the color picker canvas
image.onload = function() {
  ctx.drawImage(image, 0, 0, image.width, image.height);
};
image.src = imgsrc;

// watch mousemove event on color picker
picker.addEventListener('mousemove', function(e) {
  imgdata = ctx.getImageData(e.offsetX, e.offsetY, 1, 1);

  pixel = imgdata.data;

  pixelColor = 'rgb(' + pixel[0] + ', ' + pixel[1] + ', ' + pixel[2] + ')';

  preview.style = `background-color: ${pixelColor};`;

  dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];

  rVal.textContent = pixel[0];
  gVal.textContent = pixel[1];
  bVal.textContent = pixel[2];
  rgbVal.textContent = `${pixel[0]}, ${pixel[1]}, ${pixel[2]}`;
  hexVal.textContent = '#' + ('0000' + dColor.toString(16)).substr(-6);
});

// watch click event on color picker
picker.addEventListener('click', function(e) {
  hexValSelected.textContent = '#' + ('0000' + dColor.toString(16)).substr(-6);
  hexValSelected.style = `background-color: ${pixelColor};`;
});
