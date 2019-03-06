<template lang="html">
  <b-row class="question-row">
    <b-col v-if="!active">Correctly construct the candlesticks in this group before answering this question.</b-col>
    <b-col v-if="active" cols="9">
      <QuestionOpen v-on:valid-change="activateFeedback($event)" :active="active"/>
    </b-col>
    <b-col v-if="active" cols="3">
      <QuestionFeedback :active="feedbackActive"/>
    </b-col>
  </b-row>
</template>

<script>
import QuestionOpen from './QuestionOpen'
import QuestionFeedback from './QuestionFeedback'


export default {
  name: 'QuestionRow',
  data () {
    return {
      active: true,
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
