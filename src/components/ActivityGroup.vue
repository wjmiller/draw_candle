<template lang="html">
  <div class="activity-group">
    <h2>{{activity.title}}</h2>
    <p>{{activity.questions[0].instruction}}</p>
    <candle-row
      v-for="(candle, ix) in activity.candles"
      :key="`${activity.id}-${ix}-candle`"
      :theme="theme"
      :candle="candle"
      v-on:candle-correct="updateCandlesCorrect($event, ix)"
    />
    <question-row
      v-for="(question, ix) in activity.questions"
      :key="`${activity.id}-${ix}-question`"
      :question="question"
      :active="openQuestion"
      v-on:valid-change="isActivityDone()"
    />
  </div>
</template>

<script>
import CandleRow from './CandleRow'
import QuestionRow from './QuestionRow'
import {Activity} from '../mixins/Activity.js'

export default {
  name: 'activity-group',
  mixins: [Activity],
  props: ['activity', 'theme'],
  data () {
    return {
      candlesCorrect: [],
      openQuestion: false
    }
  },
  components: {
    CandleRow,
    QuestionRow
  },
  created () {
    this.candlesCorrect = Array.from(this.activity.candles).fill(false);
  },
  methods: {
    isActivityDone () {
      //console.log(this);
      this.checkCandles();
      if (this.openQuestion) {
        this.completed = true;
      }
    },
    checkCandles () {
      if (this.candlesCorrect.every(item => item === true) && this.candlesCorrect.length === this.activity.candles.length) {
        this.openQuestion = true;
      }
    },
    updateCandlesCorrect (val, ix) {
      this.candlesCorrect[ix] = val;
      this.checkCandles()
    }
  }
}
</script>

<style lang="scss" group>
@import '../Variables.scss';

.activity-group {
  padding: 25px 30px;
  border-radius: $border-radius;
  margin-bottom: 60px;

  > p {
    margin-bottom: 35px;
    font-style: italic;
  }
}

.dark {
  .activity-group {
    background: $group-dark-bg;
    border: 1px solid $group-dark-border;
    color: $text-color-dark;

    h2 {
      color: $header-color-dark;
    }

    p {
      color: $text-color-dark;
    }
  }
}

.light {
  .activity-group {
    background: $group-light-bg;
    border: 1px solid $group-light-border;
    color: $text-color-light;

    p {
      color: lighten($text-color-light, 25%);
    }
  }
}
</style>
