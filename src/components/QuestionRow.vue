<template lang="html">
  <b-row class="question-row">
    <b-col v-if="!active" cols="12">
      <h4>Question</h4>
      <span class="prompt">Correctly construct the candlesticks in this group before answering this question.</span>
    </b-col>
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

  @import '../Variables.scss';

  .question-row {
    padding-top: 15px;

    h4 {
      margin-bottom: 14px;
    }

    .prompt{
      display: block;
      padding: 10px 15px;
      border-radius: 8px;
    }
  }

  .dark {
    .question-row {
      border-top: 1px solid $pane-dark-border;

      .prompt {
        background: $pane-dark-bg;
        border: 1px solid $pane-dark-border;
        color: #fff;
      }
    }
  }

  .light {
    .question-row {
      border-top: 1px solid #ddd;

      .prompt {
        background: $pane-light-bg;
        border: 1px solid $pane-light-border;
        color: #333;
      }
    }
  }
</style>
