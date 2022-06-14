var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  document.getElementById("status").innerHTML = "Connected";
  video_stream();
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

// NED Pose Subscriber
var ned_pose_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/vectornav/ins_2d/NED_pose',
  messageType : 'geometry_msgs/Pose2D'
});

ned_pose_listener.subscribe(function(pose) {
  document.getElementById("ned_pose.x").innerHTML = pose.x;
  document.getElementById("ned_pose.y").innerHTML = pose.y;
  document.getElementById("ned_pose.theta").innerHTML = pose.theta;
});

// INS Pose Subscriber
// var ins_pose_listener = new ROSLIB.Topic({
//   ros : ros,
//   name : '/vectornav/ins_2d/ins_pose',
//   messageType : 'geometry_msgs/Pose2D'
// });

// ins_pose_listener.subscribe(function(pose) {
//   document.getElementById("ins_pose.x").innerHTML = pose.x;
//   document.getElementById("ins_pose.y").innerHTML = pose.y;
//   document.getElementById("ins_pose.theta").innerHTML = pose.theta;
// });

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

// Waypoint subscriber
var waypoints = new ROSLIB.Topic({
  ros : ros,
  name : '/mission/waypoints',
  messageType : 'std_msgs/Float32MultiArray'
});

waypoints.subscribe(function(waypoint) {
  document.getElementById("waypoints").innerHTML = waypoint.data;
});

// Left thruster Subscriber
var left_thruster = new ROSLIB.Topic({
  ros : ros,
  name : '/usv_control/controller/left_thruster',
  messageType : 'std_msgs/Float64'
});

left_thruster.subscribe(function(msg) {
  document.getElementById("left_thrust").innerHTML = msg.data;
});

// Right thruster Subscriber
var right_thruster = new ROSLIB.Topic({
  ros : ros,
  name : '/usv_control/controller/right_thruster',
  messageType : 'std_msgs/Float64'
});

right_thruster.subscribe(function(msg) {
  document.getElementById("right_thrust").innerHTML = msg.data;
});

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