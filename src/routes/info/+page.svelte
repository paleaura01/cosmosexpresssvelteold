<script>
  import '../../app.css';
  import {darkModeSettings} from '../../dashboard/provider/store.js';
  import Header from '../../dashboard/topnavigation/topnav.svelte';
  import CosmosExpressLogo from '../../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';
  import CosmosSpacesLogo from './icons/CosmosSpacesLogo.png'
  import NotionalLogo from './icons/NotionalLogo.png'
  import InterchainInfoLogo from './icons/InterchainInfoLogo.svelte'
  import OsmosisLogo from './icons/OsmosisLogo.svelte'
  import PortfolioTrackerLogo from './icons/PortfolioTrackerLogo.png'
  import CosmosSpacesCalendarLogo from './icons/CosmosSpacesCalendarLogo.png'
</script>

<div class="h-screen overflow-y-hidden" class:dark={$darkModeSettings.isDm}>
  <div class="flex h-full   ">
    <a href="/"
      class="w-72 h-full dark:text-white pl-2 dark:bg-slate-900 z-40 overflow-y-auto overflow-x-hidden scrollbar-hide">
      <CosmosExpressLogo />
    </a>
    <div class="flex flex-col w-full">
      <div class="h-20 w-full dark:text-white  z-40 ">
        <Header />
      </div>
      <div class="h-full overflow-y-auto flex flex-col justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        <div class="h-full ml-10 mt-7 flex flex-col items-start">
          <div class="container">
            <h1 class="mb-4 text-4xl font-bold">Supporters</h1>
            <div class="flex pt-3 mb-10">
              <div class="flex ">
                <a
                href="https://linktr.ee/Cosmostwitterspaces"
                class="mr-5 ml-2 pt-2">
                <OsmosisLogo  />
              </a>
              </div>
              <div class="flex ">
                <a href="https://notional.ventures/" class="mr-5 ml-5 pt-5 block dark:text-white text-gray-700">
                  <img height="120" width="120" src={NotionalLogo} alt="Notional Logo">
                </a>
              </div>
            <div class="flex">
              <a href="https://linktr.ee/Cosmostwitterspaces" class="mr-5 ml-5 block dark:text-white text-gray-700">
                <img height="80" width="80" src={CosmosSpacesLogo} alt="Cosmos Spaces Logo">
              </a>
            </div>
            <div class="flex">
              <a
              href="https://linktr.ee/Cosmostwitterspaces"
              class="ml-5 pt-1">
              <InterchainInfoLogo  />
            </a>
            </div>
          </div>
            <div class="container" >
              <h1 class="mb-4 text-2xl font-bold">Other Development/Projects</h1>
              <div class="flex pt-3">
                <div class="flex ml-2">
                  <div class="flex-col">
                  <a href="https://docs.google.com/spreadsheets/d/1wfei9W9dcUUOzqVAzLxfQruBC1X4oZGYbQXXL4V88ss/edit?usp=sharing" class="ml-6 block dark:text-white text-gray-700">
                    <img class="border-2 border-slate-400 dark:border-gray-400 rounded-full" height="80" width="80" src={PortfolioTrackerLogo} alt="PortfolioTracker Logo">
                  </a>
                  <div class="mt-2 font-bold">
                    <p>Portfolio Tracker</p>
                    <p class="ml-4">Spreadsheet</p>
                    </div>
                  </div>
                </div>
                <div class="flex-col ml-5">
                  <a href="https://fxtwitter.com/cosmos_spaces/status/1584634905912541184?s=46&t=2Dxc_ccAxO7lNjTgOKo61Q" class="mr-5 ml-6 block dark:text-white text-gray-700">
                    <img class="border-2 border-slate-300 dark:border-gray-400 rounded-full" height="80" width="80" src={CosmosSpacesCalendarLogo} alt="CosmosSpacesCalendar Logo">
                  </a>
                  <div class="mt-2 ml-2 font-bold">
                  <p>Cosmos Spaces</p>
                  <p class="ml-6">Calendar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</div>

<!-- const supporters = [
  { text: "Osmosis Icon", url: "https://osmosis.zone/" },
  { text: "Notional Icon", url: "https://notional.ventures/" },
  { text: "Interchain.Info", url: "https://interchaininfo.zone/" },
  { component: "cosmosspaces", url: "https://linktr.ee/Cosmostwitterspaces" },
];

const otherProjects = [
  { text: "Portfolio Manager", url: "https://docs.google.com/spreadsheets/d/1wfei9W9dcUUOzqVAzLxfQruBC1X4oZGYbQXXL4V88ss/edit?usp=sharing" },
  { text: "Cosmos Spaces Calendar", url: "https://fxtwitter.com/cosmos_spaces/status/1584634905912541184?s=46&t=2Dxc_ccAxO7lNjTgOKo61Q" },
  { text: "Interchain.Info", url: "https://interchaininfo.zone/" },
  { text: "Interchain Trollbox" },
]; -->