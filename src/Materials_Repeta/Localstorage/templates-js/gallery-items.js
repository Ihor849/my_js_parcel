// {{#each this}}
//   <li class="gallery__item">
//     <div class="gallery__thumb">
//       <img src="{{flag}}" alt="Флаг {{name}}" width="320">
//     </div>
//     <h2>{{name}}</h2>
//     <p><b>Столица: {{capital}}</b> </p>
//     <p><b>Валюта:</b> {{currency}}</p>
//     <p><b>Официальный язык:</b> {{language}}</p>
//     <p><b>Население:</b> {{population}} человек</p>

//     {{#if infected}}
//       <p style="color: red;">Всё пропало!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
//     {{/if}}

//     {{#unless infected}}
//       <p style="color: green;">Фух, пронесло</p>
//     {{/unless}}
//   </li>
// {{/each}}
