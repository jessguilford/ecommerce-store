import Ember from 'ember';

export default Ember.Helper.extend({
  shoppingCart: Ember.inject.service(),
  compute() {
    var testCart = this.get('shoppingCart');
    var testItems = testCart.get('items');
    var testThing = testItems[0];
    var total = 0;

    testItems.forEach(function(item) {
      var testPrice = testThing.get('price');
      total+= testPrice;
      console.log(total);
    });
    return total;
    // I can check testprice in debugger console and it works, but it won't log below
    console.log(testPrice);
  }
});
// This ember helper is a class-based helper
