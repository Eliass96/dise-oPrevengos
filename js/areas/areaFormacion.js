document.addEventListener("DOMContentLoaded", function () {
  const subAreas = [
    {
      name: "CONFIGURACIÓN DE ACCIONES FORMATIVAS EN CUALQUIER MATERIA",
      color: "item-indigo",
      icon: "bi-gear",
      link: "/html/areas/subareas/formacion/configuracionAccionesFormativas.html",
    },
    {
      name: "FORMACIÓN PRESENCIAL",
      color: "item-teal",
      icon: "bi-person-bounding-box",
      link: "/html/areas/subareas/formacion/formacionPresencial.html",
    },
    {
      name: "FORMACIÓN ONLINE  - ACCESO WEB / WEB APP DEL TRABAJADOR",
      color: "item-orange",
      icon: "bi-laptop",
      link: "/html/areas/subareas/formacion/formacionOnlineAccesoWebApp.html",
    },
    {
      name: "FORMACIÓN ONLINE  - INTEGRACIÓN BIDIRECCIONAL CON MOODLE",
      color: "item-red",
      icon: "bi-cloud-arrow-down",
      link: "/html/areas/subareas/formacion/formacionOnlineMoodleIntegracion.html",
    },
    {
      name: "IMPORTACIÓN DE CERTIFICADOS DE FORMACIÓN EXTERNALIZADA",
      color: "item-pink",
      icon: "bi-file-earmark-check",
      link: "/html/areas/subareas/formacion/importacionCertificadosFormacionExternalizada.html",
    },
  ];

  const servicesContainer = document.getElementById("services-container");

  subAreas.forEach((service) => {
    const serviceHTML = `
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="subarea-item ${service.color} position-relative">
            <div class="icon">
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" stroke-width="0" fill="#f5f5f5" 
                  d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787,
                  554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,
                  479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083,348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,
                  193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273,
                  51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647,119.04800174914682,550.1803526380478,
                  217.28368757567262,524.383925680826,300,521.0016835830174">
                </path>
              </svg>
              <i class="bi ${service.icon}"></i>
            </div>
            <a href="${service.link}" class="stretched-link">
              <h3>${service.name}</h3>
            </a>
          </div>
        </div>
      `;

    // Asumiendo que tienes un contenedor con el id 'services-container' para insertar las tarjetas
    servicesContainer.innerHTML += serviceHTML;
  });
});
