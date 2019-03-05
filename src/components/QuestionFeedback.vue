<template lang="html">
  <b-container class="feedback">
    <b-row>
      <b-col>
        <b-button variant="primary" :disabled="activeFeedback" @click="revealFeedback()">{{buttonTitle}}</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="feedback-display">
          <div class="feedback-message">
              {{message}}
          </div>
          <div class="feedback-overlay" v-bind:class="{hidden: revealed}">
            {{inactiveMessage}}
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'QuestionFeedback',
  props: {active: Boolean, feedback: Object},
  data () {
    return {
      revealed: false,
      message: 'this is a test',
      inactiveMessage: 'this is not yet active',
      buttonTitle: 'Compare My Response'
    }
  },
  computed: {
    activeFeedback () {
      return !this.active;
    }
  },
  methods: {
    revealFeedback () {
      if (this.active) {
        this.revealed = true;
      }
    }
  }
}
</script>

<style lang="css" scoped>

.feedback-display {
  min-height: 200px;
  position: relative;
}

.feedback-message, .feedback-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}

.feedback-overlay {
  background-color: rgb(26, 28, 45);
  opacity: 1;
  transition: opacity 0.5s;
}

.feedback-overlay.hidden {
  opacity: 0;
}
</style>
