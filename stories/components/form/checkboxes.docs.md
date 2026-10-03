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

Group of checkboxes. Drupal wraps the group in a composite fieldset whose legend is styled as a label. Add `container-inline` to `#attributes` to display the options inline.

See **Components / Form / Form** for the Drupal integration.

## Drupal integration
```
{# templates/form/checkboxes.html.twig #}
{% include '@components/form/checkboxes.twig' %}
```

## Form API example
```php
$form['topics'] = [
  '#type' => 'checkboxes',
  '#title' => $this->t('Topics'),
  '#options' => ['health' => $this->t('Health'), 'research' => $this->t('Research')],
];
```
