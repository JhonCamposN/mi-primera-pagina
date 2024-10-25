// Agregar texto a la pantalla
function agregarTexto(valor) {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += valor;
  }
  
  // Borrar todo el contenido de la pantalla
  function borrarTodo() {
    document.getElementById('pantalla').value = '';
  }
  
  // Borrar el último carácter ingresado
  function borrarUltimo() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
  }
  
  // Calcular el resultado
  function calcularResultado() {
    const pantalla = document.getElementById('pantalla');
    try {
      pantalla.value = eval(pantalla.value);
    } catch {
      pantalla.value = 'Error';
    }
  }
  