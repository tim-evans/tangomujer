import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

  stripe: service(),

  model() {
    return this.store.findAll('group').then(groups => groups.objectAt(0)).then((group) => {
      this.stripe.configure(group);
      return group;
    });
  },

  actions: {
    pay({ stripeElement, email, name, tickets }) {
      return this.stripe.createToken(stripeElement).then(({ token: stripeToken, error }) => {
        let payment = this.store.createRecord('payment', {
          email,
          name,
          stripeToken: stripeToken.id,
          tickets
        });
        return payment.save();
      });
    }
  }
});
