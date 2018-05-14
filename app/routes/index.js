import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('post', {
      filter: {
        slug: 'home'
      }
    }).then(posts => posts.objectAt(0));
  }
});