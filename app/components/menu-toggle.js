import Ember from 'ember';

export default Ember.Component.extend({
  windowSize: Ember.computed(function() {
    // handles show/hide menu functionality when the window is resized
    $(window).resize(function() {
      var windowSize = $(window).width();
      if (windowSize > 620) {
        this.$("#navlinks").show();
        this.$(".navbar").removeClass("navbar-extended");
      } else {
        this.$("#navlinks").hide();
      }
      return windowSize;
    });
  }),
  actions: {
    clicked: function() {
      this.$("#navlinks").toggle();
      this.$(".navbar").toggleClass("navbar-extended");
    }
  }
});
