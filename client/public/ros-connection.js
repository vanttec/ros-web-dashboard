var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  document.getElementById("status").innerHTML = "Connected";
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

//Pos Subscriber TESTING 
var pos_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/Imu',
  messageType : 'sensor_msgs/Imu'
});

pos_listener.subscribe(function(p) {
  document.getElementById("pos").innerHTML = p.data;
});