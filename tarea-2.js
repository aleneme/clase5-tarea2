//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const botonEnviar = document.querySelector("button");

botonEnviar.onclick = function () {

  const nombreUsuario = document.querySelector("#nombre").value;
  const segundoNombre = document.querySelector("#segundo-nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const edad = document.querySelector("#edad").value;
  const inputTusDatos = document.querySelector("#tus-datos");
  const mensajeBienvenida = document.querySelector("h1");
  const tituloIngresarDatos = document.querySelector("h2");

  if (!nombreUsuario === "" || segundoNombre === "" || apellido === "" || edad === "") {
    tituloIngresarDatos.innerText = "Por favor, completá todos los campos.";
  } else {
  inputTusDatos.value = `${nombreUsuario} ${segundoNombre} ${apellido}. Edad: ${edad}.`;
  mensajeBienvenida.innerText = `¡Bienvenido ${nombreUsuario}!`;
  tituloIngresarDatos.innerText = "Gracias por completar tus datos.";
}

  return false;
};


