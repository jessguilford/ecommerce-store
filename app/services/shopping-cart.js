import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  includes(item) {
    if (this.get('items').includes(item)) {
      return true;
    }
  },
});
