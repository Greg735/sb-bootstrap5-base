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

Groups related elements under a framed fieldset with a legend.

See **Components / Form / Form** for the Drupal integration.

## Drupal integration
```
{# templates/form/fieldset.html.twig #}
{% include '@components/form/fieldset.twig' %}
```

## Form API example
```php
$form['address'] = [
  '#type' => 'fieldset',
  '#title' => $this->t('Address'),
];
$form['address']['street'] = ['#type' => 'textfield', '#title' => $this->t('Street')];
```
