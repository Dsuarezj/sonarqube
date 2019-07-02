# Configurar SonarQube

1. Tener una imagen de sonarqube levantada. Usar el siguiente comando 
    ```
    docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
    ```
    Revisar que este corriendo:[http://localhost:9000](http://localhost:9000)   
2. Usar sonar-scanner para generar el reporte de tu proyecto.

    **Ejemplo:**
    ```
    docker run --rm -v /Users/denisse/Documents/TW/Ejercicios/sonar-restify:/usr/src --link      sonarqube newtmitch/sonar-scanner \
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
