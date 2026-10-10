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

Group of radios. Drupal renders each option as an Input inside a Form element, groups them with this template and wraps the group in a composite **Fieldset**.

## Files

`stories/components/form/radios/`

- `radios.twig`
- `_radios.scss`
- `radios.stories.js`
- `radios.docs.md`

## Drupal integration

Same variables as Drupal core `radios.html.twig`: the override is a
one-line include.

```
{# templates/form/radios.html.twig #}
{% include '@components/form/radios/radios.twig' %}
```

## Variables

| Variable | Description |
|----------|-------------|
| `attributes` | Group attributes (`id` and `title` only, set by Drupal core). |
| `children` | Rendered radios. |

## Bootstrap mapping

| Drupal | Bootstrap |
|--------|-----------|
| group | `.form-radios` |
| each option | `.form-check` + `.form-check-input` (`form-radio`) |
| `#attributes` class `container-inline` | inline options |
| `#title` | fieldset legend styled like a label |

> In Drupal, `#attributes` land on the wrapping fieldset, not on this template: style inline options from `.container-inline`.

## Form API example

```php
$form['contact'] = [
  '#type' => 'radios',
  '#title' => $this->t('Preferred contact'),
  '#options' => ['email' => $this->t('Email'), 'phone' => $this->t('Phone')],
  '#attributes' => ['class' => ['container-inline']],
];
```

See **Components / Form / Form** for the whole form integration.
