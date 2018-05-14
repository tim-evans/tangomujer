import { computed } from '@ember/object';
import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.API_HOST,
  coalesceFindRequests: true,
  headers: computed({
    get() {
      return {
        ApiKey: config.API_KEY
      };
    }
  })
});
