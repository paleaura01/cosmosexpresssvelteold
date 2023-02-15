<script>
    import '../../app.css';
    import { setContext } from 'svelte';
    import { getContext } from 'svelte';
    import Header from '../../dashboard/topnavigation/topnav.svelte';
    import SideNavigation from '../../dashboard/sidenavigation/sidenav.svelte';
    import CosmosExpressLogo from '../../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';
  
    let isDm = true;
    let tglDm = getContext('tglDm');
    setContext('isDm', isDm);
  
    const categories = ["None", "Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7", "Category 8", "Category 9"];
  
    let boxes = Array(19).fill({ twitterLink: "", category: "" });
  
    function updateBox(index, field, value) {
      boxes = boxes.map((box, i) => {
        if (i === index) {
          return { ...box, [field]: value };
        } else {
          return box;
        }
      });
    }
  
  
 
  </script>
  
  <div class="h-screen overflow-y-hidden" class:dark={isDm}>
    <div class="flex h-full  ">
      <a href="/" class="w-72 h-full pl-2 dark:text-white dark:bg-slate-900 z-40 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <CosmosExpressLogo />
      </a>
      <div class="flex flex-col w-full">
        <div class="h-20 w-full dark:text-white  z-40 dark:bg-slate-900">
          <Header />
        </div>
  
        <div class="h-full overflow-y-auto  flex flex-col justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <div class="h-full flex flex-col ml-5 mt-2 items-start">
            {#each boxes as box, index}
              <div key={index} class="text-sm box">
                <input class="pt-1 pb-1 pr-56 mt-3 text-sm bg-gray-100 border-2 border-slate-400 dark:bg-slate-900" type="text" placeholder="https://twitter.com/...." value={box.twitterLink} onInput={(e) => updateBox(index, 'twitterLink', e.target.value)} />
                <select class="pt-1 pb-1 ml-2 bg-gray-100 border-2 text-slate-400 border-slate-400 dark:bg-slate-900" value={box.category} onChange={(e) => updateBox(index, 'category', e.target.value)}>
                  {#each categories as category, categoryIndex}
                    <option key={categoryIndex} value={category}>{category}</option>
                  {/each}
                </select>
              </div>
            {/each}
  
           
          </div>
      </div>
    </div>
  </div></div>
