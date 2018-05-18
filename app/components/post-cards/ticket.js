import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  init() {
    this._super();
    this.store.findRecord('ticket', this.payload.ticketId).then((ticket) => {
      if (this.isDestroyed) return;
      this.set('ticket', ticket);
    });
  }
});
