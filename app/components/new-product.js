import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.set('addNewProduct', false);
      this.sendAction('save', params);
    }
  }
});
