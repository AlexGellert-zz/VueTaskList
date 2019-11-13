export * from './module';

import { getStoreAccessors } from 'vuex-typescript';

import { ITaskState, taskModule } from './module';
import store, { IRootState } from '../store';


// read = getter, commit = mutation, dispatch = action
const { read, commit, dispatch } = getStoreAccessors<ITaskState, any>('grids');

// getters
// export const getDates = () => read<Date[]>(taskModule.getters.getDates)(store);
export const getItems = () => read<any[]>(taskModule.getters.getItems)(store);


// mutations
// export const setDates = (newDates: Date[]) =>
//     commit<Date[]>(taskModule.mutations.setDates)(store, newDates);
export const setItems = (newItems: any[]) => commit<any[]>(taskModule.mutations.setItems)(store, newItems);
