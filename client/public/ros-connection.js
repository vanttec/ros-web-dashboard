var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  document.getElementById("status").innerHTML = "Connected";
  setCamera();
});

ros.on('error', function(error) {
  document.getElementById("status").innerHTML = "Error";
});

ros.on('close', function() {
  document.getElementById("status").innerHTML = "Closed";
});

// String Subscriber
var txt_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/String',
  messageType : 'std_msgs/String'
});

txt_listener.subscribe(function(m) {
  document.getElementById("msg").innerHTML = m.data;
});

// Pose2D Subscriber
var pose_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/vectornav/ins_2d/NED_pose',
  messageType : 'geometry_msgs/Pose2D'
});

pose_listener.subscribe(function(pose) {
  document.getElementById("pose.x").innerHTML = pose.x;
  document.getElementById("pose.y").innerHTML = pose.y;
  document.getElementById("pose.theta").innerHTML = pose.theta;
});

// Velocity Subscriber
var vel_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/vectornav/ins_2d/local_vel',
  messageType : 'geometry_msgs/Vector3'
});

vel_listener.subscribe(function(vel) {
  document.getElementById("u").innerHTML = vel.x;
  document.getElementById("v").innerHTML = vel.y;
  document.getElementById("r").innerHTML = vel.z;
});

// Camera Subscriber
// var imageTopic = new ROSLIB.Topic({
//   ros : ros,
//   name : '/zed/zed_node/left_raw/image_raw_color',
//   messageType : 'sensor_msgs/Image'
// });

function video_stream() {
  // let without_wss = this.rosbridge_address.split('ws://')[1]
  // console.log(without_wss)
  // let domain = without_wss.split('/')[0] + '/' + without_wss.split('/')[1]
  // console.log(domain)
  // let host = domain + '/cameras'
  console.log('localhost');
  let viewer = new MJPEGCANVAS.Viewer({
      divID: 'robot_camera',
      // host: host,
      host: 'localhost',
      width: 320,
      height: 240,
      topic: '/r200/camera/color/image_raw',
      ssl: true,
  })
}