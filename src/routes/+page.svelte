<script>
  import '../app.css';
  import {darkModeSettings, menuSettings} from '../dashboard/provider/store.js';
  import Header from '../dashboard/topnavigation/topnav.svelte';
  import CosmosExpressLogo from '../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';
  import SideNavigation from '../dashboard/sidenavigation/sidenav.svelte';
  import MdiChevronDown from './icons/MdiChevronDown.svelte';
	import MdiChevronRight from './icons/MdiChevronRight.svelte';
  
  function toggleArticle(index) {
    menuSettings.update((state) => {
      state[index].show = !state[index].show;
      return state;
    });
  }
</script>

<div class="h-screen overflow-y-hidden" class:dark={$darkModeSettings.isDm}>
  <div class="flex h-full  ">
    <div
      class="w-72 h-full dark:text-white dark:bg-slate-900 z-40 overflow-y-auto overflow-x-hidden scrollbar-hide"
    >
      <SideNavigation />
    </div>
    <div class="flex flex-col w-full">
      <div class="h-20 w-full dark:text-white  z-40 ">
        <Header />
      </div>

      <div
        class="h-full overflow-y-auto flex flex-col justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      >
        <div class="h-full pl-12 py-8 flex flex-col items-start ">
          <button class="text-1xl font-bold pl-12 py-8  py-3 px-6 mb-2.5 font-bold text-sm border-2 rounded-r-full rounded-tl-sm rounded-bl-full  border-black dark:border-white dark:text-white text-black" on:click={() => toggleArticle(1)}>
            {#if $menuSettings[0].show && $menuSettings[0].id === 'Article 2'}
            <div class="flex">
              <p>Menu Opened</p>
              <MdiChevronDown />
            </div>
            {:else}
            <div class="flex">
              <p>Menu Closed</p>
              <MdiChevronRight />
            </div>
            {/if}
          </button>
          <button class="text-1xl font-bold pl-12 py-3 px-6 mb-2.5 font-bold text-sm border-2 rounded-r-full rounded-tl-sm rounded-bl-full  border-black dark:border-white dark:text-white text-black" on:click={() => toggleArticle(0)}>
            {#if $menuSettings[1].show && $menuSettings[1].id === 'Article 1'}
            <div class="flex">
              <p>Menu Opened</p>
              <MdiChevronDown />
            </div>
            {:else}
            <div class="flex">
              <p>Menu Closed</p>
              <MdiChevronRight />
            </div>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
