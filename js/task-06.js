const inputRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('blur', onInputValueCheck);

console.log(inputRef.value.length)

function onInputValueCheck() {
    inputRef.value.length === 6
        ? inputRef.classList.add('valid') & inputRef.classList.remove('invalid')
        : inputRef.classList.add('invalid') & inputRef.classList.remove('valid');
       
}


