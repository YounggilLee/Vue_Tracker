<template>
  <panel title="Song Metadata">
            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                    {{ song.title }}
                </div>
                <div class="song-artist">
                    {{ song.artist }}
                </div>
                <div class="song-genre">
                    {{ song.genre }}
                </div>

                <v-btn class="cyan" dark

                  :to="{
                    name:'song-edit',
                    params () {
                      return{
                         songId: song.id
                      }

                    }
                  }"> Edit </v-btn>

                  <v-btn class="cyan" dark
                  v-if="isUserLoggedIn && !bookmark"
                  @click="setAsBookmark"
                  > Set As Bookmark </v-btn>

                  <v-btn class="cyan" dark
                  v-if="isUserLoggedIn && bookmark"
                  @click="unsetAsBookmark"
                  > Unset As Bookmark </v-btn>

              </v-flex>

              <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl"/>
                <br/>
                {{song.album}}
              </v-flex>

            </v-layout>
       </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data() {
      return{
        bookmark: null
      }
  },
  async mounted() {
    if(!this.isUserLoggedIn) {
      return
    }

    try{
     this.bookmark = (await BookmarksService.index({
      songId: this.song.id,
      userId: this.$store.state.user.id
    })).data
    }catch (err) {
      console.log(err)
    }
  },
  computed: {
      ...mapState([
        'isUserLoggedIn'
      ])
  },
  methods: {
    async setAsBookmark() {
      try{
          this.bookmark = (await BookmarksService.post({
              songId: this.song.id,
              userId: this.$store.state.user.id
            })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark() {
      try{
          await BookmarksService.delete(this.bookmark.id)
          this.bookmark
      } catch (err) {
        console.log(err)
      }


    }
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

