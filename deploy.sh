#! /bin/sh
set -x

sudo kill $(forever list | awk -F ' ' '{print $6}')
sudo mv /opt/mount1/pipeline_test/ /opt/backup/pipeline_test-`date +%d_%m_%y_%H_%M_%S`
sudo cp -pr /var/lib/jenkins/workspace/pipeline_test /opt/mount1/
cd /opt/mount1/pipeline_test//
sudo /opt/node-1.8.12/node-v8.12.0-linux-x64/bin/node /opt/node-1.8.12/node-v8.12.0-linux-x64/bin/forever -l /opt/logs/nodetest-`date +%d_%m_%y_%H_%M_%S`.log start index.js &
