import axios from 'axios'
 
export const state = () => ({
    movies: []
  })
 
  export const getters = {
    getMovies(state) {
      return state.movies
    },
  }
 
  export const mutations = {
    setMovies(state, payload) {
      state.movies.push(...payload)
    },
  }
 
  export const actions = {
    async fetchMovies({commit}) {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing',
        {
          params: {
            api_key: '37ed43a4f8eaa2abd75f9283692947bc',
          },
        }
        );
        console.log(response);
 
        const topRatedMovies = response.data.results || [];
        commit('setMovies', topRatedMovies);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    },
  }
