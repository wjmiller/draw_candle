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
import {
  Activity
} from '../mixins/Activity.js'

export default {
  name: 'activity-group',
  mixins: [Activity],
  props: ['activity', 'theme'],
  data() {
    return {
      candlesCorrect: [],
      openQuestion: false
    }
  },
  components: {
    CandleRow,
    QuestionRow
  },
  created() {
    this.candlesCorrect = Array.from(this.activity.candles).fill(false);
  },
  methods: {
    isActivityDone() {
      //console.log(this);
      this.checkCandles();
      if (this.openQuestion) {
        this.completed = true;
      }
    },
    checkCandles() {
      if (this.candlesCorrect.every(item => item === true) && this.candlesCorrect.length === this.activity.candles.length) {
        this.openQuestion = true;
      }
    },
    updateCandlesCorrect(val, ix) {
      this.candlesCorrect[ix] = val;
      this.checkCandles()
    }
  }
}
</script>

<style lang="scss">
@import '../Variables.scss';

.activity-group {
    border-radius: $border-radius;
    margin-bottom: 100px;

    > p {
        font-size: 1em;
        margin-bottom: 35px;
        font-style: italic;
    }
}

.dark {
    .activity-group {
        background: $dark-group-bg;
        color: $dark-text-color;

        h2 {
            color: $dark-header-color;
        }

        p {
            color: $dark-text-color;
        }
    }
}

.light {
    .activity-group {
        background: $light-group-bg;
        //border: 1px solid $light-group-border;
        color: $light-text-color;

        p {
            color: $light-text-color;
        }
    }
}
</style>
