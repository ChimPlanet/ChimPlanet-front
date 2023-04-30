# start.sh

#!/bin/bash

APP_NAME="fe-user-staged"

projectPath=$(pwd)

sudo pm2 stop ${APP_NAME}

sudo pm2 serve ${projectPath} --spa --name ${APP_NAME} --port 1008
