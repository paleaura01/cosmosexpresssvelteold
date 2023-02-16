<script>
  import {slide} from 'svelte/transition';
  import {menuSettings} from '../../provider/store.js';
  import MdiChevronDown from '../icons/MdiChevronDown.svelte';
  import MdiChevronRight from '../icons/MdiChevronRight.svelte';

  // use a prop to pass the id of the menu item
  export let id;

  // use the menuSettings store to get the show value of the menu item
  let show = $menuSettings.show && $menuSettings.id === id;

  export const toggleMenu = (id) => {
    menuSettings.update((n) => {
      // find the index of the menu item with the given id
      const index = n.findIndex((item) => item.id === id);
      // toggle the show value of that menu item
      n[index].show = !n[index].show;
      return n;
    });
  };
</script>

<div
  role="button"
  on:click={() => toggleMenu(id)}
  on:keydown={(e) => {
    if (e.key === 'Enter') {
      toggleMenu(id);
    }
  }}
  tabindex="0"
  class="flex justify-start -mb-1 py-5 px-2 text-sm"
>
  <slot name="item" />
  <span class="ml-1">
    <span hidden={!show}>
      <MdiChevronDown />
    </span>
    <span hidden={show}>
      <MdiChevronRight />
    </span>
  </span>
</div>

{#if show}
  <div transition:slide class="overflow-hidden  text-gray-600">
    <slot name="panel" />
  </div>
{/if}
