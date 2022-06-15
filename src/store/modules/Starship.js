import axios from 'axios'
const URL = `https://swapi.dev/api/starships/`

const state = {
    starship: []
};
const mutations = {
    setStarship: (state, data) => {
        state.starship = data
    },
    setStarshipDetail: (state, data) => {
        state.starship = data
    }
};
const actions = {
    getStarship(context) {
        return new Promise((resolve, reject) => {
            axios.get(URL).then((res) => {
                context.commit("setStarship", res.data.results)
                resolve(res.data.results)

            })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    },
    getStarshipDetail(context) {
        return new Promise((resolve, reject) => {
            axios.get(URL + '1').then((res) => {
                context.commit("setStarshipDetail", res.data.results)
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