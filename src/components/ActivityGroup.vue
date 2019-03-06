<template lang="html">
  <div class="activity-group">
    <h2>{{activity.id}}</h2>
    <CandleRow v-for="(candle, ix) in activity.candles" :candle="candle" :key="`${activity.id}-${ix}-candle`" v-on:candle-correct="checkCandles($event, ix)"/>
    <QuestionRow v-for="(question, ix) in activity.questions" :question="question" :key="`${activity.id}-${ix}-question`" :active="openQuestion"/>
  </div>
</template>

<script>
import CandleRow from './CandleRow'
import QuestionRow from './QuestionRow'

export default {
  name: 'ActivityGroup',
  props: ['activity'],
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
  methods: {
    checkCandles (val, ix) {
      this.candlesCorrect[ix] = val;
      if (this.candlesCorrect.every(item => item) && this.candlesCorrect.length === this.activity.candles.length) {
        this.openQuestion = true;
      }
    }
  }
}
</script>

<style lang="scss" group>
@import '../Variables.scss';

.activity-group {
  padding: 20px;
  border-radius: $border-radius;
  margin-bottom: 60px;
}

.dark {
  .activity-group {
    background: $group-dark-bg;
    border: 1px solid $group-dark-border;

    h2 {
      color: $text-color-dark;
    }
  }
}

.light {
  .activity-group {
    background: $group-light-bg;
    border: 1px solid $group-light-border;

    h2 {
      color: $text-color-light;
    }
  }
}
</style>
