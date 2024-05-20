const radios = document.querySelectorAll('input[type="radio"]');
const divEj39 = document.querySelector('.ej39');

radios.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      divEj39.style.backgroundColor = this.value;
    }
  });
});
const divEj40 = document.querySelector('.ej40');

radios.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      divEj40.style.backgroundColor = this.value;
    }
  });
});