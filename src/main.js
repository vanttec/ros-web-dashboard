import 'leaflet/dist/leaflet.css';

import Vue from 'vue'
// import App from './App.vue'
import App from './components/map.vue'
import { Icon } from 'leaflet';

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
