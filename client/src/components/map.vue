<template>
    <l-map style="height: 350px; width: 500px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution" :options="{ maxZoom: 19 }"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
    <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>
  </l-map>
</template>

<script>
import {LMap, LTileLayer, LMarker, LPolyline} from 'vue2-leaflet';

export default {
  name: 'App',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline
  },
  data () {
    return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 19,
        //   Alberca Tec>
        center: [25.653408, -100.291116],
        markerLatLng: [25.653408, -100.291116],
        polyline: {
            latlngs: [[25.653380, -100.291116], [25.6533005, -100.291116], [25.6533005, -100.29160], [25.653380, -100.29160], [25.653380, -100.291216]],
            color: 'red'
        }
    
    //   Tec>
    //   center: [25.650637, -100.289426],
    //   markerLatLng: [25.650637, -100.289426]
    };
  }
}
</script>
