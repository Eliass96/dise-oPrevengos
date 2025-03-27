document.addEventListener("DOMContentLoaded", function () {
  async function loadComponent(id, url) {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`No se encontró el elemento con id: ${id}`);
      return;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error al cargar ${url}`);
      const text = await response.text();
      element.innerHTML = text;
    } catch (error) {
      console.error(error);
    }
  }

  loadComponent("nav-placeholder", "/html/header.html");
  loadComponent("footer-placeholder", "/html/footer.html");
});
