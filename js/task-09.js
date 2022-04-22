function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  colorNumber: document.querySelector('.color'), 
};

refs.btn.addEventListener('click', onBodyColorChange);

function onBodyColorChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorNumber.textContent = getRandomHexColor();
}