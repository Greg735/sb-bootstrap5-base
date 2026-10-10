/**
 * @file Minimal Drupal Twig extensions for twig.js.
 *
 * Replaces the drupal-twig-extensions package, which vite-plugin-twig-drupal
 * imports as `drupal-twig-extensions/twig`. Only the extensions used by the
 * templates under stories/ are implemented; add more here when needed.
 */

const cleanClassCache = {};

/**
 * Prepares a string for use as a CSS identifier (element, class, or ID name).
 *
 * @see \Drupal\Component\Utility\Html::cleanCssIdentifier()
 */
function cleanCssIdentifier(identifier) {
  const filter = {
    ' ': '-',
    _: '-',
    '/': '-',
    '[': '-',
    ']': '',
  };

  // Keep '__' as '__': swap it for a placeholder before applying the filter.
  const hasDoubleUnderscore = identifier.includes('__');
  identifier = identifier.replace(/__/g, '##');
  identifier = identifier.replace(/[ _/[\]]/g, (char) => filter[char]);
  if (hasDoubleUnderscore) {
    identifier = identifier.replace(/##/g, '__');
  }

  // Strip characters not allowed in a CSS identifier: keep '-', 0-9, A-Z,
  // '_', a-z and ISO 10646 characters U+00A1 and higher.
  identifier = identifier.replace(
    /(?:[\0-,./:-@[-^`{- ]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,
    '',
  );

  // Identifiers cannot start with a digit, two hyphens, or a hyphen followed
  // by a digit.
  return identifier.replace(/^\d/g, '_').replace(/^(-\d)|^(--)/g, '__');
}

/**
 * The clean_class filter: prepares a string for use as a valid class name.
 *
 * @see \Drupal\Component\Utility\Html::getClass()
 */
export function cleanClass(value) {
  const identifier = String(value);
  if (!Object.prototype.hasOwnProperty.call(cleanClassCache, identifier)) {
    cleanClassCache[identifier] = cleanCssIdentifier(identifier.toLowerCase());
  }
  return cleanClassCache[identifier];
}

/**
 * Adds the Drupal extensions to the given Twig instance.
 *
 * Same signature as drupal-twig-extensions/twig, the config is unused.
 */
export function addDrupalExtensions(twigInstance) {
  twigInstance.extendFilter('clean_class', cleanClass);
}
