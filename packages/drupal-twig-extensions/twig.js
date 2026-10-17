/**
 * @file Empty stand-in for the drupal-twig-extensions package.
 *
 * vite-plugin-twig-drupal always imports `drupal-twig-extensions/twig` and
 * calls addDrupalExtensions(), but the npm package pulls in a vulnerable
 * locutus@2. The components do not use any Drupal-specific Twig filter or
 * function (filters such as |clean_class are applied by the Drupal theme
 * before the include), so this module registers nothing.
 */

/**
 * Same signature as drupal-twig-extensions/twig: intentionally a no-op.
 */
export function addDrupalExtensions() {}
