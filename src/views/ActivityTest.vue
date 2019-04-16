<template>
<section class="view">
  <!-- Lesson Content-->
  <b-container>
    <b-row class="intro">
      <!-- Lesson Info -->
      <b-col md="12" lg="6">
        <custom-balance-game />
        <activity-button-guess
          activity-id="activity-button-guess-1"
          v-bind:attempt-data-keys="['button1', 'button2']"
          v-bind:attempts-allowed="5"
          v-bind:activated.sync="startActivated"
          v-bind:button1-correct="1"
          v-bind:button2-correct="2"
        />
      </b-col>
    </b-row>
  </b-container>
</section>
</template>


<script>
import ActivityButtonGuess from '../components/Activity'
import CustomBalanceGame from '../components/Custom/BalanceGame/BalanceGame'

export default {
  name: 'lesson',
  data() {
    return {
      startActivated: true
    }
  },
  components: {
    ActivityButtonGuess,
    CustomBalanceGame
  }
}
</script>


<style lang="scss" scoped>
// -----------------------------------------------------
// Import Variables
// -----------------------------------------------------

@import '../Variables.scss';

// -----------------------------------------------------
// Lesson Introduction
// -----------------------------------------------------


</style>
