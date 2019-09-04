/*!
 * Bootstrap-select v1.12.101 (http://derjanb.github.io/bootstrap-select)
 *
 * Copyright 2013-2019 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  ($.fn.selectpicker.locales = $.fn.selectpicker.locales || {})['nl_NL'] = {
    noneSelectedText: 'Niets geselecteerd',
    noneResultsText: 'Geen resultaten gevonden voor {0}',
    countSelectedText: '{0} van {1} geselecteerd',
    maxOptionsText: ['Limiet bereikt ({n} {var} max)', 'Groep limiet bereikt ({n} {var} max)', ['items', 'item']],
    multipleSeparator: ', '
  };
})(jQuery);


}));
