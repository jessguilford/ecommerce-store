import Ember from 'ember';

export function totalPrice(params) {
  var inputs = params[0];
  var total = 0;
  inputs.forEach(function(item) {
   total += item.get('price');
  });
  return total;
}

export default Ember.Helper.helper(totalPrice);
