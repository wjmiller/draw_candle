<template lang="html">
  <b-container class="feedback">
    <b-row>
      <b-col>
        <b-button class="feedback-btn" size="sm" :disabled="!active" @click="revealFeedback()">{{buttonTitle}}</b-button>
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
import fontAwesome from '../main.js'

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

.feedback {
  .feedback-btn {
    margin-top: 0px;

    @media(min-width: 576px) {
      margin-top: 20px;
    }
  }
}

.feedback-display {
  position: relative;
  margin: 20px 0;
  padding: 10px;
  border-radius: $border-radius;
  min-height: 200px;
}

.feedback-message {
  font-size:  0.95em;

  .feedback-correct {
    color: $green;
    margin-bottom: 5px;
  }

  .feedback-incorrect {
    color: $red;
    margin-bottom: 5px;
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

.feedback-overlay.hidden {
  opacity: 0;
}
</style>
