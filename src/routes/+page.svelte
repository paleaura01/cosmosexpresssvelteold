

<script>
  import '../app.css';
  import Header from '../dashboard/topnavigation/topnav.svelte'
  import SideNavigation from '../dashboard/sidenavigation/sidenav.svelte';

  let isDm = false;
  function tglDM() {
    isDm = !isDm;
  }
</script>

<div class="h-screen" class:dark={isDm}>
  <div class="flex h-full  dark:bg-gray-800 border-red-600 border-2">

    <div class="w-72 h-full dark:text-white  dark:bg-gray-800 z-40" >
      <SideNavigation></SideNavigation>
    </div>
    <div class="flex flex-col w-full">

      <div class="h-20 w-full dark:text-white  z-40 dark:bg-gray-800">
        <Header >
       
        </Header>
        <button on:click={tglDM}>Toggle Dark Mode</button>
      </div>

      <div class="h-full overflow-y-scroll flex justify-center bg-gray-100 dark:bg-slate-700">
        <div class="w-11/12 flex h-full text-white flex-col">
          <div class="h-1/5 flex w-full space-x-6 justify-between border">
            <div class="dark:text-white w-1/3 flex flex-col">
              <div class="bg-red-500 h-16 flex-grow"></div>
              <div class="bg-green-500 h-16 flex-grow"></div>
              <div class="bg-blue-500 h-16 flex-grow"></div>
            </div>
            <div class="dark:text-white w-1/3 flex flex-col">
              <div class="bg-yellow-900 h-16 flex-grow"></div>
              <div class="bg-pink-200 h-16 flex-grow"></div>
              <div class="bg-orange-400 h-16 flex-grow"></div>
            </div>
            <div class="dark:text-white w-1/3 flex flex-col">
              <div class="bg-yellow-500 h-16 flex-grow"></div>
              <div class="bg-pink-500 h-16 flex-grow"></div>
              <div class="bg-gray-500 h-16 flex-grow"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
