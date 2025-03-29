document.addEventListener("DOMContentLoaded", function () {
  // Detectar todos los elementos con data-editable
  var editores = document.querySelectorAll("[data-editable]");

  editores.forEach(function (elemento) {
    var clave = elemento.getAttribute("data-key"); // Obtener clave única

    // Hacer editable con Quill para todos los elementos, excepto h3/p
    let editor;
    if (elemento.tagName === "H3" || elemento.tagName === "P") {
      elemento.setAttribute("contenteditable", "true");
    } else {
      editor = new Quill(elemento, { theme: "snow" });
    }

    // Cargar contenido desde la base de datos
    fetch(`/api/contenido/${clave}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          if (editor) {
            editor.root.innerHTML = data.contenido;
          } else {
            elemento.innerHTML = data.contenido;
          }
        }
      });

    // Agregar botón de guardar
    let botonGuardar = document.createElement("button");
    botonGuardar.textContent = "Guardar";
    botonGuardar.onclick = function () {
      let contenido = editor ? editor.root.innerHTML : elemento.innerHTML;

      fetch("/api/contenido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clave: clave,
          contenido: contenido,
          _token: document.querySelector('meta[name="csrf-token"]').content,
        }),
      })
        .then((response) => response.json())
        .then((data) => alert(data.mensaje));
    };

    // Insertar el botón después del elemento
    elemento.parentNode.insertBefore(botonGuardar, elemento.nextSibling);
  });

  // Función para agregar un nuevo texto editable
  function agregarNuevoTexto() {
    let nuevoID = "nuevo-" + Date.now(); // ID único basado en el tiempo

    let nuevoElemento = document.createElement("h3");
    nuevoElemento.setAttribute("data-editable", "");
    nuevoElemento.setAttribute("data-key", nuevoID);
    nuevoElemento.textContent = "Nuevo título editable";

    document.getElementById("contenedor").appendChild(nuevoElemento);

    // Activar la edición para el nuevo elemento
    iniciarEditor(nuevoElemento);
  }

  // Función para activar la edición y agregar el botón de guardado
  function iniciarEditor(elemento) {
    let clave = elemento.getAttribute("data-key");
    elemento.setAttribute("contenteditable", "true");

    // Crear el botón de guardar
    let botonGuardar = document.createElement("button");
    botonGuardar.textContent = "Guardar";
    botonGuardar.onclick = function () {
      fetch("/api/contenido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clave: clave,
          contenido: elemento.innerHTML,
          _token: document.querySelector('meta[name="csrf-token"]').content,
        }),
      })
        .then((response) => response.json())
        .then((data) => alert("Guardado con éxito"));
    };

    elemento.parentNode.insertBefore(botonGuardar, elemento.nextSibling);
  }

  // Función para eliminar un texto o h3
  function eliminarTexto(clave) {
    let elemento = document.querySelector(`[data-key='${clave}']`);
    if (elemento) {
      elemento.remove(); // Eliminar del DOM
    }

    // Eliminar de la base de datos
    fetch(`/api/contenido/${clave}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => alert("Eliminado de la base de datos"));
  }

  // Exponer la función agregarNuevoTexto globalmente si la necesitas
  window.agregarNuevoTexto = agregarNuevoTexto;
});
