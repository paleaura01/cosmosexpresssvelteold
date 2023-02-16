<script>
  import {darkModeSettings} from '../../dashboard/provider/store'
  import Header from '../../dashboard/topnavigation/topnav.svelte';
  import CosmosExpressLogo from '../../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';

  const categories = [
    'None',
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
    'Category 9',
  ];

  let boxes = Array(20).fill({twitterLink: '', category: ''});

  function updateBox(index, field, value) {
    boxes = boxes.map((box, i) => {
      if (i === index) {
        return {...box, [field]: value};
      } else {
        return box;
      }
    });
  }
</script>

<div class="h-screen overflow-y-hidden" class:dark={$darkModeSettings.isDm}>
  <div class="flex h-full">
    <a
      href="/"
      class="w-72 h-full pl-2 dark:text-white dark:bg-slate-900 z-40 overflow-y-auto overflow-x-hidden scrollbar-hide"
    >
      <CosmosExpressLogo />
    </a>
    <div class="flex flex-col w-full">
      <div class="h-20 w-full dark:text-white z-40 dark:bg-slate-900">
        <Header />
      </div>
      <div
        class="h-full overflow-y-auto flex flex-col justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      >
        <div
          class="h-full flex flex-row pr-1 flex-wrap ml-28 mt-4 justify-center items-start"
        >
          {#each boxes as box, index}
            <div class="text-sm box  p-2 w-1/2">
              <input
                class="pt-1 pb-1 mr-1 pl-2 pr-80 mt-3 text-sm bg-gray-100 border-2 border-slate-400 dark:bg-slate-900"
                type="text"
                placeholder="https://twitter.com/...."
                value={box.twitterLink}
                onInput={(e) => updateBox(index, 'twitterLink', e.target.value)}
              />
              <select
                class="pt-1 pr-10 pb-1 ml-2 bg-gray-100 border-2 text-slate-400 border-slate-400 dark:bg-slate-900"
                value={box.category}
                onChange={(e) => updateBox(index, 'category', e.target.value)}
              >
                {#each categories as category, categoryIndex}
                  <option key={categoryIndex} value={category}
                    >{category}</option
                  >
                {/each}
              </select>
            </div>
          {/each}
        </div>
        <div class="flex ml-28 pl-1  mb-7">
          <button
            class="bg-sky-500 hover:bg-sky-700 text-white font-bold  py-2 px-7 rounded-full mt-4"
            >Submit</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
