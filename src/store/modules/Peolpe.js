import axios from 'axios'
const URL = `https://swapi.dev/api/people/`

const state = {
    people: []
};
const mutations = {
    setPeople: (state, data) => {
        state.people = data
    },
    setPeopleDetail: (state, data) => {
        state.people = data
    }
};
const actions = {
    getPeople(context) {
        return new Promise((resolve, reject) => {
            axios.get(URL).then((res) => {
                context.commit("setPeople", res.data.results)
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
                context.commit("setPeopleDetail", res.data.results)
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