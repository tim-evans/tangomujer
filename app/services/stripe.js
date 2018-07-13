import Service from '@ember/service';

export default Service.extend({

  configure(group) {
    if (group.stripePublishableKey) {
      this._stripe = Stripe(group.stripePublishableKey);
    }
  },

  elements() {
    if (this._stripe) {
      return this._stripe.elements();
    }
  },

  paymentRequest(...args) {
    if (this._stripe) {
      return this._stripe.paymentRequest(...args);
    }
  },

  createToken(element) {
    if (this._stripe) {
      return this._stripe.createToken(element);
    }
  }
});
