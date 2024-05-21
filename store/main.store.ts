import { defineStore } from "pinia";
import type { UserInterface } from "~/types/User.interface";

interface IMainStore {
    isReady: boolean;
    users: {[id: number]: UserInterface};
}

const defaultState: IMainStore = {
    isReady: false,
    users: {},
};

export const useStore = defineStore('useStore',  {

    state: (): IMainStore => defaultState,
    actions: {
        saveUser(user: UserInterface): void  {
            let u = {...this.users}

            if (u[user.id]) {
                delete u[user.id];
            } else {
                u[user.id] = user;
            }

            this.users = u;
        },
    },


    persist:  {
        storage: persistedState.localStorage,
    }

});


