$rootDir = "D:/Work/Diseño/diseño"
$sourcePath

$herramientas = @(
    @{
        name         = "FIRMA DIGITAL DE DOCUMENTOS CON VALIDEZ LEGAL"
        description  = "Permite firmar documentos electrónicamente con validez legal."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/firmaDigital.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "INTEGRACIÓN VÍA API CON SISTEMAS DE GESTIÓN Y DE RRHH"
        description  = "Facilita la integración de datos entre sistemas de gestión y recursos humanos mediante API."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/integracionAPI.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "TABLAS MAESTRAS DE LA BASE DE DATOS CONFIGURABLES"
        description  = "Permite configurar y gestionar tablas maestras en la base de datos."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/configuracionTablasMaestras.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "IMPORTACIONES Y EXPORTACIONES MASIVAS DE DATOS"
        description  = "Posibilita la importación y exportación masiva de datos."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/importacionesExportacionesMasivas.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "BIBLIOTECA PERSONALIZABLE DE PLANTILLAS DE INFORMES MS WORD"
        description  = "Ofrece una biblioteca personalizable para gestionar plantillas de informes en MS Word."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/bibliotecaPlantillasInformes.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "GENERACIÓN DE INFORMES EN FORMATO MS WORD, EXCEL Y POWER BI"
        description  = "Genera informes de manera eficiente en formatos MS Word, Excel y Power BI."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/generacionInformes.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "ENVÍOS DE EMAIL PUNTUALES O MASIVOS"
        description  = "Permite realizar envíos de emails tanto puntuales como masivos de manera eficiente."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/enviosEmail.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "ENVÍOS DE SMS PUNTUALES O MASIVOS"
        description  = "Facilita el envío de SMS, ya sea de manera puntual o masiva."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/enviosSMS.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "PUBLICACIÓN WEB DE DOCUMENTOS PUNTUALES O MASIVOS"
        description  = "Permite la publicación web de documentos de forma puntual o masiva."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/publicacionWebDocumentos.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "NOTIFICACIONES DESATENDIDAS VÍA EMAIL O SMS"
        description  = "Envía notificaciones desatendidas a través de email o SMS."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/notificacionesDesatendidas.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "CONSULTAS, LISTADOS, ESTADÍSTICOS Y CUADROS DE MANDO"
        description  = "Permite realizar consultas, generar listados, estadísticas y cuadros de mando para análisis de datos."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/consultasListadosEstadisticosCuadrosMando.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "CUADROS DE ALERTAS GENERALES Y PERSONALES"
        description  = "Genera cuadros de alertas tanto generales como personales para la gestión de riesgos."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/cuadrosAlertas.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "MEMORIA Y CONTROL DE PRODUCTIVIDAD POR TÉCNICO"
        description  = "Realiza el control de productividad de cada técnico mediante informes detallados."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/memoriaControlProductividad.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "MEMORIAS GLOBALES, POR EMPRESA Y POR TRABAJADOR"
        description  = "Genera memorias globales o específicas por empresa y trabajador."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/memorias.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "MEMORIAS ORDEN TIN 2504/2010 – EXPORTACIÓN A SERPA"
        description  = "Permite la exportación de memorias en formato orden TIN 2504/2010 a SERPA."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/herramientas/memoriasOrdenTIN25042010.html"
        createAnclas = $false  # Campo booleano
    }
)

foreach ($herramienta in $herramientas) {
    $destinationPath = $herramienta.link
    $name = $herramienta.name
    $title = "Prevengos - " + $name.Substring(0, 1).ToUpper() + $name.Substring(1).ToLower()

    # Si createAnclas es true, agregar el apartado de las anclas al lateral
    if ($herramienta.createAnclas -eq $true) {
        $sourcePath = "D:/Work/Diseño/diseño/html/templates/template.html"
    }
    else {
        $sourcePath = "D:/Work/Diseño/diseño/html/templates/templateWithSidebarHidden.html"
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

    # Reemplazar la imagen estática con la imagen de la herramienta
    $htmlContent = $htmlContent -replace '<img src="/assets/img/services.jpg"[^>]*>', "<img src='$($herramienta.image)' alt='' class='img-fluid services-img' />"

    # Guardar el archivo modificado
    $htmlContent | Set-Content -Path $destinationPath -Encoding UTF8 -Force

    Write-Host "Archivo creado y modificado en: $destinationPath"
}