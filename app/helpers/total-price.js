import Ember from 'ember';

export function totalPrice(params) {
  var test1 = params[0];
  var total = 0;
  console.log(test1);
  test1.forEach(function(item) {
   total += item.get('price');
  });
  return total;
}

export default Ember.Helper.helper(totalPrice);
