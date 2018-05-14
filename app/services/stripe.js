import Service from '@ember/service';

export default Service.extend({
  init() {
    this._stripe = Stripe('pk_test_UOmGjx9IcR3PvaofCDWRAmyt');
  },

  elements() {
    return this._stripe.elements();
  },

  paymentRequest(...args) {
    return this._stripe.paymentRequest(...args);
  }
});
