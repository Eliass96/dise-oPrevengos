$rootDir = "D:/Work/Diseño/diseño"
$sourcePath

$mecanismos = @(
    @{
        name         = "SISTEMA PROPIO DE CUENTAS DE ACCESO"
        description  = "Permite gestionar y controlar las cuentas de usuario de forma interna, asegurando un acceso seguro y personalizado a los sistemas."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/mecanismosAutenticacion/sistemaPropioCuentasAcceso.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "DOBLE FACTOR VÍA EMAIL, SMS O APP AUTHENTICATOR"
        description  = "Ofrece una capa adicional de seguridad mediante la autenticación de dos factores, utilizando email, SMS o aplicaciones autenticadoras para verificar la identidad del usuario."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/mecanismosAutenticacion/dobleFactor.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "INTEGRACIÓN CON SSO - SAML Y OAUTH"
        description  = "Facilita el inicio de sesión único (SSO) integrando protocolos como SAML y OAuth, permitiendo a los usuarios acceder a múltiples aplicaciones con una sola autenticación."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/mecanismosAutenticacion/integracionSSO.html"
        createAnclas = $false  # Campo booleano
    },
    @{
        name         = "INTEGRACIÓN CON DIRECTORIOS LDAP"
        description  = "Permite la autenticación y gestión centralizada de usuarios mediante la integración con directorios LDAP, optimizando el acceso a los recursos de la organización."
        image        = "/assets/img/Advantages-of-Cloud-Computing-5-Benefits.jpg"
        link         = $rootDir + "/html/funcionalidades/mecanismosAutenticacion/integracionDirectoriosLDAP.html"
        createAnclas = $false  # Campo booleano
    }
)

foreach ($mecanismo in $mecanismos) {
    $destinationPath = $mecanismo.link
    $name = $mecanismo.name
    $title = "Prevengos - " + $name.Substring(0, 1).ToUpper() + $name.Substring(1).ToLower()

    # Si createAnclas es true, agregar el apartado de las anclas al lateral
    if ($mecanismo.createAnclas -eq $true) {
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

    # Reemplazar la imagen estática con la imagen del mecanismo
    $htmlContent = $htmlContent -replace '<img src="/assets/img/services.jpg"[^>]*>', "<img src='$($mecanismo.image)' alt='' class='img-fluid services-img' />"

    # Guardar el archivo modificado
    $htmlContent | Set-Content -Path $destinationPath -Encoding UTF8 -Force

    Write-Host "Archivo creado y modificado en: $destinationPath"
}