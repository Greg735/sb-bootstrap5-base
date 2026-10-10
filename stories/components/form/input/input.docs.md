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

Text-like inputs (`textfield`, `email`, `password`, `tel`, `url`, `search`, `number`, `date`, `file`, `color`, `range`), wrapped by Form element. The same template also renders checkboxes, radios and buttons (see **Checkbox** and **Submit**).

## Files

`stories/components/form/input/`

- `input.twig`
- `input.stories.js`
- `input.docs.md`
- `checkbox.stories.js`
- `checkbox.docs.md`
- `submit.stories.js`
- `submit.docs.md`

## Drupal integration

Same variables as Drupal core `input.html.twig`: the override is a
one-line include.

```
{# templates/form/input.html.twig #}
{% include '@components/form/input/input.twig' %}
```

## Variables

| Variable | Description |
|----------|-------------|
| `attributes` | Input attributes, including the classes set by Drupal core. |
| `children` | Optional additional rendered elements. |

## Bootstrap mapping

| Drupal | Bootstrap |
|--------|-----------|
| `form-text`, `form-email`, `form-tel`, `form-url`, `form-search`, `form-number`, `form-date`, `form-time`, `form-file`, `form-autocomplete` | `.form-control` |
| `form-checkbox`, `form-radio` | `.form-check-input` |
| `form-range` | `.form-range` |
| `form-color` | `.form-control.form-control-color` |
| `button` + `button--primary` / `button--danger` | `.btn.btn-primary` / `.btn.btn-danger` (else `.btn-outline-primary`) |
| `error` | `.is-invalid` |

## Form API example

```php
$form['price'] = [
  '#type' => 'number',
  '#title' => $this->t('Price'),
  '#field_prefix' => 'CHF',
  '#description' => $this->t('Price including VAT.'),
  '#required' => TRUE,
];
```

See **Components / Form / Form** for the whole form integration.
