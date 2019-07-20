import Vue from "vue";
import Vuex from "vuex";
import { getToken } from 'utils/auth'
import { login, logout, getInfo } from 'api/user'
import { setToken } from "./utils/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebar: {
            opened: false
        },
        token: getToken(),
        name: "",
        avator: '',

    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATOR: (state, avator) => {
            state.avator = avator;
        }
    },
    actions: {
        toggleSideBar({ commit }) {
            commit("TOGGLE_SIDEBAR");
        },

        // user login
        login({ commit }, userInfo) {
            const { email, password, code } = userInfo
            return new Promise((resolve, reject) => {
                login({ email: email.trim(), password: password, code: code }).then(res => {
                    if (res.data) {
                        const token = res.data.token;
                        setToken(res.data.token);
                        commit('SET_TOKEN', token)
                    }
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        getInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    const { data } = response
                    if (!data) {
                        reject('Verification filed , please login again.')
                    }
                    const { roles, name, avator, introduction } = data

                    if (!roles || roles.length <= 0) {
                        reject('getInfo: roles must be a non-null array!')
                    }

                    commit("SET_ROLES", roles)
                    commit("SET_NAME", name)
                    commit("SET_AVATOR", avator)
                    commit("SET_INTRODUCTION", introduction)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                        // removeToken()
                    resolve();
                }).catch(error => {
                    reject(error)
                })
            })
        },

        resetToken({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                commit("SET_ROLES", [])
                removeToken()
                resolve()
            })
        },

    }
});