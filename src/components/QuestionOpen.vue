<template lang="html">
  <b-row class="question-open">
    <b-col md="4">{{question}}</b-col>
    <b-col md="8">
      <textarea class="response" type="text" @keyup="isValid" v-model="response"></textarea>
      <span>{{response.length}}</span>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "QuestionOpen",
  props: ["active", "question"],
  data () {
    return {
      valid: false,
      minimumChar: 50,
      instruction: 'Question goes here',
      response: ''
    }
  },
  methods: {
    isValid () {
      const curValid = this.valid;
      this.valid = this.response.length >= this.minimumChar
      if (curValid !== this.valid) this.validChange()
    },
    validChange () {
      this.$emit('valid-change', this.valid);
    }
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
.dark {

  .question-open {
    color: $text-color-dark;
  }

  .response {
    border-color: $pane-dark-border;
    background: $pane-dark-bg;
    color: $text-color-dark;


    &:focus, &:active {
      outline: 5px solid rgba(255,255,255,0.2);
    }
  }
}

.light {

  .question-open {
    color: $text-color-light;
  }

  .response {
    border-color: $pane-light-border;
    background: $pane-light-bg;
    color: #333;
  }
}
</style>
