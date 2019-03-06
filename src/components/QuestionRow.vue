<template lang="html">
  <b-row class="question-row">
    <b-col v-if="!active">Correctly construct the candlesticks in this group before answering this question.</b-col>
    <b-col v-if="active" cols="9">
      <QuestionOpen v-on:valid-change="activateFeedback($event)" :active="active" :question="question.question"/>
    </b-col>
    <b-col v-if="active" cols="3">
      <QuestionFeedback :active="feedbackActive" :feedback="question.feedback"/>
    </b-col>
  </b-row>
</template>

<script>
import QuestionOpen from './QuestionOpen'
import QuestionFeedback from './QuestionFeedback'


export default {
  name: 'QuestionRow',
  props: ['question', 'active'],
  data () {
    return {
      feedbackActive: false
    }
  },
  components: {
    QuestionOpen,
    QuestionFeedback
  },
  methods: {
    activateFeedback (val) {
      this.feedbackActive = val
    }
  }

}
</script>

<style lang="scss">
  .question-row {
    min-height: 200px;
  }
</style>
