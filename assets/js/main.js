let botonMood = document.getElementById('boton');
let backHeader = document.getElementById('back-header');
let backMain = document.getElementById('back-main');
let botonImg = document.getElementById('boton-img');
let closeXImage = document.getElementById('close-x-image');
let botonText = document.getElementById('boton-text');
let closeXText = document.getElementById('close-x-text');
let buttonDownload = document.getElementById('button-download');
let buttonsImg = document.getElementById('buttons-img');
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
let buttonText = document.getElementById('button-text');
let buttonColor = document.getElementById('button-color');
let buttonSpace = document.getElementById('button-space');
let textList = document.getElementById('text-list');
let colorTextList = document.getElementById('color-text-list');
let spaceTextList = document.getElementById('space-text-list');
let labelTopText = document.getElementById('label-top-text');
let labelBottomText = document.getElementById('label-bottom-text');
let labelTextNone = document.getElementById('label-text-none');
let fontFamily = document.getElementById('font-family');
let textFontSize = document.getElementById('text-font-size');
let labelColor = document.getElementById('label-color');
let labelBackgroundText = document.getElementById('label-background-text');
let labelBackTransparentText = document.getElementById('label-back-transparent-text');
let labelSpace = document.getElementById('label-space');
let lineHeightLabel = document.getElementById('line-height-label');
let labelContorn = document.getElementById('label-contorn');
let labelHexaColorBack = document.getElementById('label-hexa-color-back');
let labelHexaColorP = document.getElementById('label-hexa-color-p');
let labelTopTexNone = document.getElementById('label-top-text-none');
let labelBottomTextNone = document.getElementById('label-bottom-text-none');
let icon = document.getElementById('icon');
let modo = 'oscuro';
let sectionImagen = document.getElementById('section-imagen');
let sectionTexto = document.getElementById('section-texto');
let colorPFooter = document.getElementById('color-p-footer');
let bottonsText = document.getElementById('bottons-text');
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
// Close and Open sections
let imageButton = document.getElementById('image-button');
let listImage = document.getElementById('list-image');
let fondo = document.getElementById('fondo');
let fondos = document.getElementById('fondos');
let filtro = document.getElementById('filtro');
let filtros = document.getElementById('filtros');

botonImg.addEventListener('click', ()=> {
  buttonsImg.classList.toggle('oculto');
  hiddenImage();
});

botonText.addEventListener('click', ()=>{
  bottonsText.classList.toggle('oculto');
  hiddenText();
});

function hiddenImage(){
  listImage.classList.add("oculto");
  fondos.classList.add("oculto");
  filtros.classList.add("oculto");
};

function hiddenText(){
  textList.classList.add("oculto");
  colorTextList.classList.add("oculto");
  spaceTextList.classList.add("oculto");
  
};

imageButton.addEventListener('click', ()=> {
  hiddenImage();
  listImage.classList.toggle('oculto');
});
fondo.addEventListener('click', ()=> {
  hiddenImage();
  fondos.classList.toggle('oculto');
});
filtro.addEventListener('click', ()=> {
  hiddenImage();
  filtros.classList.toggle('oculto');
});

buttonText.addEventListener('click', ()=> {
  hiddenText();
  textList.classList.toggle('oculto');
});
buttonColor.addEventListener('click', ()=> {
  hiddenText();
  colorTextList.classList.toggle('oculto');
});
buttonSpace.addEventListener('click', ()=> {
  hiddenText();
  spaceTextList.classList.toggle('oculto');
});

