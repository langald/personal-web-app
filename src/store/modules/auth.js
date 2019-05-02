import ApiService  from '@/common/api.service'
import axios from 'axios'
import moment from 'moment'

export default {
  namespaced: true,
  state: {
    token: '',
    tokenType: '',
    expiredDays: '',
    loading: false,
    error: ''
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getTokenType(state) {
      return state.tokenType
    },
    getExpiredDays(state) {
      return state.expiredDays
    },
    getLoading(state) {
      return state.loading
    },
    getError(state) {
      return state.error
    },
   
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setTokenType(state, payload) {
      state.tokenType = payload
    },
    setExpiredDays(state, payload) {
      state.expiredDays = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
   
  },
  actions: {
    login(store, payload) {
      store.commit('setError', '')
      store.commit('setLoading', true)
      let url = 'http://test-laravel-app.test/api/user/login';
      //let url = 'https://pixy.kz/api/user/login';


      return ApiService.post(url, payload)
        .then((response) => {
          //console.log(response.data)
          let expiredDate = moment(response.data.data.expires_at.slice(0, 10), 'YYYY-MM-DD')
          let expiredDays = expiredDate.diff(moment(), 'days')

          store.commit('setToken', response.data.data.access_token)
          store.commit('setTokenType', response.data.data.token_type)
          store.commit('setExpiredDays', expiredDays)
          axios.defaults.headers.common['Authorization'] = response.data.data.token_type  + ' ' + response.data.data.access_token;

          store.commit('setLoading', false)
        })
        .catch(e => {
          //console.log(e.message)
          store.commit('setError', e.message)
          store.commit('setLoading', false)
        })

      
     
    },
    
  }
}