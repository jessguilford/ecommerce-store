import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clicked: function() {
      this.$("#navlinks").toggle();
      this.$(".navbar").toggleClass("navbar-extended");
    }
  }
});
