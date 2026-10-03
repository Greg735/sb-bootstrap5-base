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

Multi-line text input. `#resizable` maps to the `resize-*` classes.

See **Components / Form / Form** for the Drupal integration.

## Drupal integration
```
{# templates/form/textarea.html.twig #}
{% include '@components/form/textarea.twig' %}
```

## Form API example
```php
$form['message'] = [
  '#type' => 'textarea',
  '#title' => $this->t('Message'),
  '#rows' => 5,
  '#resizable' => 'vertical',
];
```
