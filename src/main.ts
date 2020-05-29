import Vue from "vue";
import App from "./App.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faTimes, faAngleUp, faAngleDoubleUp, faChevronCircleUp, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash);
library.add(faTimes);
library.add(faAngleUp);
library.add(faAngleDoubleUp);
library.add(faChevronCircleUp);
library.add(faCheckSquare);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.use(require('vue-moment'));


export default new Vue({
   render: (h) => h(App)
}).$mount("#app");
