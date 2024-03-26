let botonMood = document.getElementById('boton');
let backHeader = document.getElementById('back-header');
let backMain = document.getElementById('back-main');
let botonImg = document.getElementById('boton-img');
let closeXImage = document.getElementById('close-x-image');
let botonText = document.getElementById('boton-text');
let closeXText = document.getElementById('close-x-text');
let buttonDownload = document.getElementById('button-download');
let bottons = document.getElementById('bottons');
let labelUrl = document.getElementById('label-url');
let labelBackground = document.getElementById('label-background');
let labelBlend = document.getElementById('label-blend');
let labelBrightness = document.getElementById('label-brightness');
let labelOpacity = document.getElementById('label-opacity');
let labelContrast = document.getElementById('label-contrast');
let labelBlur = document.getElementById('label-blur');
let labelGrayscale = document.getElementById('label-grayscale');
let labelSepia = document.getElementById('label-sepia');
let labelHue = document.getElementById('label-hue');
let labelSaturate = document.getElementById('label-saturate');
let labelInvert = document.getElementById('label-invert');

let icon = document.getElementById('icon');
let modo = 'oscuro';
let sectionImagen = document.getElementById('section-imagen');
let sectionTexto = document.getElementById('section-texto');
let colorPFooter = document.getElementById('color-p-footer');
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
// Section Text
// Top text
let topText = document.getElementById('top-text');
let inputTopText = document.getElementById('input-top-text');
let notTopText = document.getElementById('not-top-text');
// Bottom text
let bottomText = document.getElementById('bottom-text');
let inputBottomText = document.getElementById('input-bottom-text');
let notBottomText = document.getElementById('not-bottom-text');
// Family
let fontFamilyP = document.getElementById('font-family-p');
// Font Size
let fontSize = document.getElementById('font-size');
// Align Text
let textAlignLeft = document.getElementById('text-align-left');
let textAlignCenter = document.getElementById('text-align-center');
let textAlignRight = document.getElementById('text-align-right');
// Color text and back
let colorP = document.getElementById('color-p');
let colorBackP = document.getElementById('color-back-p');
let hexaColorP = document.getElementById('hexa-color-p');
let hexaColorBack = document.getElementById('hexa-color-back');
// Background transparent
let backgroundTransparent = document.getElementById('background-transparent');
// Contorn
let contornoPNone = document.getElementById('contorno-p-none');
let contornoPLight = document.getElementById('contorno-p-light');
let contornoPDark = document.getElementById('contorno-p-dark');
// Space - padding
let paddingP = document.getElementById('padding-p');
// line-height
let lineHeightP = document.getElementById('line-height-p');

// PRUEBA
let imageButton = document.getElementById('image-button');
let listImage = document.getElementById('list-image');
let fondo = document.getElementById('fondo');
let fondos = document.getElementById('fondos');
let filtro = document.getElementById('filtro');
let filtros = document.getElementById('filtros');

botonImg.addEventListener('click', ()=> {
  bottons.classList.toggle('oculto');
});
imageButton.addEventListener('click', ()=> {
  listImage.classList.toggle('oculto');
})

fondo.addEventListener('click', ()=> {
  fondos.classList.toggle('oculto');
});
filtro.addEventListener('click', ()=> {
  filtros.classList.toggle('oculto');
});

// Open and close window of image section
// botonImg.addEventListener('click', ()=>{
//   sectionImagen.classList.toggle("oculto");
// });
// closeXImage.addEventListener('click', ()=>{
//   sectionImagen.classList.toggle("oculto");
// });

// Open and close window of text section
// botonText.addEventListener('click', ()=>{
//   sectionTexto.classList.toggle("oculto");
// });

// closeXText.addEventListener('click', ()=>{
//   sectionTexto.classList.toggle("oculto");
// });

