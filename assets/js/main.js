let botonMood = document.getElementById('boton');
let backHeader = document.getElementById('back-header');
let backMain = document.getElementById('back-main');
let botonImg = document.getElementById('boton-img');
let closeX = document.getElementById('close-x');
let botonText = document.getElementById('boton-text');
let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
let icon = document.getElementById('icon');
let modo = 'oscuro';

let sectionImagen = document.getElementById('section-imagen');

// Images: url, img desktop
let inputImage = document.getElementById('input-image');
let image = document.getElementById('image');
let inputImageUrl = document.getElementById('input-image-url');

// Change background color div
let color = document.getElementById('color');
let containerImg = document.getElementById('container-img');
let hexaColor = document.getElementById('hexa-color');

// Filters
let filterBrightness = document.getElementById('filter-brightness');
let filterOpacity = document.getElementById('filter-opacity');
let filterContrast = document.getElementById('filter-contrast');
let filterBlur = document.getElementById('filter-blur');
let grayscale = document.getElementById('grayscale');
let filterSepia = document.getElementById('filter-sepia');
let filterHue = document.getElementById('filter-hue');
let filterSaturate = document.getElementById('filter-saturate');
let filterNegative = document.getElementById('filter-negative');

// Open and close window of sections
botonImg.addEventListener('click', ()=>{
  sectionImagen.classList.toggle("oculto")
});
closeX.addEventListener('click', ()=>{
  sectionImagen.classList.toggle("oculto")
});

// Mood light and dark
botonMood.addEventListener('click', () => {
    if (modo === 'claro'){
        backHeader.style.backgroundColor = '#140e21';
        backMain.style.background = '#140e21';
        boton.style.color = 'var(--blue)';
        boton.style.backgroundColor = '#f5e4af';
        botonImg.style.color = 'var(--blue)';
        botonImg.style.backgroundColor = '#f5e4af';
        botonText.style.color = 'var(--blue)';
        botonText.style.backgroundColor = '#f5e4af';
        botonText.style.color = 'var(--blue)';
        icon.className = 'fa-solid fa-sun';
        modo = 'oscuro';
    } else {
        backHeader.style.backgroundColor = '#f5e4af';
        backMain.style.background = '#f5e4af';
        boton.style.color = 'var(--green)';
        boton.style.backgroundColor = '#181b2c';
        botonImg.style.color = 'var(--green)';
        botonImg.style.backgroundColor = '#181b2c';
        botonText.style.color = 'var(--green)';
        botonText.style.backgroundColor = '#181b2c';
        icon.className = 'fa-solid fa-moon';
        modo = 'claro';
    }
});

// Aside
inputImageUrl.addEventListener('input', ()=> {
  image.src = inputImageUrl.value;
});

// inputImage.addEventListener('change', ()=> {
//   if( inputImage.files ){
//     image.src = inputImage.value;
//   } else {
//     image.src = 'temperatura.png';
//   }
// });

color.addEventListener('input', ()=> {
  containerImg.style.background = color.value;
  hexaColor.textContent = color.value;
});

filterBrightness.addEventListener('input', ()=> {
  value = filterBrightness.value;
  image.style.filter = `brightness(${value}%)`;
});

filterOpacity.addEventListener('input', ()=> {
  value = filterOpacity.value;
  image.style.filter = `opacity(${value}%)`;
});

filterContrast.addEventListener('input', ()=> {
  value = filterContrast.value;
  image.style.filter = `contrast(${value}%)`;
});

filterBlur.addEventListener('input', ()=> {
  value = filterBlur.value;
  image.style.filter = `blur(${value}%)`;
});

grayscale.addEventListener('input', ()=> {
  value = grayscale.value;
  image.style.filter = `grayscale(${value}%)`;
});

filterSepia.addEventListener('input', ()=> {
  value = filterSepia.value;
  image.style.filter = `sepia(${value}%)`;
});

filterHue.addEventListener('input', ()=> {
  value = filterHue.value;
  image.style.filter = `hue-rotate(${value}deg)`;
});

filterSaturate.addEventListener('input', ()=> {
  value = filterSaturate.value;
  image.style.filter = `saturate(${value}%)`;
});

filterNegative.addEventListener('input', ()=> {
  value = filterNegative.value;
  image.style.filter = `invert(${value}%)`;
});