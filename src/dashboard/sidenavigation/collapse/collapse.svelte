<script>
	import { slide } from 'svelte/transition';

	let show = false;

	const toggle = () => {
		show = !show;
	};

</script>

<div role="button" on:click={toggle} on:keydown={toggle} tabindex="0" class="flex justify-start -mb-1 py-6 px-4 text-sm">
	<slot name="item" />
	<span class="ml-auto">
		<span hidden={!show}>
            V
		</span>
		<span hidden={show}>
            >
		</span>
	</span>
</div>

{#if show}
	<div transition:slide class="overflow-hidden text-gray-600">
		<slot name="panel" />
	</div>
{/if}
