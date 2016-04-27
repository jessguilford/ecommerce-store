import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateProduct: false,
  actions: {
    showUpdate() {
      this.set('showUpdateProduct', true);
    },
    update(product) {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.set('showUpdateProduct', false);
      this.sendAction('update', product, params);
    }
  }
});
