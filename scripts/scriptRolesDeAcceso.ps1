$rootDir = "D:/Work/Design/prevengos"
$sourcePath

$roles = @(
    @{
        name         = "APLICATIVO CENTRAL DE ESCRITORIO"
        description  = "Software de escritorio que centraliza la gestión de datos, procesos y operaciones en un entorno seguro y optimizado."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/rolesAcceso/aplicativoCentralEscritorio.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "WEB APP DEL TÉCNICO O ENCARGADO"
        description  = "Plataforma web que permite a los técnicos gestionar tareas, reportes y mantenimiento en tiempo real desde cualquier dispositivo."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/rolesAcceso/webAppTecnicoEncargado.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "WEB DEL RESPONSABLE DE EMPRESA"
        description  = "Portal web diseñado para los responsables de empresa, facilitando la supervisión de procesos, cumplimiento y rendimiento organizacional."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/rolesAcceso/webResponsableEmpresa.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "WEB DEL RESPONSABLE DE CENTRO"
        description  = "Aplicación en línea para la gestión centralizada de un centro específico, con herramientas de monitoreo y control."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/rolesAcceso/webResponsableCentro.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "WEB DEL TRABAJADOR EN PARTICULAR"
        description  = "Interfaz web personalizada para que cada trabajador acceda a su información, documentación y gestiones laborales."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/rolesAcceso/webTrabajadorParticular.html"
        createAnclas = $true  # Campo booleano
    },
    @{
        name         = "WEB DEL CONTRATISTA O PROVEEDOR CAE"
        description  = "Plataforma en línea para contratistas y proveedores, permitiendo la gestión documental y operativa de cumplimiento CAE."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/rolesAcceso/webContratistaProveedorCAE.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "WEB DEL RESPONSABLE DE CONTROL DE ACCESO CAE"
        description  = "Sistema web para gestionar y supervisar el acceso de contratistas y empleados a instalaciones según normativas CAE."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/rolesAcceso/webResponsableControlAccesoCAE.html"
        createAnclas = $true  # Campo booleano
    }        
)

foreach ($rol in $roles) {
    $destinationPath = $rol.link

    if (-not (Test-Path $destinationPath)) {
        $name = $rol.name
        $title = "Prevengos - " + $name.Substring(0, 1).ToUpper() + $name.Substring(1).ToLower()

        # Si createAnclas es true, agregar el apartado de las anclas al lateral
        if ($rol.createAnclas -eq $true) {
            $sourcePath = $rootDir + "/html/templates/template.html"
        }
        else {
            $sourcePath = $rootDir + "/html/templates/templateWithSidebarHidden.html"
        }

        # Copiar el archivo original
        Copy-Item $sourcePath $destinationPath -Force

        # Esperar un momento para asegurar que el archivo esté disponible
        Start-Sleep -Milliseconds 500

        # Leer el contenido del archivo copiado
        $htmlContent = Get-Content -Path $destinationPath -Raw

        # Reemplazar el título en la etiqueta <title>
        $htmlContent = $htmlContent -replace '<title>.*?</title>', "<title>$title</title>"

        # Reemplazar el texto dentro del <h1> en la sección Page Title
        $htmlContent = $htmlContent -replace '(<h1[^>]*?>)\s*[^<]+(\s*</h1>)', "`$1$name`$2"

        # Reemplazar la imagen estática con la imagen del rol
        $htmlContent = $htmlContent -replace '<img src="/assets/img/services.jpg"[^>]*>', "<img src='$($rol.image)' alt='' class='img-fluid services-img' />"

        # Guardar el archivo modificado
        $htmlContent | Set-Content -Path $destinationPath -Encoding UTF8 -Force

        Write-Host "Archivo creado y modificado en: $destinationPath"
    }
    else {
        Write-Host "El archivo ya existe en: $destinationPath"
    }
}