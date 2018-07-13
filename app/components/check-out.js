import Component from '@ember/component';
import { computed } from '@ember/object';
import RSVP from 'rsvp';

export default Component.extend({
  classNames: ['check-out'],
  removeTicket(ticket, evt) {
    evt.preventDefault();
    this.cart.remove(ticket);
  },
  pay(paymentInfo, evt) {
    evt.preventDefault();
    evt.stopPropagation();
    return this.onpay(paymentInfo).then(() => {
      this.set('hasPaid', true);
    }, (error) => {
      this.set('error', error);
    });
  },

  payment: computed('cart.total', function () {
    return RSVP.all(this.cart.tickets).then((tickets) => {
      return {
        country: 'US',
        currency: 'usd',
        total: {
          label: tickets.mapBy('description').join(', '),
          amount: this.cart.total
        },
        requestPayerName: true,
        requestPayerEmail: true
      }
    });
  })
});
