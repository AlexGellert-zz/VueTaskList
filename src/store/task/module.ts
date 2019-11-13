export interface ITaskState {
    items: any[]
}

const defaultState: ITaskState = {
    items: []
};

// configure grid module
export const taskModule = {
    namespaced: true,
    state: { ...defaultState },
    getters: {
        // getDates: (state: IGridState): Date[] => {
        //     console.log("Store module: getDates");
        //     return state.dates;
        // },
        getItems: (state: ITaskState): any[] => {
            return state.items;
        }

    },
    mutations: {
        // setDates: (state: ITaskState, newDates: Date[]) => {
        //     console.log("Store module: setDates ");
        //     state.dates = newDates;
        // },
        setItems: (state: ITaskState, newItems: any[]) => {
            state.items = newItems;
        }
    }
};