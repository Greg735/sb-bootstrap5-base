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

Form buttons are `input` elements in Drupal: the `button--primary` / `button--danger` classes set by `#button_type` map to Bootstrap button styles. Other buttons are outlined.

See **Components / Form / Form** for the Drupal integration.

## Drupal integration
```
{# templates/form/input.html.twig #}
{% include '@components/form/input.twig' %}
```

## Form API example
```php
$form['actions']['submit'] = [
  '#type' => 'submit',
  '#value' => $this->t('Send'),
  '#button_type' => 'primary',
];
```
