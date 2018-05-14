import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('post', {
      filter: {
        slug: params['']
      }
    }).then(posts => posts.objectAt(0));
  }
});
