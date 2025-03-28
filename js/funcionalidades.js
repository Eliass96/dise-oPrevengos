document.addEventListener("DOMContentLoaded", function () {
    const iconBoxData = [
        {
            title: "HERRAMIENTAS TRANSVERSALES",
            icon: "bi-tools",
            description: "Conjunto de aplicaciones y funcionalidades integradas que optimizan la gestión y productividad en distintos procesos de la organización.",
            link: "herramientas.html"
        },
        {
            title: "MECANISMOS DE AUTENTICACIÓN",
            icon: "bi-shield-lock",
            description: "Sistemas avanzados de verificación de identidad que garantizan un acceso seguro y protegen la información confidencial.",
            link: "mecanismosAutenticacion.html"
        },
        {
            title: "ROLES DE ACCESO AL SISTEMA",
            icon: "bi-person-badge",
            description: "Asignación de permisos y niveles de acceso para garantizar la seguridad y control en el uso de los sistemas.",
            link: "roles.html"
        }
    ];

    const iconBoxContainer = document.getElementById("icon-box-container");

    iconBoxData.forEach((item, index) => {
        const iconBox = document.createElement("div");
        iconBox.classList.add("col-lg-4");

        iconBox.innerHTML = `
            <div class="icon-box" data-aos="zoom-out" data-aos-delay="${(index + 1) * 100}">
                <div class="icon"><i class="bi ${item.icon}"></i></div>
                <h4 class="title"><a href="${item.link}">${item.title}</a></h4>
                <p class="description">${item.description}</p>
            </div>
        `;

        iconBoxContainer.appendChild(iconBox);
    });
});
