<template lang="html">
  <b-row class="question-row">
    <b-col v-if="!active" cols="12">
      <h4>Question</h4>
      <span class="prompt">Correctly complete the activity above to unlock this question.</span>
    </b-col>
    <b-col v-if="active" cols="12" md="9">
      <QuestionOpen v-on:valid-change="activateFeedback($event)" :active="active" :question="question.question"/>
    </b-col>
    <b-col v-if="active" cols="12" md="3">
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
  data() {
    return {
      feedbackActive: false
    }
  },
  components: {
    QuestionOpen,
    QuestionFeedback
  },
  methods: {
    activateFeedback(val) {
      this.feedbackActive = val
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../Variables.scss';

.question-row {
    min-height: 210px;

    h4 {
        font-size: 1.1em;
        margin-bottom: 14px;
    }

    .prompt {
        padding: 10px 15px;
        border-radius: $border-radius;
        min-height: 160px;
        display: inline-flex;
        align-items: center;
        width: 100%;
    }
}

.dark {
    .question-row {

        .prompt {
            background: $pane-dark-bg;
            border: 1px solid $pane-dark-border;
            color: lighten($blue-dark, 70%);
        }
    }
}

.light {
    .question-row {

        .prompt {
            background: $pane-light-bg;
            border: 1px solid $pane-light-border;
            color: lighten($text-color-light, 25%);
        }
    }
}
</style>
