import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model(params) {
    return this.store.query('post', {
      filter: {
        slug: params['']
      }
    }).then(posts => posts.objectAt(0));
  },

  cart: service(),

  actions: {
    addToCart(ticket) {
      this.cart.add(ticket);
      console.log(ticket.description, this.cart.total);
    }
  }
});
