import Vue from "vue";
import App from "./App.vue";
import store from './store/store'
// import '.plugins/veutify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faArrowAltCircleUp, faArrowCircleDown, faCheck, faTimes, faAngleUp, faAngleDoubleUp, faChevronCircleUp, faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret);
library.add(faArrowCircleUp);
library.add(faArrowCircleDown);
library.add(faCheck);
library.add(faTimes);
library.add(faAngleUp);
library.add(faAngleDoubleUp);
library.add(faChevronCircleUp);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false

import DataService from "./dataservice/dataService";
export const dataService = new DataService();

new Vue({
   store,
   render: (h) => h(App)
}).$mount("#app");
