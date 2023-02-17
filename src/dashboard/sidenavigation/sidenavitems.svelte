<script>
  import {articles} from '../provider/store.js';
  import {page} from '$app/stores';
  import {getContext} from 'svelte';
  import Collapse from './collapse/collapse.svelte';

  let show = false;

  const toggle = () => {
    show = !show;
  };

  const style = {
    active: `font-normal mx-4 text-sm text-blue-600`,
    inactive: `font-light mx-4 text-sm text-black dark:text-white`,
    link: `inline-flex items-center justify-start mb-3 p-3 text-black`,
  };
</script>

<ul class="mt-6 md:pl-6">
  <li class="flex flex-col items-start">
    {#each $articles.articles as section, i}
      <!-- Pass index prop to Collapse component -->
      <Collapse index={i}>
        <div slot="item">
          <div class="flex">
            <span><svelte:component this={section.icon} /></span>
            <span class="pl-3">{section.section}</span>
          </div>
        </div>
        <div slot="panel">
          {#each section.content as item, i}
            <div class="pl-5">
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
        </div>
      </Collapse>
    {/each}
  </li>
</ul>