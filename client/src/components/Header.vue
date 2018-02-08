<template>
  <v-toolbar fixed class="green lighten-1" dark>

    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
       :to="{name : 'root'}">Tracker
        </router-link>

    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark
        :to="{name: 'songs'}">
        BROWSE
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toobar-items>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
       :to="{name: 'login'}">
        Log In
      </v-btn>

      <!-- <router-link to="register"></router-link> -->
      <v-btn flat dark
       v-if="!$store.state.isUserLoggedIn"
        :to="{name: 'register'}">
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
