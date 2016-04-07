import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function() {
    return this.get('shoppingCart').includes(this);
  }),
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    },
  }
});
//
// export default Ember.Component.extend({
//   shoppingCart: Ember.inject.service(),
//   notInCart: true,
//   actions: {
//     addToCart(item) {
//       this.get('shoppingCart').add(item);
//       this.set('notInCart', false);
//     },
//     removeFromCart(item) {
//       this.get('shoppingCart').remove(item);
//       this.set('notInCart', true);
//
//     },
//   }
// });
