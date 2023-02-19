<script>
  import {articles} from '../provider/store.js';
  import {page} from '$app/stores';
  import {menuSettings} from '../provider/store.js';
  import MdiChevronDown from './icons/MdiChevronDown.svelte';
  import MdiChevronRight from './icons/MdiChevronRight.svelte';

  const style = {
    active: `font-normal mx-4 text-sm text-blue-600`,
    inactive: `font-light hover:underline mx-4 text-sm text-black dark:text-white`,
    link: `inline-flex items-center justify-start mb-3 p-3 text-black`,
  };

  const toggle = (index) => {
    // Update only the menu item with the given index
    menuSettings.update((state) => {
      state[index].show = !state[index].show;
      return state;
    });
  };
</script>

<ul class="pl-2">
  {#each $articles.articles as section, i}
    <li class="flex flex-col items-start">
      <div
        role="button"
        on:click={() => toggle(i)}
        on:keydown={() => toggle(i)}
        tabindex="0"
        class="flex justify-start  py-3 px-5 mb-2.5 font-bold text-sm border-2 rounded-r-full rounded-tl-sm rounded-bl-full - border-slate-300 dark:border-white dark:text-white text-slate-400"
      >
        <span><svelte:component this={section.icon} /></span>
        <span class="pl-3">{section.section}</span>
        {#if $menuSettings[i].show}
          <MdiChevronDown />
        {:else}
          <MdiChevronRight />
        {/if}
      </div>
      {#if $menuSettings[i].show}
        {#each section.content as item, i}
          <div class="pr-5">
            <a href={item.link} class={style.link}>
              <span
                class={item.link === $page.url.pathname
                  ? style.active
                  : style.inactive}
              >
                {item.title}
              </span>
            </a>
          </div>
        {/each}
      {/if}
    </li>
  {/each}
</ul>
