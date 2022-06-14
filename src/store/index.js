import { createStore } from 'vuex'
import overview from "./modules/Overview";

// initial state
const initialState = {
  overview: overview.state,

}

//Convert object in string 
const COPY = JSON.stringify(initialState);

export default new createStore({
  modules: {
    overview
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