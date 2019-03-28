import EventBus from '../EventBus.js';

export const Activity = {
  data () {
    return {
      completed: false,
      correct: false,
      attemptData: [],
      tries: 0,
    }
  },
  methods: {
    makeAttempt (data) {
      this.attemptData.push(data);
      this.emitEvent('activity-attempt');
    },
    reset () {
      this.enabled = false;
      this.completed = false;
      this.correct = false;
      this.attemptData = [];
      this.tries = 0;
      this.emitEvent('activity-reset');
    },
    emitEvent (ev) {
      EventBus.$emit(ev, {
        eventName: ev,
        vueObject: this
      })
    }
  },
  computed: {
    attempts () {return this.attempts.length},
    lastAttempt () {return this.attemptData.slice(-1)[0]}
  },
  watch: {
    completed () {
      if (this.completed) this.emitEvent('activity-completed');
    },
    correct () {
      if (this.correct) this.emitEvent('activity-correct');
    }
  }
};
