import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({

  payment: null,

  stripe: service(),

  didInsertElement() {
    let stripe = get(this, 'stripe');
    let paymentRequest = stripe.paymentRequest(get(this, 'payment'));

    paymentRequest.canMakePayment().then((result) => {
      if (result) {
        let elements = stripe.elements();
        let button = elements.create('paymentRequestButton', paymentRequest);
        button.mount('#' + get(this, 'elementId'));
      } else {
        get(this, 'element').style.display = 'none';
      }
    });
  }
});
