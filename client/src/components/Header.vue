<template>
  <v-toolbar fixed class="green lighten-1" dark>

    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name : 'root'})">Tracker</span>

    </v-toolbar-title>

    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toobar-items>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
       @click="navigateTo({name: 'login'})">
        Log In
      </v-btn>

      <!-- <router-link to="register"></router-link> -->
      <v-btn flat dark
       v-if="!$store.state.isUserLoggedIn"
       @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>

      <v-btn flat dark
       v-if="$store.state.isUserLoggedIn"
       @click="logout">
        Log Out
      </v-btn>
    </v-toobar-items>

  </v-toolbar>
</template>

<script>

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)

      this.$router.push({
        name: 'root'
      })
    }
  }

}
</script>


<style scoped>
 .home {
   cursor: pointer;
 }

 .home:hover {
   color: pink;
 }

</style>
