document.addEventListener("DOMContentLoaded", function() {
  var ejercicios = document.querySelectorAll('.ejercicio');

  ejercicios.forEach(function(ejercicio) {
      var opciones = ejercicio.querySelectorAll('input[type="radio"]');
      
      opciones.forEach(function(opcion) {
          opcion.addEventListener('change', function() {
              var respuestaCorrecta = ejercicio.querySelector('input[value="lime"]');
              
              if (opcion === respuestaCorrecta) {
                  ejercicio.classList.remove('incorrecto');
                  ejercicio.classList.add('correcto');
              } else {
                  ejercicio.classList.remove('correcto');
                  ejercicio.classList.add('incorrecto');
              }
          });
      });
  });
});