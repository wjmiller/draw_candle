<template lang="html">
  <b-container class="feedback">
    <b-row>
      <b-col>
        <b-button size="sm" :disabled="!active" @click="revealFeedback()">{{buttonTitle}}</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
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
                Adjust the high price by ${{feedbackData.open}}
              </div>
              <div class="message-low" v-if="feedbackData.low !== 0">
                Adjust the low price by ${{feedbackData.low}}
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
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
  watch: {
    feedbackData () {
      this.revealed = false;
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
  opacity: 1;
  transition: opacity 0.5s;
}

.dark {
  .feedback-overlay {
    background-color: $blue-dark;
  }
}

.light {
  .feedback-overlay {
    background-color: #fff;
  }
}

.feedback-overlay.hidden {
  opacity: 0;
}
</style>
