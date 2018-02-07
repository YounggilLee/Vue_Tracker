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
       @click="navigateTo({name: 'login'})">
        Log in
      </v-btn>

      <!-- <router-link to="register"></router-link> -->
      <v-btn flat dark
       @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
    </v-toobar-items>

  </v-toolbar>
</template>

<script>

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
