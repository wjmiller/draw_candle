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

.response {
  width: 100%;
  height: 120px;
  padding: 10px 15px;
  border-radius: 8px;
}
.dark {
  .response {
    border-color: $controls-dark-border;
    background: $controls-dark-bg;
    color: #fff;

    &:focus, &:active {
      outline: 5px solid rgba(255,255,255,0.2);
    }
  }
}

.light {
  .response {
    border-color: $controls-light-border;
    background: $controls-light-bg;
    color: #333;
  }
}
</style>
