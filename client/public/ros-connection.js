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

const geodetic2cartesian = (lon, lat, lat_o) => {
  const r = 6371000; // Earth radius
  const x = r * lon * Math.cos(lat_o);
  const y = r * lat;
  return {x, y}
}

const cartesian2geodetic = (base_x, base_y, x, y, lat_o) => {
  // const base_x = -554285331.2453206;
  // const base_y = 163437862.368;
  // const lat_o = 25.653408;

  const r = 6371000; // Earth radius

  const lat = (base_y + y) / r
  const lon = (base_x + x) / (r*Math.cos(lat_o));
  return {lat, lon}
}

// tile layer
var tile = new ol.layer.Tile({
  source: new ol.source.OSM()
});

// vector layer
// const base_lon = -100.291116;
// const base_lat = 25.653408;
const base_lon = -100.2913605583;
const base_lat = 25.65334344373;
const cartesian_coords = geodetic2cartesian(base_lon, base_lat, base_lat);
const geodetic_coords = cartesian2geodetic(cartesian_coords.x, cartesian_coords.y, 25*60, 5*85, base_lat);
const coords = [base_lon, base_lat, 500, geodetic_coords.lon, geodetic_coords.lat, 500];
// const coords = [-100.2916,25.6532,141,-100.291116,25.6533005,126];

let path = [];
for(let i = 0; i < coords.length; i+=3) {
  path.push([coords[i], coords[i + 1], coords[i + 2]]);
}
const lineString = new ol.geom.LineString(path);
lineString.transform('EPSG:4326', 'EPSG:3857');
const feature = new ol.Feature({
  geometry: lineString
});
const source = new ol.source.Vector();
source.addFeature(feature);
var vector = new ol.layer.Vector({
  source,
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 3
    })
  })
})
var map = new ol.Map({
  layers: [
    tile,
    //image,
    vector
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([-100.2913, 25.65335]),
    zoom: 20
  })
});