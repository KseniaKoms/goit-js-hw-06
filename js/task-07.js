const refs = {
    input: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
};

refs.input.addEventListener('input', onTextFontSizeChange);

function onTextFontSizeChange() {
    
    refs.text.style.fontSize = refs.input.value + 'px';
}