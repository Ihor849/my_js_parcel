function e(e){const{url:t,urlToImage:r,title:n,author:s,description:i}=e;e.map((e=>`\n    <li>\n    \t<a href= "${t}" target="_blank" rel="noopener noreferrer">\n\t\t\t\t<article>\n          <img src="${t}" alt="${n}" width="480" />\n          <h2>${n}</h2>\n          <p>Posted by: ${s}</p>\n          <p>${i}</p>\n        </article>\n      </a>\n    </li>\n    `))}const t={headers:{Authorization:"4330ebfabc654a6992c2aa792f3173a3"}};const r={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container")},n=new class{constructor({selector:e,hidden:t=!1}){this.refs=this.getRefs(e),t&&this.hide()}getRefs(e){const t={};return t.button=document.querySelector(e),t.label=t.button.querySelector(".label"),t.spinner=t.button.querySelector(".spinner"),t}enable(){this.refs.button.disabled=!1,this.refs.label.textContent="Показать ещё",this.refs.spinner.classList.add("is-hidden")}disable(){this.refs.button.disabled=!0,this.refs.label.textContent="Загружаем...",this.refs.spinner.classList.remove("is-hidden")}show(){this.refs.button.classList.remove("is-hidden")}hide(){this.refs.button.classList.add("is-hidden")}}({selector:'[data-action="load-more"]',hidden:!0}),s=new class{constructor(){this.searchQuery="",this.page=1}fetchArticles(){const e=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(e,t).then((e=>e.json())).then((({articles:e})=>(this.incrementPage(),e)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}};function i(){n.disable(),s.fetchArticles().then((t=>{!function(t){r.articlesContainer.insertAdjacentHTML("beforeend",e(t))}(t),n.enable()}))}r.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),s.query=e.currentTarget.elements.query.value,""===s.query)return alert("Введи что-то нормальное");n.show(),s.resetPage(),r.articlesContainer.innerHTML="",i()})),n.refs.button.addEventListener("click",i);
//# sourceMappingURL=index.8881be3b.js.map
