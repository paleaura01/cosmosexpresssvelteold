<script>
    import '../../app.css';
    import {setContext} from 'svelte';
    import Header from '../../dashboard/topnavigation/topnav.svelte';
    import CosmosExpressLogo from '../../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';
    import SideNavigation from '../../dashboard/sidenavigation/sidenav.svelte';
    let isDm = true;
  
    let tglDm = () => {
      isDm = !isDm;
    };
  
    setContext('tglDm', tglDm);
    setContext('isDm', isDm);

    const supporters = [
    "Osmosis Icon",
    "Notional Icon",
    "Interchain.Info icon",
    "Cosmos Spaces Icon",
  ];

  const otherProjects = [
    "Portfolio Manager",
    "Cosmos Spaces Calendar",
    "Interchain.Info",
    "Interchain Trollbox"
  ];
  </script>
  
  <div class="h-screen overflow-y-hidden" class:dark={isDm}>
    <div class="flex h-full   ">
      <a href="/"
        class="w-72 h-full dark:text-white pl-2 dark:bg-slate-900 z-40 overflow-y-auto overflow-x-hidden scrollbar-hide"
      >
        <CosmosExpressLogo />
    </a>
      <div class="flex flex-col w-full">
        <div class="h-20 w-full dark:text-white  z-40 ">
          
          <Header />
          
        </div>
  
        <div
          class="h-full overflow-y-auto flex flex-col justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        >
          <div class="h-full ml-5 mt-3 flex flex-col items-start">
            <div class="container">
                <h1 class="mb-4 text-2xl font-bold">My Supporters</h1>
                <div class="flex">
                  {#each supporters as supporter}
                    <p class="mr-3 mb-4">{supporter}</p>
                  {/each}
                </div>
                <div class="container " >
                  <h1 class="mb-4 text-2xl font-bold">Other Development/Projects</h1>
                  <div class="flex">
                    {#each otherProjects as project}
                      <p class="mr-3">{project}</p>
                    {/each}
                  </div>
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  