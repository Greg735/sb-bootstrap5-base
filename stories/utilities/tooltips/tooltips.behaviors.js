(function (Drupal, once) {
    'use strict';

    Drupal.behaviors.jbTooltips = {
        attach: function (context) {
            once('jb-tooltips', '[data-bs-toggle="tooltip"]', context).forEach(function (element) {
                bootstrap.Tooltip.getOrCreateInstance(element);
            });
        }
    };
})(Drupal, once);
