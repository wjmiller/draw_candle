<template>
<section class="view">
  <!-- Lesson Content-->
      <!-- Lesson Info -->
        <feedback-display
          v-bind:auto="true"
          v-bind:activated="activated"
          v-bind:messages="messages"
          v-bind:displayed="messagesDisplayed"
        >
          <template v-slot:message="{ message }">
            <span>✓</span>
              {{ message.text }}
          </template>
        </feedback-display>
    <b-form-group label="Options for feedback">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
        <div v-for="msg in messages" v-bind:key="msg.name">
          <b-form-checkbox v-bind:value="msg.name">{{msg.text}}</b-form-checkbox>
          <b-form-checkbox v-bind:value="`${msg.name}-test`">{{msg.text}} test</b-form-checkbox>
        </div>
      </b-form-checkbox-group>
    </b-form-group>
    <b-button
      variant="primary"
      v-on:click="activatefeedback">activate feedback
    </b-button>
</section>
</template>


<script>
import FeedbackDisplay from '../components/Feedback'

export default {
  name: 'lesson',
  data() {
    return {
      selected: '',
      activated: false,
      messages: [
        {name: 'one', text: 'number one'},
        {name: 'two', text: 'number two'},
        {name: 'three', text: 'number three'},
        {name: 'four', text: 'number four'}
      ]
    }
  },
  methods: {
    activatefeedback() {
      this.activated = true
    }
  },
  computed: {
    messagesDisplayed() {
      return typeof this.selected === 'string' ? [] : this.selected.slice().sort((a, b) => this.messages.findIndex(item => item.name === a) - this.messages.findIndex(item => item.name === b))
    }
  },
  components: {
    FeedbackDisplay
  }
}
</script>


<style lang="scss">
// -----------------------------------------------------
// Import Variables
// -----------------------------------------------------

@import '../Variables.scss';

// -----------------------------------------------------
// Lesson Introduction
// -----------------------------------------------------


.feedback-messages {
  min-height: 100px;
}

/*
.intro .feedback-message {
  transition: all 1s;
  display: block;
  margin-right: 10px;
}
.intro .messages-enter, .intro .messages-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.intro .messages-leave-active {
  position: absolute;
}
*/
</style>
