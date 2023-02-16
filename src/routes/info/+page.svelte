<script>
  import '../../app.css';
  import {setContext} from 'svelte';
  import Header from '../../dashboard/topnavigation/topnav.svelte';
  import CosmosExpressLogo from '../../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';

  let isDm = true;

  let tglDm = () => {
    isDm = !isDm;
  };

  setContext('tglDm', tglDm);
  setContext('isDm', isDm);

  const supporters = [
  { text: "Osmosis Icon", url: "https://osmosis.zone/" },
  { text: "Notional Icon", url: "https://notional.ventures/" },
  { text: "Interchain.Info", url: "https://interchaininfo.zone/" },
  { text: "Cosmos Spaces Icon", url: "https://cosmosspaces.zone/" },
];

const otherProjects = [
  { text: "Portfolio Manager", url: "https://docs.google.com/spreadsheets/d/1wfei9W9dcUUOzqVAzLxfQruBC1X4oZGYbQXXL4V88ss/edit?usp=sharing" },
  { text: "Cosmos Spaces Calendar", url: "https://fxtwitter.com/cosmos_spaces/status/1584634905912541184?s=46&t=2Dxc_ccAxO7lNjTgOKo61Q" },
  { text: "Interchain.Info", url: "https://interchaininfo.zone/" },
  { text: "Interchain Trollbox" },
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
        <div class="h-full ml-10 mt-7 flex flex-col items-start">
          <div class="container">
              <h1 class="mb-4 text-2xl font-bold">Supporters</h1>
              <div class="flex">
                {#each supporters as supporter}
                  <p class="mr-3 mb-4">{supporter}</p>
                {/each}
              </div>
              <div class="container " >
                <h1 class="mb-4 text-2xl font-bold">Other Development/Projects</h1>
                <div class="flex">
                  {#each otherProjects as project}
                    {#if project.url}
                      <a class="mr-3" href={project.url}>{project.text}</a>
                    {:else}
                      <p class="mr-3">{project.text}</p>
                    {/if}
                  {/each}
                </div>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
