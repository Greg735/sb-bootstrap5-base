<div class="mb-1">
	<span class="badge badge-sm text-bg-blue">Version: 0.1</span>
</div>
<div class="mb-1">
	<span class="badge badge-sm text-bg-red">Status: Not tested</span>
</div>
<div class="mb-4">
	<span class="badge badge-sm text-bg-warning">Documentation: TODO</span>
</div>

## Intro

The `Separator` component is a simple horizontal rule (`<hr>`) element that can have customizable CSS classes applied to it. It is useful for adding visual separations between sections in your layout.

## Implementation example
```
{% include '@namespace/separator/separator.twig' with {
	separator_classes: ['zzz', 'xxx'],
} %}
```