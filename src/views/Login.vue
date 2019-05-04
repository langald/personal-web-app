<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
    <br>
    <label>
      Login
      <input type="text" v-model="email" required />
    </label>
    <br>
    <label>
      Password
      <input type="password" v-model="password" required />
    </label>
    <br>
    <button type="submit" :disabled="getLoading">Submit</button>
    <br>
    <br>
    <div v-if="getError">{{ getError }}</div>
    </form>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import { mapGetters, mapActions } from 'vuex'
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters('auth', ['getToken', 'getTokenType', 'getExpiredDays', 'getLoading', 'getError'])
  },
  methods: {
    ...mapActions('auth', ['login']),
    async onSubmit() {

      await this.login({
        email: this.email,
        password: this.password
      })

      //console.log('--------')

      if (!this.getError) {
        
        Cookie.set('token', this.getToken, {
          expires: this.getExpiredDays
        })
        Cookie.set('tokenType', this.getTokenType, {
          expires: this.getExpiredDays
        })

        this.$router.push({name: 'secretpage3'})
      }
    },
    
  }
}
</script>