<template lang="html">
  <div class="activity-group">
    <h2>{{activity.title}}</h2>
    <p>{{activity.questions[0].instruction}}</p>
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

<style lang="scss" group>
@import '../Variables.scss';

.activity-group {
  padding: 20px 30px 25px;
  border-radius: $border-radius;
  margin-bottom: 60px;

  p {
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