// Mood light and dark
botonMood.addEventListener('click', () => {
    if (modo === 'claro'){
        backHeader.style.backgroundColor = '#140e21';
        document.querySelector("h1").style.color = '#58c5f9';
        boton.style.color = 'var(--blue)';
        boton.style.backgroundColor = '#9afb29';
        botonImg.style.color = 'var(--blue)';
        botonImg.style.backgroundColor = '#9afb29';
        botonText.style.color = 'var(--blue)';
        botonText.style.backgroundColor = '#9afb29';
        botonText.style.color = 'var(--blue)';
        buttonDownload.style.backgroundColor = '#9afb29';
        buttonDownload.style.color = 'var(--blue)';
        icon.className = 'fa-solid fa-sun';
        document.querySelector("body").style.background = "radial-gradient(22% 16% at -11% 18%, rgb(0, 11, 75) 42%, rgba(0, 40, 57, 0.82) 75%, rgba(76, 175, 80, 0) 121%) fixed, radial-gradient(18% 28% at 18% 71%, rgb(10, 20, 69) 6%, rgba(62, 96, 113, 0.11) 100%), radial-gradient(70% 53% at 36% 76%, rgb(0, 0, 0) 0px, rgba(1, 52, 75, 0.03) 100%), radial-gradient(42% 53% at 15% 94%, rgb(2, 7, 35) 7%, rgba(0, 150, 136, 0) 100%), radial-gradient(42% 53% at 34% 72%, rgb(18, 43, 187) 7%, rgba(1, 41, 37, 0.4) 100%), radial-gradient(18% 28% at 35% 87%, rgb(23, 124, 209) 7%, rgba(0, 48, 71, 0.39) 100%), radial-gradient(31% 43% at 7% 98%, rgb(7, 19, 85) 24%, rgba(2, 43, 49, 0.35) 100%), radial-gradient(21% 37% at 72% 23%, rgba(211, 255, 109, 0.89) 24%, rgba(96, 125, 139, 0.13) 100%), radial-gradient(35% 56% at 91% 74%, rgba(24, 4, 63, 0.96) 9%, rgba(7, 58, 255, 0) 100%), radial-gradient(74% 86% at 67% 38%, rgb(3, 88, 99) 24%, rgb(96, 125, 139) 100%), linear-gradient(125deg, rgb(13, 151, 18) 1%, rgb(76, 175, 80) 100%)";
        document.querySelector("body").style.backgroundAttachment = 'fixed';
        backHeader.style.borderBottom = '1px solid #1d3b49';
        topText.style.background = '#020c21';
        bottomText.style.background = '#020c21';
        topText.style.color = '#58c5f9';
        bottomText.style.color = '#58c5f9';
        colorPFooter.style.color = '#58c5f9';
        containerImg.style.background = '#58c5f9';
        bottons.style.background = '#020c21';
        bottons.style.borderBottom = '1px solid #1d3b49';
        listImage.style.background = '#020c21';
        fondos.style.background = '#020c21';
        filtros.style.background = '#020c21';
        imageButton.style.background = '#212c33';
        fondo.style.background = '#212c33';
        filtro.style.background = '#212c33';
        labelUrl.style.color = '#58c5f9';
        labelBackground.style.color = '#58c5f9';
        labelBlend.style.color = '#58c5f9';
        labelBrightness.style.color = '#58c5f9';
        labelOpacity.style.color = '#58c5f9';
        labelContrast.style.color = '#58c5f9';
        labelBlur.style.color = '#58c5f9';
        labelGrayscale.style.color = '#58c5f9';
        labelSepia.style.color = '#58c5f9';
        labelHue.style.color = '#58c5f9';
        labelSaturate.style.color = '#58c5f9';
        labelInvert.style.color = '#58c5f9';
        hexaColor.style.color = '#58c5f9';
        modo = 'oscuro';
    } else {
        console.log("aca")
        document.querySelector("body").style.background = "radial-gradient(17% 23% at 75% 40%, #f3c47e 40%, rgb(188 243 123) 62%, rgba(76, 175, 80, 0) 129%), radial-gradient(17% 23% at 108% 51%, #ffe81bb8 40%, rgb(253 175 201 / 63%) 71%, rgba(76, 175, 80, 0) 121%), radial-gradient(22% 19% at -12% 27%, #E91E63 40%, rgb(209 249 162 / 108%) 73%, rgba(76, 175, 80, 0) 121%), radial-gradient(18% 28% at 18% 71%, rgb(243 129 168) 6%, rgba(62, 96, 113, 0.11) 100%), radial-gradient(70% 53% at 36% 76%, rgb(251 234 184) 0px, rgba(1, 52, 75, 0.03) 100%), radial-gradient(42% 53% at 15% 94%, #FF9800 7%, rgba(0, 150, 136, 0) 100%), radial-gradient(42% 53% at 34% 72%, rgb(248 206 255) 7%, rgb(0 188 212 / 0%) 100%), radial-gradient(18% 28% at 35% 87%, #ffea33 7%, rgb(20 163 231 / 56%) 100%), radial-gradient(31% 43% at 7% 98%, #FFEB3B 24%, rgb(240 163 253) 100%), radial-gradient(21% 37% at 72% 23%, rgb(211 255 109) 24%, rgb(30 174 243 / 97%) 100%), radial-gradient(35% 56% at 91% 74%, #CDDC39 9%, rgb(7 58 255) 100%), linear-gradient(125deg, rgb(21 237 28) 1%, rgb(125 21 143) 100%), radial-gradient(74% 86% at 67% 38%, rgb(118 240 255) 24%, rgb(72 174 223) 100%)";
        document.querySelector("body").style.backgroundAttachment = 'fixed';
        // document.querySelector("body").style.backgroundBlendMode = 'lighten';
        backHeader.style.backgroundColor = '#da67ed';
        topText.style.backgroundColor = '#da67ed';
        bottomText.style.background = '#da67ed';
        topText.style.color = '#020c21';
        bottomText.style.color = '#020c21';
        colorPFooter.style.color = '#020c21';
        document.querySelector("h1").style.color = '#020c21';
        containerImg.style.background = '#FFEB3B';
        backHeader.style.borderBottom = '1px solid #f9f9f9';
        // backMain.style.backgroundImage = 'linear-gradient(120deg, rgb(255 229 151 / 98%) 0%, rgb(19 47 5 / 39%) 100%)';
        boton.style.color = '#9afb29';
        boton.style.backgroundColor = '#6006ff';
        botonImg.style.color = '#9afb29';
        botonImg.style.backgroundColor = '#6006ff';
        botonText.style.color = '#9afb29';
        botonText.style.backgroundColor = '#6006ff';
        buttonDownload.style.backgroundColor = '#6006ff';
        buttonDownload.style.color = '#9afb29';
        icon.className = 'fa-solid fa-moon';
        bottons.style.background = '#da67ed';
        bottons.style.borderBottom = '1px solid rgb(249, 249, 249)';
        listImage.style.background = '#da67ed';
        fondos.style.background = '#da67ed';
        filtros.style.background = '#da67ed';
        imageButton.style.background = '#6006ff';
        fondo.style.background = '#6006ff';
        filtro.style.background = '#6006ff';
        labelUrl.style.color = '#020c21';
        labelBackground.style.color = '#020c21';
        labelBlend.style.color = '#020c21';
        labelBrightness.style.color = '#020c21';
        labelOpacity.style.color = '#020c21';
        labelContrast.style.color = '#020c21';
        labelBlur.style.color = '#020c21';
        labelGrayscale.style.color = '#020c21';
        labelSepia.style.color = '#020c21';
        labelHue.style.color = '#020c21';
        labelSaturate.style.color = '#020c21';
        labelInvert.style.color = '#020c21';
        hexaColor.style.color = '#020c21';
        modo = 'claro';
    }
});

