import Ember from 'ember';

export default Ember.Helper.extend({
  shoppingCart: Ember.inject.service(),
  compute() {
    var testCart = this.get('shoppingCart');
    var testItems = testCart.get('items');
    var testThing = testItems[0];
    var total = 0;

    testItems.forEach(function(/*item*/) {
      var testPrice = testThing.get('price');
      total+= testPrice;
      console.log(total);
    });
    return total;
  }
});
// This ember helper is a class-based helper, it does the same thing as total-price but slightly differently
