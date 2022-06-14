import axios from 'axios'
const URL = `https://swapi.dev/api/films/`

const state = {
    overview: []
};
const mutations = {
    setOverview: (state, data) => {
        state.overview = data
    },
    setOverviewDetail: (state, data) => {
        state.overview = data
    }
};
const actions = {
    getOverview(context) {
        return new Promise((resolve, reject) => {
            axios.get(URL).then((res) => {
                context.commit("setOverview", res.data.results)
                resolve(res.data.results)

            })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    },
    getOverviewDetail(context) {
        return new Promise((resolve, reject) => {
            axios.get(URL + '1').then((res) => {
                context.commit("setOverviewDetail", res.data.results)
                resolve(res.data.results)

            })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    },

};
const getters = {
    getOverviewList: state => state.overview
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}