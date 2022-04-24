const refs = {
    textInput: document.querySelector('#name-input'),
    textOutput: document.querySelector('#name-output'),
};

refs.textInput.addEventListener('input', onInputAdd);

function onInputAdd(event) {
    if (refs.textInput.value === "") {
   return refs.textOutput.textContent = "Anonymous";
 }
    refs.textOutput.textContent = event.currentTarget.value;
}

