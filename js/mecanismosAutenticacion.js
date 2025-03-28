document.addEventListener("DOMContentLoaded", function () {
  const functionalities = [
    {
      name: "SISTEMA PROPIO DE CUENTAS DE ACCESO",
      description:
        "Permite gestionar y controlar las cuentas de usuario de forma interna, asegurando un acceso seguro y personalizado a los sistemas.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/mecanismosAutenticacion/sistemaPropioCuentasAcceso.html",
    },
    {
      name: "DOBLE FACTOR VÍA EMAIL, SMS O APP AUTHENTICATOR",
      description:
        "Ofrece una capa adicional de seguridad mediante la autenticación de dos factores, utilizando email, SMS o aplicaciones autenticadoras para verificar la identidad del usuario.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/mecanismosAutenticacion/dobleFactor.html",
    },
    {
      name: "INTEGRACIÓN CON SSO - SAML Y OAUTH",
      description:
        "Facilita el inicio de sesión único (SSO) integrando protocolos como SAML y OAuth, permitiendo a los usuarios acceder a múltiples aplicaciones con una sola autenticación.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/mecanismosAutenticacion/integracionSSO.html",
    },
    {
      name: "INTEGRACIÓN CON DIRECTORIOS LDAP",
      description:
        "Permite la autenticación y gestión centralizada de usuarios mediante la integración con directorios LDAP, optimizando el acceso a los recursos de la organización.",
      image: "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg",
      link: "/html/funcionalidades/mecanismosAutenticacion/integracionDirectoriosLDAP.html",
    },
  ];

  const container = document.querySelector(".row.g-4");
  functionalities.forEach((functionality) => {
    const item = document.createElement("div");
    item.classList.add("col-md-4", "col-sm-3", "wow", "fadeInUp");
    item.setAttribute("data-wow-delay", "0.4s");

    // Truncar la descripción a 8 palabras
    const truncatedDescription = functionality.description
      .split(" ")
      .slice(0, 8)
      .join(" ");

    let descriptionText = truncatedDescription;
    let showMoreLink = `<a href="${functionality.link}">Ver más...</a>`;

    if (functionality.description.split(" ").length > 8) {
      descriptionText += "...";
    }

    item.innerHTML = `
        <div class="herramienta-item">
          <div class="herramienta-img">
            <img src="${functionality.image}" class="img-fluid rounded-top w-100" alt="Image" />
          </div>
          <div class="rounded-bottom p-4">
            <a href="${functionality.link}" class="h4 d-inline-block mb-4">${functionality.name}</a>
            <p>${descriptionText} ${showMoreLink}</p>
          </div>
        </div>
      `;

    container.appendChild(item);
  });
});
