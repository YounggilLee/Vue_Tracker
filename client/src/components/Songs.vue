<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
     <panel title="Songs">

         <v-btn class="cyan accent-2"
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          light
          small
          absolute
          right
          middle
          fab>
      <v-icon>add</v-icon>
    </v-btn>

       <div v-for="song in songs" :key="song.id">
         {{ song.title }}
         {{ song.artist }}
         {{ song.album }}
       </div>
     </panel>
    </v-flex>
</v-layout>

</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data() {
    return {
      songs: null

    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  },
  async mounted() {
    this.songs = (await SongsService.index()).data
  }

}
</script>

