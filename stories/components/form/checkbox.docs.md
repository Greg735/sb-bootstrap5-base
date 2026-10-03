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

Single checkbox, rendered by `input.twig` inside a `.form-check` wrapper. Add `form-switch` to `#wrapper_attributes` to get a switch.

See **Components / Form / Form** for the Drupal integration.

## Drupal integration
```
{# templates/form/input.html.twig #}
{% include '@components/form/input.twig' %}
```

## Form API example
```php
$form['newsletter'] = [
  '#type' => 'checkbox',
  '#title' => $this->t('Subscribe to the newsletter'),
  '#wrapper_attributes' => ['class' => ['form-switch']],
];
```
