!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var u=r("6JpON");r("h6c0i");const i={formEl:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),button:document.querySelector('button[type="submit"]'),formInput:document.querySelectorAll('input[type="number"]')};for(let e=0;e<i.formInput.length;e+=1)i.formInput[e].classList.add("form-input");function l(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}function d(e){setTimeout((()=>{i.formEl.reset(),i.button.disabled=!1}),e)}i.button.classList.add("create-promises"),i.formEl.addEventListener("submit",(function(t){i.button.disabled=!0,t.preventDefault();let o=Number(i.delay.value);const n=Number(i.step.value),r=Number(i.amount.value),s=o+n*r;for(let t=1;t<=r;t+=1)l(t,o).then((({position:o,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n} ms`)})).catch((({position:o,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n} ms`)})),o+=n,d(s)}))}();
//# sourceMappingURL=03-promises.d37f146a.js.map
