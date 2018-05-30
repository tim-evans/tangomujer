import Service from '@ember/service';

export default Service.extend({

  configure(group) {
    this._stripe = Stripe(group.stripePublishableKey);
  },

  elements() {
    return this._stripe.elements();
  },

  paymentRequest(...args) {
    return this._stripe.paymentRequest(...args);
  },

  createToken(element) {
    return this._stripe.createToken(element);
  }
});
