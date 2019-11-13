import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
// configure Vue to use Vuex module
Vue.use(Vuex);

import { ITaskState, taskModule } from './task';

const defaultState: IRootState = { };
export interface IRootState {
    tasks?: ITaskState;
}

// configure vuex store
const storeOptions: StoreOptions<any> = {
    state: {
        ...defaultState,
    },
    modules: {
        tasks: taskModule,
    }
};

const store = new Vuex.Store<IRootState>(storeOptions);

// export vuex singleton store
export default store;