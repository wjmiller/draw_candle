<template lang="html">
  <b-container class="feedback">
    <b-row>
      <b-col>
        <b-button size="sm" :disabled="activeFeedback" @click="revealFeedback()">{{buttonTitle}}</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="feedback-display">
          <div class="feedback-message" v-if="revealed">
              {{feedback.correct}}
          </div>
          <div class="feedback-overlay" v-if="!revealed">
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

<style lang="scss" scoped>

@import '../Variables.scss';

.feedback-display {
  position: relative;
  margin: 20px 0;
  padding: 10px;
  border-radius: $border-radius;
  min-height: 70px;
}

.feedback-message, .feedback-overlay {
  font-size:  0.95em;
}

.dark {
  .feedback-display {
    background-color: $pane-dark-bg;
    border: 1px solid $pane-dark-border;
    color: $text-color-dark;
  }
}

.light {
  .feedback-display {
    background: $pane-light-bg;
    border: 1px solid $pane-light-border;
    color: $text-color-light;
  }
}

</style>