// Mood light and dark
botonMood.addEventListener('click', () => {
    if (modo === 'claro'){
        document.querySelector("body").style.background = "var(--light-gradient)";
        document.querySelector("body").style.backgroundAttachment = 'fixed';
        backHeader.style.backgroundColor = '#da67ed';
        colorPFooter.style.color = 'var(--dark-blue)';
        document.querySelector("h1").style.color = 'var(--dark-blue)';
        backHeader.style.borderBottom = '1px solid #d3b048';
        bottonsText.style.borderBottom = '1px solid #d3b048';
        boton.style.color = 'var(--light-green)';
        boton.style.backgroundColor = '#6006ff';
        botonImg.style.color = 'var(--light-green)';
        botonImg.style.backgroundColor = '#6006ff';
        botonText.style.color = 'var(--light-green)';
        botonText.style.backgroundColor = '#6006ff';
        buttonDownload.style.backgroundColor = '#6006ff';
        buttonDownload.style.color = 'var(--light-green)';
        icon.className = 'fa-solid fa-moon';
        buttonsImg.style.background = '#da67ed';
        buttonsImg.style.borderBottom = '1px solid #d3b048';
        listImage.style.background = '#da67ed';
        fondos.style.background = '#da67ed';
        filtros.style.background = '#da67ed';
        imageButton.style.background = '#6006ff';
        fondo.style.background = '#6006ff';
        filtro.style.background = '#6006ff';
        labelUrl.style.color = 'var(--dark-blue)';
        labelBackground.style.color = 'var(--dark-blue)';
        labelBlend.style.color = 'var(--dark-blue)';
        labelBrightness.style.color = 'var(--dark-blue)';
        labelOpacity.style.color = 'var(--dark-blue)';
        labelContrast.style.color = 'var(--dark-blue)';
        labelBlur.style.color = 'var(--dark-blue)';
        labelGrayscale.style.color = 'var(--dark-blue)';
        labelSepia.style.color = 'var(--dark-blue)';
        labelHue.style.color = 'var(--dark-blue)';
        labelSaturate.style.color = 'var(--dark-blue)';
        labelInvert.style.color = 'var(--dark-blue)';
        hexaColor.style.color = 'var(--dark-blue)';
        listImage.style.borderBottom = '1px solid #d3b048';
        textList.style.borderBottom = '1px solid #d3b048';
        bottonsText.style.backgroundColor = '#da67ed';
        buttonText.style.backgroundColor = '#6006ff';
        buttonColor.style.backgroundColor = '#6006ff';
        buttonSpace.style.backgroundColor = '#6006ff';
        textList.style.backgroundColor = '#da67ed';
        labelTopText.style.color = 'var(--dark-blue)';
        labelBottomText.style.color = 'var(--dark-blue)';
        fontFamily.style.color = 'var(--dark-blue)';
        textFontSize.style.color = 'var(--dark-blue)';
        labelColor.style.color = 'var(--dark-blue)';
        labelBackgroundText.style.color = 'var(--dark-blue)';
        labelBackTransparentText.style.color = 'var(--light-green)';
        labelSpace.style.color = 'var(--dark-blue)';
        lineHeightLabel.style.color = 'var(--dark-blue)';
        labelContorn.style.color = 'var(--dark-blue)';
        labelHexaColorBack.style.color = 'var(--dark-blue)';
        labelHexaColorP.style.color = 'var(--dark-blue)';
        colorTextList.style.backgroundColor = '#da67ed';
        spaceTextList.style.backgroundColor = '#da67ed';
        colorTextList.style.borderBottom = '1px solid #d3b048';
        spaceTextList.style.borderBottom = '1px solid #d3b048';
        fondos.style.borderBottom = '1px solid #d3b048';
        labelTopTexNone.style.color = 'var(--light-green)';
        labelBottomTextNone.style.color = 'var(--light-green)';
        containerImg.style.backgroundSize = '100% 100%';
        modo = 'oscuro';
    } else {
      document.querySelector("body").style.background = 'var(--gradient-dark)';
      document.querySelector("body").style.backgroundAttachment = 'fixed';
      backHeader.style.backgroundColor = 'var(--dark-blue)';
      document.querySelector("h1").style.color = 'var(--light-blue)';
      boton.style.color = 'var(--blue)';
      boton.style.backgroundColor = 'var(--light-green)';
      botonImg.style.color = 'var(--blue)';
      botonImg.style.backgroundColor = 'var(--light-green)';
      botonText.style.color = 'var(--blue)';
      botonText.style.backgroundColor = 'var(--light-green)';
      botonText.style.color = 'var(--blue)';
      buttonDownload.style.backgroundColor = 'var(--light-green)';
      buttonDownload.style.color = 'var(--blue)';
      icon.className = 'fa-solid fa-sun';
      backHeader.style.borderBottom = '1px solid var(--dark-green-middle)';
      bottonsText.style.borderBottom = '1px solid var(--dark-green-middle)';
      listImage.style.borderBottom = '1px solid var(--dark-green-middle)';
      textList.style.borderBottom = '1px solid var(--dark-green-middle)';
      colorTextList.style.borderBottom = '1px solid var(--dark-green-middle)';
      spaceTextList.style.borderBottom = '1px solid var(--dark-green-middle)';
      colorPFooter.style.color = 'var(--light-blue)';
      buttonsImg.style.background = 'var(--dark-blue)';
      buttonsImg.style.borderBottom = '1px solid var(--dark-green-middle)';
      listImage.style.background = 'var(--dark-blue)';
      fondos.style.background = 'var(--dark-blue)';
      filtros.style.background = 'var(--dark-blue)';
      imageButton.style.background = 'var(--dark-green)';
      fondo.style.background = 'var(--dark-green)';
      filtro.style.background = 'var(--dark-green)';
      labelUrl.style.color = 'var(--light-blue)';
      labelBackground.style.color = 'var(--light-blue)';
      labelBlend.style.color = 'var(--light-blue)';
      labelBrightness.style.color = 'var(--light-blue)';
      labelOpacity.style.color = 'var(--light-blue)';
      labelContrast.style.color = 'var(--light-blue)';
      labelBlur.style.color = 'var(--light-blue)';
      labelGrayscale.style.color = 'var(--light-blue)';
      labelSepia.style.color = 'var(--light-blue)';
      labelHue.style.color = 'var(--light-blue)';
      labelSaturate.style.color = 'var(--light-blue)';
      labelInvert.style.color = 'var(--light-blue)';
      hexaColor.style.color = 'var(--light-blue)';
      bottonsText.style.backgroundColor = 'var(--dark-blue)';
      buttonText.style.backgroundColor = 'var(--dark-green)';
      buttonColor.style.backgroundColor = 'var(--dark-green)';
      buttonSpace.style.backgroundColor = 'var(--dark-green)';
      textList.style.backgroundColor = 'var(--dark-blue)';
      labelTopText.style.color = 'var(--light-blue)';
      labelBottomText.style.color = 'var(--light-blue)';
      fontFamily.style.color = 'var(--light-blue)';
      textFontSize.style.color = 'var(--light-blue)';
      labelColor.style.color = 'var(--light-blue)';
      labelBackgroundText.style.color = 'var(--light-blue)';
      labelBackTransparentText.style.color = 'var(--light-blue)';
      labelSpace.style.color = 'var(--light-blue)';
      lineHeightLabel.style.color = 'var(--light-blue)';
      labelContorn.style.color = 'var(--light-blue)';
      labelHexaColorBack.style.color = 'var(--light-blue)';
      labelHexaColorP.style.color = 'var(--light-blue)';
      colorTextList.style.backgroundColor = 'var(--dark-blue)';
      spaceTextList.style.backgroundColor = 'var(--dark-blue)';
      fondos.style.borderBottom = '1px solid var(--dark-blue)';
      labelTopTexNone.style.color = 'var(--light-blue)';
      labelBottomTextNone.style.color = 'var(--light-blue)';
      containerImg.style.backgroundSize = '100% 100%';
      modo = 'claro';
    }
});

