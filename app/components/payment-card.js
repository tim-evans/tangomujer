import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({

  stripe: service(),

  didInsertElement() {
    let stripe = get(this, 'stripe');
    let elements = stripe.elements();
    let card = elements.create('card');
    card.mount('#' + get(this, 'elementId'));
  }
});
