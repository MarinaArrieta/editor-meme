let botonMood = document.getElementById('boton');
let backHeader = document.getElementById('back-header');
let backMain = document.getElementById('back-main');
let botonImg = document.getElementById('boton-img');
let closeXImage = document.getElementById('close-x-image');
let botonText = document.getElementById('boton-text');
let closeXText = document.getElementById('close-x-text');
let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
let icon = document.getElementById('icon');
let modo = 'oscuro';

let sectionImagen = document.getElementById('section-imagen');
let sectionTexto = document.getElementById('section-texto');

// Images: url, img desktop
let inputImage = document.getElementById('input-image');
let image = document.getElementById('image');
let inputImageUrl = document.getElementById('input-image-url');

// Change background Blend Mode
let color = document.getElementById('color');
let containerImg = document.getElementById('container-img');
let hexaColor = document.getElementById('hexa-color');
let blendModeFilter = document.getElementById('blendModeFilter');

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
let buttonResetFilter = document.getElementById('button-reset-filter');

// Open and close window of image section
botonImg.addEventListener('click', ()=>{
  console.log("aqui1----")
  sectionImagen.classList.toggle("oculto");
});
closeXImage.addEventListener('click', ()=>{
  console.log("aqui2----")
  sectionImagen.classList.toggle("oculto");
});

// Open and close window of text section
botonText.addEventListener('click', ()=>{
  console.log("aqui1----")
  sectionTexto.classList.toggle("oculto");
});

closeXText.addEventListener('click', ()=>{
  console.log("aqui2----")
  sectionTexto.classList.toggle("oculto");
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
  // image.src = inputImageUrl.value;
  // containerImg.style.backgroundImage = 'url("haku.jpg")';
  containerImg.style.backgroundImage = `url("${inputImageUrl.value}")`;
});

// function imageLocal() {
//   containerImg.style.backgroundImage = `url("${inputImage.value}")`;
// }

// inputImage.addEventListener('change', ()=> {
//   imageLocal().readAsDataURL;
// });

//Background Blend Mode
color.addEventListener('input', ()=> {
  hexaColor.textContent = color.value;
  aplyBlendMode();
});

blendModeFilter.addEventListener('change', ()=> {
  
  containerImg.style.backgroundImage =  aplyBlendMode();
});

function aplyBlendMode() {
  if (blendModeFilter.value == 'ninguno'){
    containerImg.style.backgroundBlendMode = 'normal';
  } else if (blendModeFilter.value == 'aclarar'){
    containerImg.style.backgroundBlendMode = 'lighten';
  } else if (blendModeFilter.value == 'oscurecer'){
    containerImg.style.backgroundBlendMode = 'darken';
  } else if (blendModeFilter.value == 'diferencia'){
    containerImg.style.backgroundBlendMode = 'difference';
  } else if (blendModeFilter.value == 'luminucidad'){
    containerImg.style.backgroundBlendMode = 'luminosity';
  } else if (blendModeFilter.value == 'multiplicar'){
    containerImg.style.backgroundBlendMode = 'multiply';
  }

  containerImg.style.backgroundColor = color.value;
};

// Event filters
filterBrightness.addEventListener('input', ()=> {
  aplyFilter();
});

filterOpacity.addEventListener('input', ()=> {
  aplyFilter();
});

filterContrast.addEventListener('input', ()=> {
  aplyFilter();
});

filterBlur.addEventListener('input', ()=> {
  aplyFilter();
});

grayscale.addEventListener('input', ()=> {
  aplyFilter();
});

filterSepia.addEventListener('input', ()=> {
  aplyFilter();
});

filterHue.addEventListener('input', ()=> {
  aplyFilter();
});

filterSaturate.addEventListener('input', ()=> {
  aplyFilter();
});

filterNegative.addEventListener('input', ()=> {
  aplyFilter();
});

function aplyFilter() {
  filterAll = ` brightness(${filterBrightness.value}%)`;
  filterAll += ` opacity(${filterOpacity.value}%)`;
  filterAll += ` contrast(${filterContrast.value}%)`;
  filterAll += ` blur(${filterBlur.value}px)`;
  filterAll += ` grayscale(${grayscale.value}%)`;
  filterAll += ` sepia(${filterSepia.value}%)`;
  filterAll += ` hue-rotate(${filterHue.value}deg)`;
  filterAll += ` invert(${filterNegative.value}%)`;
  filterAll += ` saturate(${filterSaturate.value}%)`;

  containerImg.style.filter = filterAll;
};

buttonResetFilter.addEventListener('click', () =>{
  filterBrightness.value = 100;
  filterOpacity.value = 100;
  filterContrast.value = 100;
  filterBlur.value = 0;
  grayscale.value = 0;
  filterSepia.value = 0;
  filterHue.value = 0;
  filterNegative.value = 0;
  filterSaturate.value = 100;

  // Blend Mode
  blendModeFilter.value = 'ninguno';
  blendModeFilter.value == 'aclarar'
  blendModeFilter.value == 'oscurecer'
  blendModeFilter.value == 'diferencia'
  blendModeFilter.value == 'luminucidad'
  blendModeFilter.value == 'multiplicar'
  color.value = "#ffffff";
  hexaColor.textContent = color.value;
  aplyFilter();
  aplyBlendMode();
});