// Aside
inputImageUrl.addEventListener('input', ()=> {
  containerImg.style.backgroundImage = `url("${inputImageUrl.value}")`;
});

inputImage.addEventListener('change', ()=> {
  const file = inputImage.files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convierte la imagen a una cadena en base64
      containerImg.style.backgroundImage = `url("${reader.result}")`;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
});

//Background Blend Mode
color.addEventListener('input', ()=> {
  hexaColor.textContent = color.value;
  applyBlendMode();
});

blendModeFilter.addEventListener('change', ()=> {
  
  containerImg.style.backgroundImage =  applyBlendMode();
});

function applyBlendMode() {
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
  applyFilter();
});

filterOpacity.addEventListener('input', ()=> {
  applyFilter();
});

filterContrast.addEventListener('input', ()=> {
  applyFilter();
});

filterBlur.addEventListener('input', ()=> {
  applyFilter();
});

grayscale.addEventListener('input', ()=> {
  applyFilter();
});

filterSepia.addEventListener('input', ()=> {
  applyFilter();
});

filterHue.addEventListener('input', ()=> {
  applyFilter();
});

filterSaturate.addEventListener('input', ()=> {
  applyFilter();
});

filterNegative.addEventListener('input', ()=> {
  applyFilter();
});

function applyFilter() {
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
  color.value = "#FFFFFF";
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
 } else if(!notTopText.checked){
   topText.style.display = 'block';
   containerImg.style.height =  '30vh';
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
   containerImg.style.height =  '30vh';
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
  } else if (fontFamilyP.value == 'madimiOne'){
    bottomText.style.fontFamily = 'Madimi One';
    topText.style.fontFamily = 'Madimi One';
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
});
// textAlignLeft.addEventListener('click', ()=> {
//   bottomText.style.textAlign = `left`;
// });

