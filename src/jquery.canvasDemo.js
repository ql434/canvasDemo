/*
 * canvasDemo
 * https://github.com/kunqian/canvasDemo
 *
 * Copyright (c) 2014 ql434
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.canvasDemo = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.canvasDemo = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.canvasDemo.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.canvasDemo.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].canvasDemo = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
