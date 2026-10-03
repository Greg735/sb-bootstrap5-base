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

Drop-down list, with optional option groups and multiple selection.

See **Components / Form / Form** for the Drupal integration.

## Drupal integration
```
{# templates/form/select.html.twig #}
{% include '@components/form/select.twig' %}
```

## Form API example
```php
$form['canton'] = [
  '#type' => 'select',
  '#title' => $this->t('Canton'),
  '#options' => ['vd' => 'Vaud', 'ge' => 'Genève'],
  '#empty_option' => $this->t('- Select -'),
];
```
