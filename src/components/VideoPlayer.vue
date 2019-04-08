<template lang="html">
  <div class="embed-responsive embed-responsive-16by9">
    <video ref="video" controls
      :poster="poster"
      v-on:loadedmetadata="setDuration"
      v-on:ended.once="completeActivity"
      v-on:timeupdate="updateProgress"
    >
      <source :src="source" type="video/mp4">
    </video>
    <div>{{percentComplete}}%</div>
  </div>
</template>

<script>
import { Activity } from '../mixins/Activity.js'

export default {
  name: 'video-player',
  mixins: [Activity],
  props: ['source', 'poster'],
  data () {
    return {
      duration: 0,
      timeCompleted: 0
    }
  },
  methods: {
    setDuration () {
      this.duration = this.$refs.video.duration
    },
    completeActivity () {
      this.correct = true
      this.makeAttempt()
    },
    updateProgress () {
      this.timeCompleted = this.$refs.video.currentTime
    }
  },
  computed: {
    percentComplete () {
      return Math.min(100, Math.max(0, Math.floor(this.timeCompleted/this.duration * 100)))
    }
  },
}
</script>

<style lang="scss">
  video {
      width: 100%;
  }
</style>
