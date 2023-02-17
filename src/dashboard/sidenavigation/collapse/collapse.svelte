<script>
	import {slide} from 'svelte/transition';
	import {menuSettings} from '../../provider/store.js';
	import MdiChevronDown from '../icons/MdiChevronDown.svelte';
	import MdiChevronRight from '../icons/MdiChevronRight.svelte';
  
	// Add an index prop
	export let index;
  
	let showIcon = $menuSettings[index].show;
  
	let toggle = () => {
	  // Update only the menu item with the given index
	  menuSettings.update((state) => {
		state[index].show = !state[index].show;
		showIcon = state[index].show;
		return state;
	  });
	};
  </script>
  
  <div
	role="button"
	on:click={toggle}
	on:keydown={toggle}
	tabindex="0"
	class="flex justify-start  py-3 px-7 mb-2.5 font-bold text-sm border-2 rounded-r-full rounded-tl-sm rounded-bl-full  border-black dark:border-white dark:text-white text-black"
  >
	<slot name="item" />
	{#if showIcon}
	  <MdiChevronDown />
	{:else}
	  <MdiChevronRight />
	{/if}
  </div>
  
  {#if showIcon}
	<div transition:slide class="overflow-hidden text-gray-600">
	  <slot name="panel" />
	</div>
  {/if}