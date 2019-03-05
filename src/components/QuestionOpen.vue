<template lang="html">
  <b-row class="question-open">
    <b-col md="4">{{instruction}}</b-col>
    <b-col md="8">
      <textarea class="response" type="text" @keyup="isValid" v-model="response"></textarea>
      <span>{{response.length}}</span>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "QuestionOpen",
  props: ["active"],
  data () {
    return {
      valid: false,
      minimumChar: 100,
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

<style lang="css" scoped>
.response {
  width: 100%;
  height: 200px;
}
</style>
