<div class="mb-1">
	<span class="badge badge-sm text-bg-blue">Version: 0.1</span>
</div>
<div class="mb-1">
	<span class="badge badge-sm text-bg-green">Drupal: 11</span>
</div>
<div class="mb-4">
	<span class="badge badge-sm text-bg-red">Status: Not tested</span>
</div>

## Intro

Bootstrap 5 form elements built to be used as-is by Drupal 11's form API.

Every template keeps **the exact variables of its Drupal core template**
(`attributes`, `children`, `label`, `description`, `errors`…). The Bootstrap
classes are derived from the classes Drupal core already puts on each element
(`form-text`, `form-checkbox`, `form-select`, `button--primary`, `error`…), so
**no preprocess function is needed** in the theme.

| Template                  | Drupal template                  | Bootstrap output                                       |
|---------------------------|----------------------------------|--------------------------------------------------------|
| `form-element.twig`       | `form-element.html.twig`         | `.form-item`, `.form-check`, `.input-group`, `.form-text` |
| `form-element-label.twig` | `form-element-label.html.twig`   | `.form-label`, `.form-check-label`, required marker    |
| `input.twig`              | `input.html.twig`                | `.form-control`, `.form-check-input`, `.form-range`, `.btn` |
| `textarea.twig`           | `textarea.html.twig`             | `.form-control`                                        |
| `select.twig`             | `select.html.twig`               | `.form-select`                                         |
| `fieldset.twig`           | `fieldset.html.twig`             | framed fieldset, or label-like legend for radios/checkboxes |
| `radios.twig`             | `radios.html.twig`               | `.form-radios`                                         |
| `checkboxes.twig`         | `checkboxes.html.twig`           | `.form-checkboxes`                                     |

## Drupal integration

In the theme, each override is a one-line include: `include` passes the whole
Drupal context to the component.

```
{# templates/form/form-element.html.twig #}
{% include '@components/form/form-element.twig' %}

{# templates/form/form-element-label.html.twig #}
{% include '@components/form/form-element-label.twig' %}

{# templates/form/input.html.twig #}
{% include '@components/form/input.twig' %}

{# templates/form/textarea.html.twig #}
{% include '@components/form/textarea.twig' %}

{# templates/form/select.html.twig #}
{% include '@components/form/select.twig' %}

{# templates/form/fieldset.html.twig #}
{% include '@components/form/fieldset.twig' %}

{# templates/form/radios.html.twig #}
{% include '@components/form/radios.twig' %}

{# templates/form/checkboxes.html.twig #}
{% include '@components/form/checkboxes.twig' %}
```

Theme preprocess functions that add `form-control` / `form-check-input`
(`THEME_preprocess_input()`, `THEME_preprocess_textarea()`) become unnecessary
and can be removed (keeping them is harmless: classes are not duplicated).

## Form API cheatsheet

| Need                          | Form API                                                       |
|-------------------------------|----------------------------------------------------------------|
| Prefix / suffix (input-group) | `#field_prefix`, `#field_suffix`                               |
| Help text                     | `#description`, `#description_display`                         |
| Hidden label                  | `'#title_display' => 'invisible'`                              |
| Switch instead of checkbox    | `'#wrapper_attributes' => ['class' => ['form-switch']]`        |
| Inline radios / checkboxes    | `'#attributes' => ['class' => ['container-inline']]`           |
| Primary / danger button       | `'#button_type' => 'primary'` / `'danger'`                     |
| Inline error messages         | Enable the core **Inline Form Errors** module                  |
