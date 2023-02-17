<script>
  import {darkModeSettings} from '../../dashboard/provider/store';
  import {articles} from '../../dashboard/provider/store';
  import Header from '../../dashboard/topnavigation/topnav.svelte';
  import CosmosExpressLogo from '../../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';

  const categories = [
    'Updates/Announcements',
    'Partnerships/Intergrations',
    'Threads/Infographics',
    'Technology/Infrastructure',
    'Validation',
    'Governance',
    'Security',
    'Testnet Announcements',
    'Airdrops',
  ];

  categories.sort((a, b) => a.localeCompare(b));

  let boxes = Array.from({length: 16}, () => ({twitterLink: '', category: ''}));

  function updateBox(index, field, value) {
    boxes = boxes.map((box, i) => {
      if (i === index) {
        return {...box, [field]: value};
      } else {
        return box;
      }
    });
  }

  function handleSubmit(event) {
    // Prevent default browser behavior
    event.preventDefault();

    // Get the form data as an array of key-value pairs
    let formData = new FormData(event.target);

    // Loop through each pair and extract the id from the url
    for (let [key, value] of formData.entries()) {
      if (key.startsWith('twitterLink')) {
        // Split the url by "/" and get the last element
        let id = value.split('/').pop();
        // Update the form data with the id instead of the url
        formData.set(key, id);
      }
    }

    // Do something with the form data, such as sending it to a server or logging it to console
    console.log(formData);
  }
</script>

<div class="h-screen overflow-y-hidden" class:dark={$darkModeSettings.isDm}>
  <div class="flex h-full">
    <a href="/" class="w-72 h-full pl-2 dark:text-white dark:bg-slate-900 z-40 overflow-y-auto overflow-x-hidden scrollbar-hide">
      <CosmosExpressLogo />
    </a>
    <div class="flex flex-col w-full">
      <div class="h-20 w-full dark:text-white z-40 dark:bg-slate-900">
        <Header />
      </div>
      <div class="h-full overflow-y-auto flex justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        <div class="w-full mt-10 flex justify-center">
          <form on:submit={handleSubmit} class="w-4/5 flex flex-wrap">
            {#each boxes as box, index}
              <div class="text-sm pl-5 pr-5 w-1/2">
                <input class="pt-1 pb-1 box flex-grow pl-2 text-sm bg-gray-100 border-2 border-black dark:bg-slate-900 w-full" type="text" bind:value={box.twitterLink} placeholder="https://twitter.com/...." />
                <select class="pt-1 pr-10 pb-1 mt-2 bg-gray-100 border-2 text-black dark:text-white dark:border border-black dark:bg-slate-900" bind:value={box.category}>
                  {#each categories as category, categoryIndex}
                    <option key={categoryIndex} value={category}>{category}</option>
                  {/each}
                </select>
              </div>
            {/each}
            <div>
            <button class="bg-sky-500 ml-5 mb-10 hover:bg-sky-700 text-white font-bold p-3 px-10 rounded-full" >Submit</button>
          </div>
          </form>
          
        </div>
        
      </div>
    </div>
  </div>
</div>