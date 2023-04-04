// import colorCardTpl from '../templates/color-card.hbs';
// import colorCardsTpl from '../templates/color-cards.hbs';
// import colors from './colors.json';
// import '../css/common.css';
// import '../css/colorpicker.css';

// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);
// console.log(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
// console.log(colors.map(color => colorCardTpl(color)).join(''));

// return colors.map(color => colorCardTpl(color)).join('');

// return colors.map(colorCardTpl).join('');
// return colorCardsTpl(colors);
// }

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//   if (!isColorSwatchEl) {
//     return;
//   }
//   const swatchEl = evt.target;
//   // console.log(swatchEl);
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass();

//   addActiveCardClass(parentColorCard);

//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');
//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }
