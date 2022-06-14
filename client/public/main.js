import { createApp } from 'vue'
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
// import App from './components/boat_info.vue'
// createApp(App).mount('#boat');

// import App from './app/components/map.vue'
import App from '../src/components/openlayers3.vue'

const app = createApp(App);
app.use(OpenLayersMap)
app.mount('#map')

// createApp(App).$mount('#app')

// delete Icon.Default.prototype._getIconUrl;

// Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });
