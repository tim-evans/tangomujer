import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({

  payment: null,

  stripe: service(),

  didInsertElement() {
    this.payment.then((payment) => {
      let stripe = this.stripe;
      let paymentRequest = stripe.paymentRequest(payment);
      let elements = stripe.elements();
      let button = elements.create('paymentRequestButton', {
        paymentRequest
      });

      paymentRequest.canMakePayment().then((result) => {
        if (result) {
          button.mount('#' + this.elementId);
        } else {
          this.element.style.display = 'none';
        }
      });
    });
  }
});