textAlignCenter.addEventListener('click', ()=> {
  topText.style.textAlign = 'center';
  bottomText.style.textAlign = 'center';
});
// textAlignCenter.addEventListener('click', ()=> {
//   topText.style.textAlign = 'center';
// });

textAlignRight.addEventListener('click', ()=> {
  topText.style.textAlign = 'right';
  bottomText.style.textAlign = 'right';
});
// textAlignRight.addEventListener('click', ()=> {
//   topText.style.textAlign = 'right';
// });

// Color text and back
// colorP.addEventListener('input', ()=> {
//   hexaColor.textContent = colorP.value;
//   topText.value = "#181b2c";
//   topText.style.color = colorP.value;
// });

colorP.addEventListener('input', ()=> {
  labelHexaColorP.textContent = colorP.value;
  // topText.value = "#181b2c";
  topText.style.color = colorP.value;
  // bottomText.value = "#181b2c";
  bottomText.style.color = colorP.value;
});

colorBackP.addEventListener('input', ()=> {
  labelHexaColorBack.textContent = colorBackP.value;
  // topText.value = "#181b2c";
  topText.style.backgroundColor = colorBackP.value;
  // bottomText.value = "#181b2c";
  bottomText.style.backgroundColor = colorBackP.value;
});

backgroundTransparent.addEventListener('change', ()=> {
  checkeoTransparent();
  checkeoTransparenText();
});

function checkeoTransparent(){
  if(backgroundTransparent.checked){
    topText.style.color = 'var(--dark-blue)';
    topText.style.backgroundColor = 'transparent';
    topText.style.position = 'relative';
    topText.style.width = '100%';
    topText.style.zIndex = 1;
    topText.style.top = '55px';
    bottomText.style.color = 'var(--dark-blue)';
    bottomText.style.backgroundColor = 'transparent';
    bottomText.style.position = 'relative';
    bottomText.style.width = '100%';
    bottomText.style.zIndex = 1;
    bottomText.style.bottom = '119px';
    containerImg.style.position = 'relative';
    containerImg.style.zIndex = 0;
    containerImg.style.height = '50vh';
  }else if(!backgroundTransparent.checked){
    topText.style.top = '0px';
    bottomText.style.bottom = '0px';
  }
  else if(!backgroundTransparent.checked && botonMood()){
    topText.style.top = '0px';
    bottomText.style.bottom = '0px';
  }
};

function checkeoTransparenText(){
  if(backgroundTransparent.checked && notTopText.checked){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked && notTopText.checked){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked && notBottomText.checked==true){
    containerImg.style.height = '50vh';
  } else if(backgroundTransparent.checked && notBottomText.checked==false){
    containerImg.style.height = '50vh';
  }else if(backgroundTransparent.checked==false){
    containerImg.style.height = '30vh';
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

document.getElementById('button-download').addEventListener('click', function() {

  container_meme = document.querySelector('.container-img-p');
  config = {
    quality: 1 // baja la calidad de imagen (1 es sin bajar la calidad)
    // imagePlaceholder: img if the other fail
  }

  // https://github.com/tsayen/dom-to-image
  domtoimage.toJpeg(container_meme, config).then(function (dataUrl) {
    let link = document.createElement('a');
    link.download = 'memeker.jpeg';
    link.href = dataUrl;
    link.click();
  });

});