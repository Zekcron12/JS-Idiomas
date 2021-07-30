//Constantes
const myText = document.getElementById('myText');
const myLanguage = document.getElementById('myLanguage');
const flagImg = document.getElementById('flag-img');
const flag = document.getElementById('flag');


// Cambiar texto
let numClicks = 0;
flag.onclick = function() {run()};

//funcion que ejecuta el procedimiento
const run = () => {

  // Variable
  numClicks = numClicks + 1;

  // Switch
  switch (numClicks) { //switch condicional 
    // Español
    case 1:
      myText.textContent = 'Bandera...';
      myText.dataset.text = 'Bandera...';
      myLanguage.textContent = '(Español)';
      flagImg.src = 'img/flag/español.png';
      break;
    // Portugues
    case 2:
      myText.textContent = 'Bandeira...';
      myText.dataset.text = 'Bandeira...';
      myLanguage.textContent = '(Portugués)';
      flagImg.src = 'img/flag/portuges.png';
    break;
    // Frances
    case 3:
      myText.textContent = 'Drapeau...';
      myText.dataset.text = 'Drapeau...';
      myLanguage.textContent = '(Francés)';
      flagImg.src = 'img/flag/francia.png';
     break;
    // Italiano
    case 4:
      myText.textContent = 'Bandiera...';
      myText.dataset.text = 'Bandiera...';
      myLanguage.textContent = '(Italiano)';
      flagImg.src = 'img/flag/italia.png';
    break;
    // Ruso
    case 5:
      myText.textContent = 'Флаг...';
      myText.dataset.text = 'Флаг...';
      myLanguage.textContent = '(Ruso)';
      flagImg.src = 'img/flag/ruso.png';
    break;
    // Griego
    case 6:
      myText.textContent = 'Σημαία...';
      myText.dataset.text = 'Σημαία...';
      myLanguage.textContent = '(Griego)';
      flagImg.src = 'img/flag/griego.png';
    break;
    // Japones
    case 7:
      myText.textContent = '国旗...';
      myText.dataset.text = '国旗...';
      myLanguage.textContent = '(Japonés)';
      flagImg.src = 'img/flag/japones.png';
    break;
    // Coreano
    case 8:
      myText.textContent = '깃발...';
      myText.dataset.text = '깃발...';
      myLanguage.textContent = '(Coreano)';
      flagImg.src = 'img/flag/coreano.png';
    break;
    // Alemán
    case 9:
      myText.textContent = 'Flagge...';
      myText.dataset.text = 'Flagge...';
      myLanguage.textContent = '(Alemán)';
      flagImg.src = 'img/flag/aleman.png';
    break;
    // Turco
    case 10:
      myText.textContent = 'Bayrak...';
      myText.dataset.text = 'Bayrak...';
      myLanguage.textContent = '(Turco)';
      flagImg.src = 'img/flag/turco.png';
    break;
    // Arabe
    case 11:
      myText.textContent = 'علم...';
      myText.dataset.text = 'علم...';
      myLanguage.textContent = '(Árabe)';
      flagImg.src = 'img/flag/arabe.png';
    break;
    // Checo
    case 12:
      myText.textContent = 'Vlajka...';
      myText.dataset.text = 'Vlajka...';
      myLanguage.textContent = '(Checo)';
      flagImg.src = 'img/flag/checo.png';
    break;
    // Galés
    case 13:
      myText.textContent = 'Baner...';
      myText.dataset.text = 'Baner...';
      myLanguage.textContent = '(Galés)';
      flagImg.src = 'img/flag/gales.png';
    break;
    // Hebreo
    case 14:
      myText.textContent = 'דֶגֶל...';
      myText.dataset.text = 'דֶגֶל...';
      myLanguage.textContent = '(Hebreo)';
      flagImg.src = 'img/flag/hebreo.png';
    break;
    // Irlandés
    case 15:
      myText.textContent = 'Bratach...';
      myText.dataset.text = 'Bratach...';
      myLanguage.textContent = '(Irlandés)';
      flagImg.src = 'img/flag/irlandes.png';
    break;
    // Polaco
    case 16:
      myText.textContent = 'Flaga...';
      myText.dataset.text = 'Flaga...';
      myLanguage.textContent = '(Polaco)';
      flagImg.src = 'img/flag/polaco.png';
    break;
    // Chino
    case 17:
      myText.textContent = '旗帜...';
      myText.dataset.text = '旗帜...';
      myLanguage.textContent = '(Chino)';
      flagImg.src = 'img/flag/chino.png';
    break;
    // Ucraniano
    case 18:
      myText.textContent = 'Прапор...';
      myText.dataset.text = 'Прапор...';
      myLanguage.textContent = '(Ucraniano)';
      flagImg.src = 'img/flag/ucrania.png';
    break;
    // Sueco
    case 19:
      myText.textContent = 'Flagga...';
      myText.dataset.text = 'Flagga...';
      myLanguage.textContent = '(Sueco)';
      flagImg.src = 'img/flag/suiza.png';
    break;
    // Serbio
    case 20:
      myText.textContent = 'Застава...';
      myText.dataset.text = 'Застава...';
      myLanguage.textContent = '(Serbio)';
      flagImg.src = 'img/flag/serbia.png';
    break;
    // Rumano
    case 21:
      myText.textContent = 'Steag...';
      myText.dataset.text = 'Steag...';
      myLanguage.textContent = '(Rumano)';
      flagImg.src = 'img/flag/rumania.png';
    break;
    // Nepalí
    case 22:
      myText.textContent = 'झण्डा...';
      myText.dataset.text = 'झण्डा...';
      myLanguage.textContent = '(Nepalí)';
      flagImg.src = 'img/flag/nepali.png';
    break;
    // Vietnamita
    case 23:
      myText.textContent = 'Lá cờ...';
      myText.dataset.text = 'Lá cờ...';
      myLanguage.textContent = '(Vietnamita)';
      flagImg.src = 'img/flag/vietnam.png';
    break;
    // Estonio
    case 24:
      myText.textContent = 'Lipp...';
      myText.dataset.text = 'Lipp...';
      myLanguage.textContent = '(Estonio)';
      flagImg.src = 'img/flag/estonio.png';
    break;
    // Mongol
    case 25:
      myText.textContent = 'Туг...';
      myText.dataset.text = 'Туг...';
      myLanguage.textContent = '(Mongol)';
      flagImg.src = 'img/flag/mongolia.png';
    break;
    // Croata
    case 26:
      myText.textContent = 'Zastava...';
      myText.dataset.text = 'Zastava...';
      myLanguage.textContent = '(Croata)';
      flagImg.src = 'img/flag/croacia.png';
    break;
    // Volver al principio (Ingles)
    case 27:
      numClicks = 0;
      myText.textContent = 'Flag...';
      myText.dataset.text = 'Flag...';
      myLanguage.textContent = '(Inglés)';
      flagImg.src = 'img/flag/ingles.png';
    break;
  }
}


//-------------------- SOBRE MI --------------------//
const open = document.getElementById('open');
const modal_sobremi = document.getElementById('modal_sobremi');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_sobremi.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_sobremi.classList.remove('show');
});
