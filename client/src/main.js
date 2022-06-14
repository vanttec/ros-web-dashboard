import { createApp } from 'vue'
import App from './components/boat_info.vue'
createApp(App).mount('#boat');

import { createApp } from 'vue'
// import App from './app/components/map.vue'
import App from './mapApp.vue'

// import { Icon } from 'leaflet';
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

Vue.config.productionTip = false

// createApp(App).$mount('#app')

const app = createApp(App);
app.use(OpenLayersMap)

app.mount('#app')


// delete Icon.Default.prototype._getIconUrl;

// Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });
