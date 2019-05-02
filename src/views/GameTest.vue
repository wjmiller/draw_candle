<template>
<section class="view">
  <!-- Lesson Content-->
  <b-container>
    <b-row class="intro">
      <!-- Lesson Info -->
      <b-col md="12" lg="6">
        <custom-balance-game />
      </b-col>
    </b-row>
  </b-container>
</section>
</template>


<script>
import CustomBalanceGame from '../components/Custom/BalanceGame/BalanceGame'

export default {
  name: 'lesson',
  data() {
    return {
      startActivated: true
    }
  },
  components: {
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
