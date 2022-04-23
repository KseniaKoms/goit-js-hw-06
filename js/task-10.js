function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  container: document.querySelector('#boxes'),
  input: document.querySelector('input'),
}

refs.createBtn.addEventListener('click', () => onBoxesCreate(refs.input.value));
refs.destroyBtn.addEventListener('click', onBoxesDestroy);

function onBoxesCreate(amount) {

  let boxes = [];
  let boxSize = 30;
  
  for (let i = 0; i < amount; i += 1) {
    boxes.push(`<div style="width:${boxSize}px; height:${boxSize}px; background-color:${getRandomHexColor()}"></div>`);
    boxSize += 10;
  }
   refs.container.insertAdjacentHTML("afterbegin", boxes.join(''));
}

function onBoxesDestroy() {
  refs.container.innerHTML = '';
}

