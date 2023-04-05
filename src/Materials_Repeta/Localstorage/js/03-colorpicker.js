import CardTp1 from '../templates-js/CardTp1';
import colors from './colors.json';
import '../css/common.css';
import '../css/colorpicker.css';

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  return colors.map(color => CardTp1(color)).join('');
}

paletteContainer.addEventListener('click', onPaletteContainerClick);

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }
  const swatchEl = evt.target;

  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();

  addActiveCardClass(parentColorCard);

  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}
