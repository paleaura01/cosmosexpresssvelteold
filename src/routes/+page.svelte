<script>
  import '../app.css';
  import {menuStatus} from '../dashboard/provider/store.js';
  import {setContext} from 'svelte';
  import Header from '../dashboard/topnavigation/topnav.svelte';
  import SideNavigation from '../dashboard/sidenavigation/sidenav.svelte';
  
  let isDm = true;

  let tglDm = () => {
    isDm = !isDm;
  };

  setContext('tglDm', tglDm);
  setContext('isDm', isDm);
</script>

<div class="h-screen overflow-y-hidden" class:dark={isDm}>
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
          
          <button class="text-2xl pl-12 py-8" on:click={console.log(menuStatus)}
          
            >{#if $menuStatus}
              <p>Menu Opened</p>
            {:else}
              <p>Menu Closed</p>{/if}</button
          >
          <button class="text-2xl pl-12" on:click={console.log(menuStatus)}
            >Article 2</button
          >
        </div>
        <p>Rebuilding in SvelteKit!</p>
      </div>
    </div>
  </div>
</div>
