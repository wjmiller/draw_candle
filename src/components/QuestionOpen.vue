<template lang="html">
  <div class="question-open row">
    <div class="col-md-4">{{question}}</div>
    <div class="col-md-8">
      <textarea class="response" type="text" v-on:keyup="isValid" v-model="response"></textarea>
      <div>Sufficiently Intelligible
        <span class="intelligible-marker">
          <img v-if="valid" class="animate-zoom" src="../assets/images/icons/checkmark_green.svg"/>
          <img v-else class="animate-zoom" src="../assets/images/icons/cross_red.svg"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import stringSim from 'string-similarity'

export default {
  name: "question-open",
  props: ["active", "question", "comparison"],
  data () {
    return {
      valid: false,
      minimumDiff: 0.3,
      difference: 0.0,
      instruction: 'Question goes here',
      response: ''
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
      this.$emit('valid-change', this.valid);
    }
  },
  computed: {
    displayDifference () {return `${Math.round(this.difference * 100)}%`}
  }
}
</script>

<style lang="scss" scoped>
@import '../Variables.scss';

.question-open {
    > div:first-child {
        //font-size: 1.05em;
    }
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

.dark {

    .question-open {
        color: $dark-text-color;
    }

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

.light {

    .question-open {
        color: $light-text-color;
    }

    .response {
        border-color: $light-pane-border;
        background: $light-pane-bg;
        color: #333;
    }
}
</style>
