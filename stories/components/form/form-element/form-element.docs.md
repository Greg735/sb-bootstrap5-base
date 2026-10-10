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

Wrapper of every form element: label, prefix / suffix, the element itself, error message and description.

## Files

`stories/components/form/form-element/`

- `form-element.twig`
- `_form-element.scss`
- `form-element.stories.js`
- `form-element.docs.md`

## Drupal integration

Same variables as Drupal core `form-element.html.twig`: the override is a
one-line include.

```
{# templates/form/form-element.html.twig #}
{% include '@components/form/form-element/form-element.twig' %}
```

## Variables

| Variable | Description |
|----------|-------------|
| `attributes` | Wrapper attributes (`#wrapper_attributes`). |
| `type` | Element `#type` (textfield, checkbox, radio, select…). |
| `name` | Element `#name`. |
| `label` | Rendered label (see Form element label). |
| `label_display` | `before`, `after`, `invisible` or `attribute`. |
| `title_display` | Title display setting. |
| `prefix / suffix` | `#field_prefix` / `#field_suffix`. |
| `description` | Object with `content` and `attributes`. |
| `description_display` | `before`, `after` or `invisible`. |
| `errors` | Error message (Inline Form Errors module). |
| `disabled` | `disabled` when the element is disabled. |
| `children` | Rendered element. |

## Bootstrap mapping

| Drupal | Bootstrap |
|--------|-----------|
| `.form-item` wrapper | bottom margin |
| `type` checkbox / radio | `.form-check` |
| `#wrapper_attributes` class `form-switch` | `.form-switch` |
| `prefix` / `suffix` | `.input-group` + `.input-group-text` |
| `errors` | `.invalid-feedback.d-block` |
| `description` | `.form-text` |

## Form API example

```php
$form['price'] = [
  '#type' => 'number',
  '#title' => $this->t('Price'),
  '#field_prefix' => 'CHF',
  '#description' => $this->t('Price including VAT.'),
  '#description_display' => 'before',
];
```

See **Components / Form / Form** for the whole form integration.
