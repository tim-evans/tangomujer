import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({

  stripe: service(),

  didInsertElement() {
    let stripe = get(this, 'stripe');
    let elements = stripe.elements({
      fonts: [{
        cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans'
      }]
    });
    let card = elements.create('card', {
      style: {
        base: {
          fontSize: '16px',
          lineHeight: '24px' 
        }
      }
    });
    card.mount('#' + get(this, 'elementId'));
    card.on('change', (result) => {
      let { complete, error } = result;
      this.onchange(card);
      if (this.oncomplete && complete) {
        this.oncomplete(card);
      }
      if (this.onerror && error) {
        this.onerror(error);
      }
    });
  }
});
