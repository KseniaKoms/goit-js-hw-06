const refs = {
    textInput: document.querySelector('#name-input'),
    textOutput: document.querySelector('#name-output'),
};

refs.textInput.addEventListener('input', onInputAdd);

function onInputAdd(event) {
    console.log(event)
    refs.textOutput.textContent = event.currentTarget.value;
}

