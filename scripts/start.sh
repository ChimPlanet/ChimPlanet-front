# start.sh

#!/bin/bash

APP_NAME="fe-user-staged"

sudo pm2 stop ${APP_NAME}

sudo pm2 serve ./ --spa --name ${APP_NAME} --port 1008