// Aside
inputImageUrl.addEventListener('input', ()=> {
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
  // blendModeFilter.value = 'ninguno';
  // blendModeFilter.value == 'aclarar'
  // blendModeFilter.value == 'oscurecer'
  // blendModeFilter.value == 'diferencia'
  // blendModeFilter.value == 'luminucidad'
  // blendModeFilter.value == 'multiplicar'
  color.value = "#58c5f9";
  hexaColor.textContent = color.value;
  aplyFilter();
  aplyBlendMode();
});

// Section Text
inputTopText.addEventListener('input', ()=> {
  topText.textContent = inputTopText.value;
});

notTopText.addEventListener('change', ()=> {
 if(notTopText.checked){
   topText.style.display = 'none';
   containerImg.style.height =  '45vh';
 } else {
   topText.style.display = 'block';
   containerImg.style.height =  '40vh';
}
  checkeo();
  checkeoTransparenText();
});

inputBottomText.addEventListener('input', ()=> {
  bottomText.textContent = inputBottomText.value;
});

notBottomText.addEventListener('change', ()=> {
 if(notBottomText.checked){
   bottomText.style.display = 'none';
   containerImg.style.height =  '45vh';
 } else {
   bottomText.style.display = 'block';
   containerImg.style.height =  '40vh';
}
  checkeo();
  checkeoTransparenText();
});

