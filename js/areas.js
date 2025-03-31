document.addEventListener("DOMContentLoaded", function () {
  // Array de objetos con los datos de los servicios
  const areas = [
    {
      nombre: "Área General",
      color: "item-cyan",
      icono: "bi-house-door", // Icono de casa para general
      descripcion: "Provident nihil minus qui consequatur non omnis maiores.",
      enlace: "/html/areas/areaGeneral.html",
    },
    {
      nombre: "Área Técnica",
      color: "item-red",
      icono: "bi-tools", // Icono de herramientas para técnica
      descripcion: "Expertos en soluciones adaptadas a tu empresa.",
      enlace: "/html/areas/areaTecnica.html",
    },
    {
      nombre: "Área Médica",
      color: "item-orange",
      icono: "bi-hospital", // Icono de hospital para área médica
      descripcion: "Creamos sitios web modernos y responsivos.",
      enlace: "/html/areas/areaMedica.html",
    },
    {
      nombre: "Área CAE",
      color: "item-teal",
      icono: "bi-journal-text", // Icono de documento para CAE (coordinación de actividades empresariales)
      descripcion: "Atención rápida y eficiente para tus sistemas.",
      enlace: "/html/areas/areaCAE.html",
    },
    {
      nombre: "Área de Formación",
      color: "item-cyan",
      icono: "bi-book", // Icono de libro para formación
      descripcion: "Provident nihil minus qui consequatur non omnis maiores.",
      enlace: "/html/areas/areaFormacion.html",
    },
    {
      nombre: "Área de Proyectos e Imputación de Horas",
      color: "item-red",
      icono: "bi-clock", // Icono de reloj para proyectos e imputación de horas
      descripcion: "Expertos en soluciones adaptadas a tu empresa.",
      enlace: "/html/areas/areaProyectosHoras.html",
    },
    {
      nombre: "Área Comercial",
      color: "item-orange",
      icono: "bi-cart", // Icono de carrito para área comercial
      descripcion: "Creamos sitios web modernos y responsivos.",
      enlace: "/html/areas/areaComercial.html",
    },
    {
      nombre: "Área Administrativa",
      color: "item-teal",
      icono: "bi-file-earmark", // Icono de archivo para área administrativa
      descripcion: "Atención rápida y eficiente para tus sistemas.",
      enlace: "/html/areas/areaAdministrativa.html",
    },
  ];

  // Obtener el contenedor donde se insertarán los servicios
  const servicesContainer = document.getElementById("services-container");

  // Generar dinámicamente el HTML
  areas.forEach((service) => {
    const serviceHTML = `
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="service-item ${service.color} position-relative">
                    <div class="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                d="M300,521.0016835830174C376.1290562159157,517.8887921683347,
                                466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787,
                                554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,
                                491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,
                                479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083,
                                348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,
                                193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,
                                98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273,
                                51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,
                                66.52175969318436,486.19268352777647,119.04800174914682,550.1803526380478,
                                217.28368757567262,524.383925680826,300,521.0016835830174">
                            </path>
                        </svg>
                        <i class="bi ${service.icono}"></i>
                    </div>
                    <a href="${service.enlace}" class="stretched-link">
                        <h3>${service.nombre}</h3>
                    </a>
                    <p>${service.descripcion}</p>
                </div>
            </div>
        `;
    // Insertar el HTML generado en el contenedor
    servicesContainer.innerHTML += serviceHTML;
  });
});
