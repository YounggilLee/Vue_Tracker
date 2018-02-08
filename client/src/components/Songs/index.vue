<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <songs-search-panel/>
      <songs-panel/>
    </v-flex>
</v-layout>

</template>
<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'

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

    SongsPanel,
    SongsSearchPanel
  },
  async mounted() {
    this.songs = (await SongsService.index()).data
  }

}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist{
   font-size: 20px;
}

.song-genre {
   font-size: 20px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>


