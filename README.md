# web-dashboard

### Project setup (inside client and server folders)
```
npm install
```

### Install ROS in a supported system

### Install ROS packages (tested in ROS Melodic)
```
sudo apt-get install ros-<distro>-rosbridge-server
```
```
sudo apt-get install ros-<distro>-web-video-server
```

### Project startup (client folder)
```
npm run dev
```
```
npm run webpack
```
### Project startup (server folder)
```
npm run dev
```
### Run in different terminals
```
roslaunch rosbridge_server rosbridge_websocket.launch 
```
```
rosrun web_video_server web_video_server 
```
Run your ROS application

![Alt text](/docs/webpagev1.PNG?raw=true)