import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', {
    state: () => {
        return { login: null, isAuthenticated: false }
    },
    actions: {
        setAuthentication(login, isAuthenticated) {
            this.login = login
            this.isAuthenticated = isAuthenticated
        },
    },
    getters: {
    }
})