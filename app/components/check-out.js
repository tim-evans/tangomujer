import Component from '@ember/component';

export default Component.extend({
  classNames: ['check-out'],
  removeTicket(ticket) {
    this.cart.remove(ticket);
  }
});
