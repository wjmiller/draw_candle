<template lang="html">
  <div class="feedback">
    <b-button variant="primary" :disabled="activeFeedback" @click="revealFeedback()">{{buttonTitle}}</b-button>
    <div class="feedback-display">
      <div class="feedback-message" v-if="revealed">
          {{feedback.correct}}
      </div>
      <div class="feedback-overlay" v-if="!revealed">
        {{inactiveMessage}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-feedback',
  props: {active: Boolean, feedback: Object},
  data () {
    return {
      revealed: false,
      message: 'this is a test',
      inactiveMessage: 'You must write a sufficiently intelligible response in order to compare responses.',
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

.feedback {
    margin-top: 25px;

    button {
        font-size: 0.95em;
        display: block;
        width: 100%;
    }

    .feedback-display {
        position: relative;
        margin: 20px 0;
        padding: 10px;
        border-radius: $border-radius;
        min-height: 120px;
    }

    .feedback-message,
    .feedback-overlay {
        font-size: 0.95em;
    }

    @media(min-width: 576px) {
        margin-top: 0;

    }
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
