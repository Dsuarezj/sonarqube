# Configurar SonarQube
1. Configurar variables de entorno:

    - En el servidor 
    
        `export SONAR_DB_PATH=<ruta-absoluta-db>`
        
        `export SONAR_DB_PASSWORD=<tu-clave-secreta>`
        
        `export SONAR_DB_USER=<tu-usuario>`
    
    - En el cliente
    
        `export PROJECT_PATH=<ruta-absoluta-tu-proyecto>`
        
        `export SONAR_URI=<url-puerto-de-sonarqube>`

1. Dar permisos de ejecución a los scripts:
    
    `chmod +x scripts/sonar-scanner.sh`
    `chmod +x scripts/sonar-server.sh`
    
1. Levantar el servidor de sonarqube:
    
    `npm run sonar-server`

1. Ejecutar escaneo de sonar:

    `npm run sonar-scanner`
