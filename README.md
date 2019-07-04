# Configurar SonarQube

#Pre-requisitos:
    - Docker >= 2.0.0.3
    - NPM >= 6.9.0

#Pasos:
1. Instalar librerias. `npm install`

1. Configurar variables de entorno:

    - En el servidor 
    
        `export SONAR_DB_PATH=<ruta-absoluta-db>`
        
        `export SONAR_DB_PASSWORD=<tu-clave-secreta>`
        
        `export SONAR_DB_USER=<tu-usuario>`
    
    - En el cliente

        `export PROJECT_PATH=<ruta-absoluta-tu-proyecto>`
        
        `export SONAR_URI=<url-puerto-de-sonarqube>`

        **Ejemplo:**

        `export SONAR_URI=http://10.71.20.19:9000`
    
1. Levantar el servidor de sonarqube:
    
    `npm run sonar-server`

1. Ejecutar escaneo de sonar:

    `npm run sonar-scanner`

## Troubleshooting

> En caso de tener un error al momento de ejecutar el script, verificar que tenga permisos de ejecución. Para dar permisos de ejecución a los scripts correr los siguientes comandos:

    `chmod +x scripts/sonar-scanner.sh`
    `chmod +x scripts/sonar-server.sh`

> Si tiene problemas al levantar la base de datos, se recomienda crear la carpeta por linea de comandos.

    `mkdir <path-deseado>/sonar-bd`
