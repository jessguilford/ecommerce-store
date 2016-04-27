import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
    });
  },
  actions: {
    save(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('admin');
    },
    updateProduct(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          product.set(key, params[key]);
        }
      });
      product.save();
      this.transitionTo('admin');
    },
    destroyProduct(product) {
      return product.destroyRecord();
    }
  }
});
