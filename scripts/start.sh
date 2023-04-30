# start.sh

#!/bin/bash

APP_NAME="fe-user-staged"

pm2 kill ${APP_NAME}

pm2 serve ./ 1008 --spa --name ${APP_NAME}