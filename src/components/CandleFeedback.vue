<template lang="html">
  <div class="feedback">
    <b-button class="feedback-btn" size="sm" :disabled="!active" @click="revealFeedback()">{{buttonTitle}}</b-button>
    <div>
      <div class="feedback-display">
          <div class="feedback-message" v-if="revealed">
            <div class="feedback-correct" v-if="correct && revealed">
              Correct
            </div>
            <div class="feedback-incorrect" v-if="!correct && revealed">
              Incorrect
            </div>
            <div class="feedback-message">
              <div class="message-open" v-if="feedbackData.open !== 0">
                Adjust the opening price by ${{feedbackData.open}}
              </div>
              <div class="message-close" v-if="feedbackData.close !== 0">
                Adjust the closing price by ${{feedbackData.close}}
              </div>
              <div class="message-high" v-if="feedbackData.high !== 0">
                Adjust the high price by ${{feedbackData.high}}
              </div>
              <div class="message-low" v-if="feedbackData.low !== 0">
                Adjust the low price by ${{feedbackData.low}}
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CandleFeedback',
  props: {active: Boolean, feedbackData: Object, correct: Boolean, checked: Boolean},
  data () {
    return {
      revealed: false,
      buttonTitle: 'Check My Candlestick'
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

  .feedback-btn {
    margin-top: 25px;
    font-size: 0.95em;
    display: block;
    width: 100%;

    @media(min-width: 576px) {
      margin-top: 44px;
    }
  }
}

.feedback-display {
  position: relative;
  margin: 20px 0;
  padding: 10px;
  border-radius: $border-radius;
  min-height: 60px;

  @media(min-width: 768px) {
    min-height: 215px;
  }
}

.feedback-message {
  font-size:  0.95em;

  .feedback-correct {
    font-size:  1.2em;
    font-weight: 600;
    color: $green;
    margin-bottom: 5px;
  }

  .feedback-incorrect {
    font-size:  1.2em;
    font-weight: 600;
    color: $red;
    margin-bottom: 5px;
  }
}

.dark {
  .feedback-display {
    background-color: darken($pane-dark-bg, 2%);
    border: 1px solid darken($pane-dark-border, 2%);
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

.feedback-overlay.hidden {
  opacity: 0;
}
</style>
