#!/usr/bin/env bash

cd $PROJECT_PATH
npm run coverage
sed -i .bak 's/:.*\/src/:\/usr\/src\/src/g' $PROJECT_PATH/coverage/lcov.info
docker run -d --rm -v ${PROJECT_PATH}:/usr/src --link sonarqube newtmitch/sonar-scanner
