<div class="mb-1">
	<span class="badge badge-sm text-bg-blue">Version: 0.1</span>
</div>
<div class="mb-1">
	<span class="badge badge-sm text-bg-red">Status: Not tested</span>
</div>
<div class="mb-4">
	<span class="badge badge-sm text-bg-warning">Documentation: TODO</span>
</div>


## Purpose

A simple anchor element without text or any content. Just an id and voilà. Nothing is displayed.

## Implementation example
```
{% include '@namespace/anchor/anchor.twig' with {
	id: 'myAnchor',
} %}
```