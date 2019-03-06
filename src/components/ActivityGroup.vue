<template lang="html">
  <div class="activity-group">
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
  created () {
    this.candlesCorrect = Array.from(this.activity.candles).fill(false);
  },
  methods: {
    checkCandles (val, ix) {
      this.candlesCorrect[ix] = val;
      if (this.candlesCorrect.every(item => item === true) && this.candlesCorrect.length === this.activity.candles.length) {
        this.openQuestion = true;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
