// navbar toggle
const navToggle = document.getElementById('toggle-nav');
const closeNav = document.getElementById('close-nav');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', function() {
  nav.classList.add('nav-open');
});

closeNav.addEventListener('click', function() {
  nav.classList.remove('nav-open');
});

// color picker
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
let hexValBg = '#fff';
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
  hexValBg = '#' + ('0000' + dColor.toString(16)).substr(-6);
});

// grid functions
let canvas = document.getElementById('canvas');

const submit = document.getElementById('submit');
const reset = document.getElementById('reset');

function makeGrid(w, h) {
  let grid = '';
  for (let i = 0; i < h; i++) {
    grid += '<tr>';
    for (let j = 0; j < w; j++) {
      grid += '<td></td>';
    }
    grid += '</tr>';
  }
  canvas.innerHTML = grid;
}
makeGrid(40, 30);
const note = document.getElementById('note');
const noteText = document.getElementById('note-text');
// get the input values and create the new grid
submit.addEventListener('click', function(e) {
  e.preventDefault();
  let width = document.getElementById('width').value;
  let height = document.getElementById('height').value;
  if (width !== '' && height != '') {
    canvas.innerHTML.remove;
    makeGrid(width, height);
  } else {
    note.classList.add('note-show');
    setTimeout(function() {
      noteText.classList.add('note__text-show');
      noteText.textContent = 'Please fill in the width and height.';
    }, 400);
    setTimeout(function() {
      noteText.classList.remove('note__text-show');
      note.classList.remove('note-show');
    }, 3000);
  }
});

// reset the grid when clicked grid size 40 x 30
reset.addEventListener('click', function(e) {
  e.preventDefault();
  makeGrid(40, 30);
});

// set background color to target when clicked
canvas.addEventListener('mousedown', function(e) {
  e.target.style = `background-color: ${hexValBg}`;
});

// remove background if target is double clicked
canvas.addEventListener('dblclick', function(e) {
  e.target.style = `background-color: #1c2746`;
});

// input validation
let wi = document.getElementById('width');
let he = document.getElementById('height');
// to store old value
let old;
let widthLabel = document.getElementById('width-label');
let heightLabel = document.getElementById('height-label');
// width input check
wi.addEventListener('keydown', function(e) {
  old = e.target.valueAsNumber;
});

wi.addEventListener('keyup', function(e) {
  // check for input compared to old value
  if (e.target.valueAsNumber <= 80 && e.target.valueAsNumber >= 0);
  else e.target.value = old;
  // check if has value
  if (e.target.value) {
    widthLabel.style =
      'top: -54px; font-size: 0.8em; color: #151c38; fontWeight: 600;';
  }
});

// height input check
he.addEventListener('keydown', function(e) {
  old = e.target.valueAsNumber;
});

he.addEventListener('keyup', function(e) {
  // check for input compared to old value
  if (e.target.valueAsNumber <= 70 && e.target.valueAsNumber >= 0);
  else e.target.value = old;
  // check if has value
  if (e.target.value) {
    heightLabel.style =
      'top: -54px; font-size: 0.8em; color: #151c38; fontWeight: 600;';
  }
});

// info modal
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('info-modal');
const innerContent = document.getElementById('inner-content');
openModal.addEventListener('click', function() {
  modal.classList.add('info__modal-show');
  setTimeout(function() {
    innerContent.classList.add('info__modal__inner__content-show');
  }, 400);
});

closeModal.addEventListener('click', function() {
  innerContent.classList.remove('info__modal__inner__content-show');
  setTimeout(function() {
    modal.classList.remove('info__modal-show');
  }, 400);
});
