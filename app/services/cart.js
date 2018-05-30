import Service from '@ember/service';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';

export default Service.extend({

  tickets: null,

  init() {
    this._super();
    this.set('tickets', []);
  },

  length: reads('tickets.length'),

  total: computed('tickets.@each.cost', function () {
    return this.tickets.reduce((total, ticket) => {
      return total + ticket.cost;
    }, 0);
  }),

  add(ticket) {
    if (this.tickets.indexOf(ticket) === -1) {
      this.tickets.pushObject(ticket);
    }
  },

  remove(ticket) {
    this.tickets.removeObject(ticket);
  },

  clear(cart) {
    cart.tickets.clear();
  }
});
