import '../css/common.css';
import '../css/gallery.css';
import countries from './countries.json';
import apartmentСard from '../templates-js/apartmentCard';

const galleryRef = document.querySelector('.js-gallery');

const markup = itemsTemplate(countries);
console.log(countries);
galleryRef.insertAdjacentHTML('beforeend', markup);

function itemsTemplate(countries) {
  return countries.map(countrie => apartmentСard(countrie)).join(' ');
}
