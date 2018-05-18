import Service from '@ember/service';

export default Service.extend({
  init() {
    // Get stripe token from group
    this._stripe = Stripe();
  },

  elements() {
    return this._stripe.elements();
  },

  paymentRequest(...args) {
    return this._stripe.paymentRequest(...args);
  }
});
