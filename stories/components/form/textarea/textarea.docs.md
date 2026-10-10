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

Multi-line text input.

## Files

`stories/components/form/textarea/`

- `textarea.twig`
- `_textarea.scss`
- `textarea.stories.js`
- `textarea.docs.md`

## Drupal integration

Same variables as Drupal core `textarea.html.twig`: the override is a
one-line include.

```
{# templates/form/textarea.html.twig #}
{% include '@components/form/textarea/textarea.twig' %}
```

## Variables

| Variable | Description |
|----------|-------------|
| `wrapper_attributes` | Wrapper attributes. |
| `attributes` | Textarea attributes. |
| `resizable` | `none`, `vertical`, `horizontal` or `both`. |
| `required` | Whether the textarea is required. |
| `value` | Textarea content. |

## Bootstrap mapping

| Drupal | Bootstrap |
|--------|-----------|
| textarea | `.form-control` |
| `resizable` | `.resize-*` |
| `error` | `.is-invalid` |

## Form API example

```php
$form['message'] = [
  '#type' => 'textarea',
  '#title' => $this->t('Message'),
  '#rows' => 5,
  '#resizable' => 'vertical',
];
```

See **Components / Form / Form** for the whole form integration.
