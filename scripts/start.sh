# start.sh

#!/bin/bash

APP_NAME="fe-user-staged"

sudo pm2 stop ${APP_NAME}

sudo pm2 serve /home/chimplanet/fe-user-staged --spa --name ${APP_NAME} --port 1008
