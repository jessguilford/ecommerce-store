import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  add(item) {
    this.get('items').pushObject(item);
    //this.get('total').push(item.price);
    //console.log(this.get('items'[0]).price);
    // this.incrementProperty('total', 10);
  }
});
