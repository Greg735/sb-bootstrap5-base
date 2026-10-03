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

Text-like inputs (`textfield`, `email`, `password`, `tel`, `url`, `search`, `number`, `date`, `file`, `color`, `range`), wrapped by `form-element.twig`. The Bootstrap class is chosen from the class Drupal core sets on the element.

See **Components / Form / Form** for the Drupal integration.

## Drupal integration
```
{# templates/form/input.html.twig #}
{% include '@components/form/input.twig' %}
```

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
