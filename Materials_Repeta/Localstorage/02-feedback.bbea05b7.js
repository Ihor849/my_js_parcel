function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var r,o,i,f,u,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(S,t),l?y(e):f}function x(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=i}function S(){var e=p();if(x(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-a);return s?m(n,i-(e-c)):n}(e))}function T(e){return u=void 0,g&&r?y(e):(r=o=void 0,f)}function h(){var e=p(),n=x(e);if(r=arguments,o=this,a=e,n){if(void 0===u)return j(a);if(s)return u=setTimeout(S,t),y(a)}return void 0===u&&(u=setTimeout(S,t)),f}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=o=u=void 0},h.flush=function(){return void 0===u?f:T(p())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={},j={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form  textarea"),input:document.querySelector(".js-feedback-form input")};j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Отправляем форму"),e.currentTarget.reset(),localStorage.removeItem("feedback-msg")})),j.form.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value;const t=JSON.stringify(y);localStorage.setItem("feedback-msg",t)}),200)),function(){const e=localStorage.getItem("feedback-msg");if(e){const t=JSON.parse(e);j.input.value=t.name,j.textarea.value=t.message}}();
//# sourceMappingURL=02-feedback.bbea05b7.js.map
