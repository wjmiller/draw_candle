<template lang="html">
  <div class="question-open row">
    <div class="col-md-4">{{question}}</div>
    <div class="col-md-8">
      <textarea
        class="response"
        type="text"
        v-on:keyup="isValid"
        v-model="response"
      ></textarea>
      <div>Sufficiently Intelligible
        <span class="intelligible-marker">
          <img v-if="valid" class="animate-zoom" src="../assets/images/icons/checkmark_green.svg"/>
          <img v-else class="animate-zoom" src="../assets/images/icons/cross_red.svg"/>
        </span>
      </div>
      <div>
        <button
          class="btn btn-primary btn-save-response m-1"
          type="button"
          v-bind:disabled="!valid"
          v-on:click="saveResponse"
        >Save My Response</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Activity } from '../mixins/Activity.js'
import stringSim from 'string-similarity'

export default {
  name: "question-open",
  mixins: [Activity],
  props: ["question", "comparison"],
  data() {
    return {
      valid: false,
      minimumDiff: 0.3,
      difference: 0.0,
      instruction: 'Question goes here',
      response: '',
      activityDescription: 'open-ended question',
      attemptDataKeysLocal: ['response','difference','minimumDiff']
    }
  },
  methods: {
    isValid() {
      const curValid = this.valid;
      this.difference = stringSim.compareTwoStrings(this.response, this.comparison);
      this.valid = this.difference >= this.minimumDiff;
      //this.valid = this.response.length >= this.minimumChar
      if (curValid !== this.valid) this.validChange()
    },
    validChange() {
      this.$emit('question-open-valid', this.valid);
    },
    saveResponse () {
      this.correct = true
      //the activity must be saved in order to have an attempt made
      this.makeAttempt()
    }
  },
  computed: {
    displayDifference() {
      return `${Math.round(this.difference * 100)}%`
    }
  },
  created() {
    //if the response is valid then it is correct
    this.addCorrectTest(act => act.valid)
  }
}
</script>

<style lang="scss" scoped>
//------------------------------------------------------
// Import Variables
//------------------------------------------------------

@import '../Variables.scss';

//------------------------------------------------------
// Question Open
//------------------------------------------------------

.question-open {
    > div:first-child {
        //font-size: 1.05em;
    }

    button {
        font-size: 0.95em;
        display: block;
        width: 100%;
    }

    .response {
        width: 100%;
        height: 150px;
        padding: 10px 15px;
        border-radius: 8px;
    }

    .intelligible-marker img {
        height: 16px;
    }
}

// Dark/Light Theme Styles -----------------------------

.dark {

    .question-open {
        color: $dark-text-color;

        .response {
            border-color: $dark-pane-border;
            background: $dark-pane-bg;
            color: $dark-text-color;

            &:active,
            &:focus {
                outline: 5px solid rgba(255,255,255,0.2);
            }
        }
    }
}

.light {

    .question-open {
        color: $light-text-color;

        .response {
            border-color: $light-pane-border;
            background: $light-pane-bg;
            color: #333;
        }
    }
}
</style>
