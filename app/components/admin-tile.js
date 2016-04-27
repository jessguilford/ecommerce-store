import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(product) {
      if(confirm('Are you sure you want to permanently delete this product?')){
        this.sendAction('destroyProduct', product);
      }
    },
    update(product, params) {
      this.sendAction('updateProduct', product, params);
    }
  }
});
