/* global ADL */

import EventBus from './EventBus'
const fb = require('./firebase.js')

const xAPI = {
  setEvents(events) {
    events.forEach(ev => EventBus.$on(ev, this.processEvent))
  },
  processEvent: function(vueObject) {
    // eslint-disable-next-line
    console.log(vueObject);
    const stmt = new ADL.XAPIStatement(
      new ADL.XAPIStatement.Agent('mailto:' + fb.auth.currentUser.email, 'Email Address'),
      new ADL.XAPIStatement.Verb('http://adlnet.gov/expapi/verbs/completed', 'completed'),
      new ADL.XAPIStatement.Activity('http://vwf.adlnet.gov/xapi/virtual_world_sandbox', 'candlestick activity row')
    );
    stmt.generateId();
    ADL.XAPIWrapper.sendStatement(stmt, (resp, obj) => {
      // eslint-disable-next-line
      console.log(resp, obj);
    });
  }
}

export default xAPI;