
<script>
  import '../app.css';
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
  <div class="flex h-full  dark:bg-gray-800 border-red-600 border-2">

    <div class="w-72 h-full dark:text-white dark:bg-gray-800 z-40 overflow-y-auto overflow-x-hidden scrollbar-hide" >
      <SideNavigation/>
    </div>
    <div class="flex flex-col w-full">

      <div class="h-20 w-full dark:text-white  z-40 dark:bg-gray-800">
        <Header />
      
      </div>

      <div class="h-full overflow-y-auto flex justify-center bg-gray-100 dark:bg-slate-700">
        
      </div>

    </div>
  </div>
</div>
