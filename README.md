# Configurar SonarQube
1. Levantar base de datos
    ```
    docker run -d --rm --name sonar-db \
        -v /Users/denisse/Documents/TW/Ejercicios/sonar-restify/bd:/var/lib/postgresql/data \
        -p 5432:5432 \
        -e POSTGRES_PASSWORD=sonar \
        -e POSTGRES_USER=sonar \
        -e POSTGRES_DB=sonar \
        -e PGDATA=/var/lib/postgresql/data \
        postgres
    ```
    
1. Levantar sonarqube usando la base de datos anterior. Usar el siguiente comando: 
    ```
    docker run -d --rm --name sonarqube \
        -p 9000:9000 -p 9092:9092 \
        -e SONARQUBE_JDBC_USERNAME=sonar \
        -e SONARQUBE_JDBC_PASSWORD=sonar \
        -e SONARQUBE_JDBC_URL=jdbc:postgresql://sonar-db:5432/sonar \
        --link sonar-db \
        sonarqube
    ```
    Revisar que este corriendo:[http://localhost:9000](http://localhost:9000)   
1. Usar sonar-scanner para generar el reporte de tu proyecto.

    **Ejemplo usando el archivo sonar-project.properties**
    
    ```
    docker run -d --rm -v $(pwd):/usr/src --link sonarqube newtmitch/sonar-scanner
    ```
    
    **Ejemplo sin usar las configuraciones:**
    ```
    docker run -d --rm -v /Users/denisse/Documents/TW/Ejercicios/sonar-restify:/usr/src \ 
    --link sonarqube newtmitch/sonar-scanner \
    -Dsonar.projectKey=sonar-restify1 \
    -Dsonar.projectName="Sonar Restify1" \
    -Dsonar.sources=/usr/src/src \
    -Dsonar.tests=/usr/src/test  \
    -Dsonar.projectVesion=1.0.0 \
    -Dsonar.sourceEncoding=UTF-8 \
    -Dsonar.language=js \
    -Dsonar.javascript.file.suffixes=.js \
    -Dsonar.cpd.js.minimumTokens=10 \
    -Dsonar.cpd.js.minimumLines=2  \
    -Dsonar.scm.enabled=true \
    -Dsonar.scm.provider=git \
    -Dsonar.javascript.lcov.reportPaths=/usr/src/coverage/lcov.info \
    -Dsonar.eslint.reportPaths=/usr/src/report.json
    ```
