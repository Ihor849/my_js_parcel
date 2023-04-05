export default function apartmentСard(countries) {
  const { name, capital, currency, language, population, flag, infected } =
    countries;

  let redP = '';
  if (infected) {
    redP = 'red';
  } else {
    redP = 'green';
  }
  console.log(infected);
  return `
    <li class="gallery__item">
    <div class="gallery__thumb">
      <img src=${flag} alt="Флаг ${name}" width="320">
    </div>
    <h2>${name}</h2>
    <p><b>Столица: ${capital}</b> </p>
    <p><b>Валюта:</b> ${currency}</p>
    <p><b>Официальный язык:</b> ${language}</p>
    <p><b>Население:</b> ${population} человек</p>
    <p style = "color: ${redP};">
    <b class = "colorB">Infected:</b> ${
      infected ? 'Все пропало' : 'Фух, пронесло'
    }</p>

  </li >`;
}
