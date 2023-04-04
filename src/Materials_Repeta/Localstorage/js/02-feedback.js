import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/feedback-form.css';
// import '../../node_modules/parcel-bundler/src/builtins/css-loader.js';

const STORAGE_KEY = 'feedback-msg';
const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
  input: document.querySelector('.js-feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));
refs.form.addEventListener('input', throttle(onTextareaInput, 200));

populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
function onTextareaInput(evt) {
  // const input = refs.input.value;
  // const message = refs.textarea.value;

  formData[evt.target.name] = evt.target.value;

  // localStorage.setItem(STORAGE_KEY, JSON.stringify('message'));
  const inputValueString = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, inputValueString);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
  const savedMessageInput = localStorage.getItem(STORAGE_KEY);

  if (savedMessageInput) {
    const recoveryValue = JSON.parse(savedMessageInput);

    refs.input.value = recoveryValue.name;
    refs.textarea.value = recoveryValue.message;
  }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