function checkeo(){
  if (notTopText.checked && notBottomText.checked){
    containerImg.style.height = '50vh';
  }
};

// Font family, size and text direction
fontFamilyP.addEventListener('change', ()=> {
  fontFamilyChange();
});

function fontFamilyChange(){
  if (fontFamilyP.value == 'impact'){
    bottomText.style.fontFamily = 'impact';
    topText.style.fontFamily = 'impact';
  } else if (fontFamilyP.value == 'arial'){
    bottomText.style.fontFamily = 'Arial';
    topText.style.fontFamily = 'Arial';
  } else if (fontFamilyP.value == 'arialBlack'){
    bottomText.style.fontFamily = 'Arial Black';
    topText.style.fontFamily = 'Arial Black';
  } else if (fontFamilyP.value == 'americanTypewriter'){
    bottomText.style.fontFamily = 'American Typewriter';
    topText.style.fontFamily = 'American Typewriter';
  } else if (fontFamilyP.value == 'andaleMono'){
    bottomText.style.fontFamily = 'andale mono';
    topText.style.fontFamily = 'andale mono';
  } else if (fontFamilyP.value == 'comicSans'){
    bottomText.style.fontFamily = 'Comic Sans MS';
    topText.style.fontFamily = 'Comic Sans MS';
  } else if (fontFamilyP.value == 'helvetica'){
    bottomText.style.fontFamily = 'Helvetica';
    topText.style.fontFamily = 'Helvetica';
  } else if (fontFamilyP.value == 'verdana'){
    bottomText.style.fontFamily = 'Verdana';
    topText.style.fontFamily = 'Verdana';
  } else if (fontFamilyP.value == 'timesNewRoman'){
    bottomText.style.fontFamily = 'Times New Roman';
    topText.style.fontFamily = 'Times New Roman';
  }
};

fontSize.addEventListener('change', ()=> {
  topText.style.fontSize = `${fontSize.value}px`;
  bottomText.style.fontSize = `${fontSize.value}px`;
});

textAlignLeft.addEventListener('click', ()=> {
  topText.style.textAlign = `left`;
  bottomText.style.textAlign = `left`;
  checkeoTransparenText()
});
textAlignLeft.addEventListener('click', ()=> {
  bottomText.style.textAlign = `left`;
  checkeoTransparenText()
});
// textAlignLeft.addEventListener('click', ()=> {
//   topText.style.textAlign = `left`;
//   checkeoTransparenText()
// });

