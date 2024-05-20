import {defineStore} from "pinia";

interface IMainStore {
    isReady: boolean;
}

const defaultState: IMainStore = {
    isReady: false
}

export const useMainStore = defineStore('mainStore',  {
    state: (): IMainStore => defaultState,
    actions: {
        changeIsReady(data: boolean): void  {
            this.isReady = data
        }
    }
})