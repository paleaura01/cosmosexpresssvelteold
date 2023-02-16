<script>
  import '../app.css';
  import { darkModeSettings, menuSettings } from '../dashboard/provider/store.js';
  import Header from '../dashboard/topnavigation/topnav.svelte';
  import CosmosExpressLogo from '../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';
  import SideNavigation from '../dashboard/sidenavigation/sidenav.svelte';
  
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
        <div class="h-full flex flex-col items-start">
          <button class="text-2xl pl-12 py-8"
            >{#if $menuSettings.show && $menuSettings.id === 'Article 2'}
              <p>Menu Opened</p>
            {:else}
              <p>Menu Closed</p>{/if}</button
          >
          <button class="text-2xl pl-12">{#if $menuSettings.show && $menuSettings.id === 'Article 1'}
            <p>Menu Opened</p>
          {:else}
            <p>Menu Closed</p>{/if}</button>
        </div>
      </div>
    </div>
  </div>
</div>
