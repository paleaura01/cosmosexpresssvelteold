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
</script>

<div class="h-screen" class:dark={isDm}>
  <div class="flex h-full  dark:bg-gray-800 border-red-600 border-2">
    <div class="w-72 h-full dark:text-white dark:bg-gray-800 z-40">
      <SideNavigation />
    </div>
    <div class="flex flex-col w-full">
      <div class="h-20 w-full dark:text-white  z-40 dark:bg-gray-800">
        <Header />
      </div>

      <div
        class="h-full overflow-y-scroll flex justify-center bg-gray-100 dark:bg-slate-700"
      >
        <div class="w-11/12 flex h-full text-white flex-col">
          <div
            class="h-full flex flex-col items-center w-full justify-between border"
          >
            <div class="dark:text-white w-1/3 flex justify-between w-full">
              <div class="bg-red-500 h-16 w-1/6" />
              <div class="bg-green-500 h-16 w-1/6" />
              <div class="bg-blue-500 h-16 w-1/6" />
            </div>
            <div class="dark:text-white w-1/3 flex">
              <div class="bg-yellow-900 h-16 flex-grow" />
              <div class="bg-pink-200 h-16 flex-grow" />
              <div class="bg-orange-400 h-16 flex-grow" />
            </div>
            <div class="dark:text-white w-1/3 flex">
              <div class="bg-yellow-500 h-16 flex-grow" />
              <div class="bg-pink-500 h-16 flex-grow" />
              <div class="bg-gray-500 h-16 flex-grow" />
            </div>
            <div class="dark:text-white w-1/3 flex">
              <div class="bg-yellow-500 h-16 flex-grow" />
              <div class="bg-pink-500 h-16 flex-grow" />
              <div class="bg-gray-500 h-16 flex-grow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
