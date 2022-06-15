import axios from 'axios'
const URL = `https://swapi.dev/api/species/`

const state = {
    species: []
};
const mutations = {
    setSpecies: (state, data) => {
        state.species = data
    },
    setSpeciesDetail: (state, data) => {
        state.species = data
    }
};
const actions = {
    getSpecies(context) {
        return new Promise((resolve, reject) => {
            axios.get(URL).then((res) => {
                context.commit("setSpecies", res.data.results)
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
                context.commit("setSpeciesDetail", res.data.results)
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
    getSpeciesList: state => state.species
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}