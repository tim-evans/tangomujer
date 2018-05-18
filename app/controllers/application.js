import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentYear: new Date().getFullYear(),
  cart: service()
});
