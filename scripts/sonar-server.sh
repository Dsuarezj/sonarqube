#!/usr/bin/env bash

docker kill sonar-db sonarqube

docker run -d --rm --name sonar-db \
        -v ${SONAR_DB_PATH}:/var/lib/postgresql/data \
        -p 5432:5432 \
        -e POSTGRES_PASSWORD=${SONAR_DB_PASSWORD} \
        -e POSTGRES_USER=${SONAR_DB_USER} \
        -e POSTGRES_DB=sonar \
        -e PGDATA=/var/lib/postgresql/data \
        postgres

sleep 10

docker run -d --rm --name sonarqube \
        -p 9000:9000 -p 9092:9092 \
        -e SONARQUBE_JDBC_USERNAME=${SONAR_DB_USER} \
        -e SONARQUBE_JDBC_PASSWORD=${SONAR_DB_PASSWORD} \
        -e SONARQUBE_JDBC_URL=jdbc:postgresql://sonar-db:5432/sonar \
        --link sonar-db \
        sonarqube


