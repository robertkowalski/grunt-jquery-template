/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

(function($) {

  var Awesome = function() {
    var self = this;
    
    if ($.isFunction(self._init)) {
      self._init.apply(self, arguments);
    }
  };

  Awesome.prototype = {

    _init: function(opts, element) {
      var self = this, 
          options = {};

      self.defaults = $.fn.awesome.defaults;
      $.extend(true, options, self.defaults, opts);

      self.options = options;
      self.$element = $(element);
    }
  };

  $.fn.extend({
    awesome: function(options) {
      var args = Array.prototype.slice.call(arguments), 
          method = args.shift();

      return this.each(function(index, element) {
          var instance = $.data(element, 'awesome') || $.data(element, 'awesome', new Awesome(options, element));
          if (method && typeof method === 'string' && method.charAt(0) !== '_' && $.isFunction(instance[method])) {
            instance[method].apply(instance, args);
          }
      });
    }
  });

  $.fn.awesome.defaults = {

  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
