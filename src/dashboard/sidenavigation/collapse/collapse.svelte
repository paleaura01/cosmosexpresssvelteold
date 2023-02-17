<script>
	import { slide } from 'svelte/transition';
	import {menuSettings} from '../../provider/store.js';
	import MdiChevronDown from '../icons/MdiChevronDown.svelte'
	import MdiChevronRight from '../icons/MdiChevronRight.svelte'
	
	let toggle = () => {
		menuSettings.update((n) => {
			n.show = !n.show;
			return n;
		});
	};
	
</script>

<div role="button" on:click={toggle} on:keydown={toggle} tabindex="0" class="flex justify-start -mb-1 py-5 px-2 text-sm">
	<slot name="item" />
	<span class="ml-1">
		<span hidden={!$menuSettings.show}>
            <MdiChevronDown />
			
		</span>
		<span hidden={$menuSettings.show}>
           <MdiChevronRight />
		   
		</span>
	</span>
</div>

{#if $menuSettings.show}
	<div transition:slide class="overflow-hidden  text-gray-600">
		<slot name="panel" />
	</div>
{/if}
