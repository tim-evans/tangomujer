import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('group').then(groups => groups.objectAt(0));
  }
});