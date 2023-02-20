<script>
  import {articles} from '../provider/store.js';
  import {page} from '$app/stores';
  import {menuSettings} from '../provider/store.js';
  import MdiChevronDown from './icons/MdiChevronDown.svelte';
  import MdiChevronRight from './icons/MdiChevronRight.svelte';

  const style = {
    active: `font-normal mx-4 text-sm `,
    inactive: `font-light hover:underline mx-4 text-sm text-black dark:text-white`,
    link: `inline-flex items-start justify-start mb-3 p-3 text-black`,
    dropdown: `flex flex-col items-start text-black pl-6`,
  };

  const toggle = (index) => {
    menuSettings.update((state) => {
      state[index].show = !state[index].show;
      if (state[index].show) {
        articles.update((value) => {
          const section = value.articles[0].content.find(
            (section) => section.id === state[index].id
          );
          if (section) {
            section.open = true;
          }
          return value;
        });
      }
      return state;
    });
  };
</script>

<ul class="">
  {#each $articles.articles as section, i}
    <li class="flex flex-col items-center">
      <div
        role="button"
        on:click={() => toggle(i)}
        on:keydown={() => toggle(i)}
        tabindex="0"
        class="flex justify-start py-3 px-7 mb-2.5 font-bold text-sm border-2 rounded-r-full rounded-tl-sm rounded-bl-full  border-black dark:border-white dark:text-white text-black"
      >
        <span><svelte:component this={section.icon} /></span>
        <span class="pl-3 ">{section.section}</span>
        {#if $menuSettings[i].show}
          <MdiChevronDown />
        {:else}
          <MdiChevronRight />
        {/if}
      </div>
      {#if $menuSettings[i].show}
        <div class={style.dropdown}>
          {#each section.content as item, i}
            <a href={item.link} class={style.link}>
              <span
                class={item.link === $page.url.pathname
                  ? style.active
                  : style.inactive}
              >
                {item.title}
              </span>
            </a>
          {/each}
        </div>
      {/if}
    </li>
  {/each}
</ul>
