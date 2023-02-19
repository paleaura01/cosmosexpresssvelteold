<script>
  import SidenavItems from './sidenavitems.svelte';
  import CosmosExpressLogo from './icons/CosmosExpressLogo.svelte';
 

  const style = {
    close: `hidden`,
    container: `pb-32  lg:pb-6`,
    open: `absolute w-8/12 z-40 sm:w-5/12`,
    default: `bg-white shadow h-screen top-0 lg:block lg:relative lg:w-64 lg:z-auto`,
  };
</script>

<aside>
  <div class={style.container}>
    <div class='z-50 lg:ml-10 md:ml-10 mt-4 hidden sm:block fixed bg-white dark:bg-slate-900'><CosmosExpressLogo /></div>
    <div class='z-10 overflow-hidden hidden sm:block ml-14  py-56'><SidenavItems /></div>
  </div>
</aside>

<style>
  .scrollbar::-webkit-scrollbar {
    width: 0;
    background: transparent; /* hide sidenav scrollbar on Chrome, Opera and other webkit Browsers*/
  }
  .scrollbar {
    -ms-overflow-style: none;
  }
</style>
