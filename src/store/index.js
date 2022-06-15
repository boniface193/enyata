import { createStore } from 'vuex'
import overview from "./modules/Overview";
import people from "./modules/Peolpe";
import species from "./modules/Species";
import starship from "./modules/Starship";

// initial state
const initialState = {
  overview: overview.state,
  people: people.state,
  species: species.state,
  starship: starship.state

}

//Convert object in string 
const COPY = JSON.stringify(initialState);

export default new createStore({
  modules: {
    overview,
    people,
    species,
    starship
  },

  mutations: {
    reset(state) {
      //Convert string in object 
      let copyState = JSON.parse(COPY);
      Object.keys(state).forEach(key => {
        Object.assign(state[key], copyState[key]);
      })
    }
  }
});