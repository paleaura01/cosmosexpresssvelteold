<script>
  import SidenavItems from './sidenavitems.svelte';
  import SidenavHeader from './sidenavheader.svelte';

  const style = {
    mobilePosition: {
      left: 'left-0',
      right: 'right-0',
    },
    close: `hidden`,
    container: `pb-32 lg:pb-6`,
    open: `absolute w-8/12 z-40 sm:w-5/12`,
    default: `bg-white shadow h-screen top-0 lg:block lg:relative lg:w-64 lg:z-auto`,
  };
</script>

<aside>
  <div class={style.container}>
    <div class='z-50 fixed bg-white dark:bg-gray-800'><SidenavHeader /></div>
    <div class='z-10 overflow-hidden py-72'><SidenavItems /></div>
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
