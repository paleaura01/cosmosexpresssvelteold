<script>
  import '../app.css';

  import Grid from './grid.svelte';
  import Header from '../dashboard/topnavigation/topnav.svelte';
  import { darkModeSettings, menuSettings, articles } from '../dashboard/provider/store.js';
  import { onMount, onDestroy } from 'svelte';
  import CosmosExpressLogo from '../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';
  import SideNavigation from '../dashboard/sidenavigation/sidenavitems.svelte';
  import MdiChevronDown from './icons/MdiChevronDown.svelte';
  import MdiChevronRight from './icons/MdiChevronRight.svelte';
  import MdiNewspaperVariantMultipleOutline from './icons/MdiNewspaperVariantMultipleOutline.svelte';

  
  let showGrid1 = false;
  let showGrid2 = false;

  function toggleArticle(index) {
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
  }

  onMount(() => {
    articles.subscribe((value) => {
      showGrid1 = value.articles[0].content.some((section) => section.open);
      showGrid2 = value.articles[1].content.some((section) => section.open);
    });
  });

  onDestroy(() => {
    articles.subscribe((value) => {
      showGrid1 = value.articles[0].content.some((section) => section.open);
      showGrid2 = value.articles[1].content.some((section) => section.open);
    });
  });

  menuSettings.subscribe((value) => {
    showGrid1 = value[0].show;
    showGrid2 = value[1].show;
  });
</script>

<div class="h-screen  overflow-y-hidden "  class:dark={$darkModeSettings.isDm}>
  <div class="flex  h-full" >
    <div
      class="w-64  hidden sm:hidden md:hidden lg:block  h-full dark:text-white dark:bg-slate-900  overflow-y-auto overflow-x-hidden scrollbar-hide"
    >

      <div class="justify-center relative">
      <SideNavigation />
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="dark:text-white">
        <Header />
      </div>

      <div class="h-full pb-20 bg-gray-100 dark:bg-gray-800 flex-1">
        <div class="h-full  overflow-y-auto flex flex-col justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <div class="h-full px-5  lg:px-10 py-8 flex flex-col items-start ">
            <div 
              class="text-1xl font-bold pl-7 py-3  py-3 px-7 mb-2.5 font-bold text-sm border-2 rounded-r-full rounded-tl-sm rounded-bl-full  border-black dark:border-white dark:text-white text-black">
              {#if $menuSettings[0].show && $menuSettings[0].id === 'Article 2'}
                <div class="flex">
                  <MdiNewspaperVariantMultipleOutline />
                  <p class="ml-3 mr-1">Article 2</p>
                  <MdiChevronDown />
                </div>
              {:else}
                <div class="flex">
                  <MdiNewspaperVariantMultipleOutline />
                  <p class="ml-3 mr-1">Article 2</p>
                  <MdiChevronRight />
                </div>
              {/if}
            </div>
            {#if showGrid1}
              <Grid />
            {:else}{/if}
            <div
              class="text-1xl font-bold pl-7 py-3 px-7 mb-2.5 font-bold text-sm border-2 rounded-r-full rounded-tl-sm rounded-bl-full  border-black dark:border-white dark:text-white text-black"
            >
              {#if $menuSettings[1].show && $menuSettings[1].id === 'Article 1'}
                <div class="flex">
                  <MdiNewspaperVariantMultipleOutline />
                  <p class="ml-3 mr-1">Article 1</p>
                  <MdiChevronDown />
                </div>
              {:else}
                <div class="flex">
                  <MdiNewspaperVariantMultipleOutline />
                  <p class="ml-3 mr-1">Article 1</p>
                  <MdiChevronRight />
                </div>
              {/if}
            </div>
            {#if showGrid2}
              <Grid />
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