textAlignCenter.addEventListener('click', ()=> {
  topText.style.textAlign = 'center';
  bottomText.style.textAlign = 'center';
  checkeoTransparenText()
});
textAlignCenter.addEventListener('click', ()=> {
  topText.style.textAlign = 'center';
  checkeoTransparenText()
});
// textAlignCenter.addEventListener('click', ()=> {
//   bottomText.style.textAlign = 'center';
//   checkeoTransparenText()
// });

textAlignRight.addEventListener('click', ()=> {
  topText.style.textAlign = 'right';
  bottomText.style.textAlign = 'right';
  checkeoTransparenText()
});
textAlignRight.addEventListener('click', ()=> {
  topText.style.textAlign = 'right';
  checkeoTransparenText()
});
// textAlignRight.addEventListener('click', ()=> {
//   bottomText.style.textAlign = 'right';
//   checkeoTransparenText()
// });

// Color text and back
colorP.addEventListener('input', ()=> {
  hexaColorP.textContent = colorP.value;
  topText.value = "#181b2c";
  topText.style.color = colorP.value;
});

colorP.addEventListener('input', ()=> {
  hexaColorP.textContent = colorP.value;
  topText.value = "#181b2c";
  topText.style.color = colorP.value;
  bottomText.value = "#181b2c";
  bottomText.style.color = colorP.value;
});

colorBackP.addEventListener('input', ()=> {
  hexaColorBack.textContent = colorBackP.value;
  topText.value = "#181b2c";
  topText.style.backgroundColor = colorBackP.value;
  bottomText.value = "#181b2c";
  bottomText.style.backgroundColor = colorBackP.value;
});

backgroundTransparent.addEventListener('change', ()=> {
  checkeoTransparent();
  checkeoTransparenText();
});

function checkeoTransparent(){
  if (backgroundTransparent.checked){
    topText.style.backgroundColor = 'transparent';
    topText.style.position = 'relative';
    topText.style.width = '100%';
    topText.style.zIndex = 1;
    topText.style.top = '55px';
    bottomText.style.backgroundColor = 'transparent';
    bottomText.style.position = 'relative';
    bottomText.style.width = '100%';
    bottomText.style.zIndex = 1;
    bottomText.style.bottom = '55px';
    containerImg.style.position = 'relative';
    containerImg.style.zIndex = 0;
    containerImg.style.height = '50vh';
  }else{
    topText.style.position = 'unset';
    bottomText.style.position = 'unset';
    containerImg.style.position = 'unset';
    topText.style.backgroundColor = 'none';
  }
};

function checkeoTransparenText(){
  console.log("dentro de checkeoTransparenText")
  if(backgroundTransparent.checked && notTopText.checked){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked && notTopText.checked){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked && notBottomText.checked==true){
  console.log("aca zzzz c 1");
    containerImg.style.height = '50vh';
  } else if(backgroundTransparent.checked && notBottomText.checked==false){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked==false){
    containerImg.style.height = '40vh';
    topText.style.backgroundColor = '#AE6BF2';
    bottomText.style.backgroundColor = '#AE6BF2';
  }
};

contornoPNone.addEventListener('click', ()=> {
  topText.style.textShadow = '0 0 transparent';
  bottomText.style.textShadow = '0 0 transparent';
});

contornoPLight.addEventListener('click', ()=> {
  topText.style.textShadow = 'rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
  bottomText.style.textShadow = 'rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
});

contornoPDark.addEventListener('click', ()=> {
  topText.style.textShadow = 'rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px';
  bottomText.style.textShadow = 'rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px';
});

paddingP.addEventListener('change', ()=> {
  topText.style.padding = `${paddingP.value}px 30px`;
  bottomText.style.padding = `${paddingP.value}px 30px`;
});

lineHeightP.addEventListener('change', ()=> {
  topText.style.lineHeight = lineHeightP.value;
    bottomText.style.lineHeight = lineHeightP.value;
});