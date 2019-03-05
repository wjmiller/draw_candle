<template lang="html">
  <div class="activity-group">
    <CandleRow v-for="(candle, ix) in activity.candles" :candle="candle" :key="`${activity.id}-${ix}`"/>
    <QuestionRow v-for="(question, ix) in activity.questions" :question="question" :key="`${activity.id}-${ix}`"/>
  </div>
</template>

<script>
import CandleRow from './CandleRow'
import QuestionRow from './QuestionRow'

export default {
  name: 'ActivityGroup',
  props: ['activity'],
  data () {
    return {}
  },
  components: {
    CandleRow,
    QuestionRow
  },
  created () {

  }
}
</script>

<style lang="css" scoped>
</style>
