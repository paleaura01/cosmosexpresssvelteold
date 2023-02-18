<script>
  import {darkModeSettings} from '../../dashboard/provider/store';
  import Header from '../../dashboard/topnavigation/topnav.svelte';
  import CosmosExpressLogo from '../../dashboard/sidenavigation/icons/CosmosExpressLogo.svelte';
  const bearerToken =
    'BEARER_TOKEN "AAAAAAAAAAAAAAAAAAAAAIqCggEAAAAAMHeTVUBdvSWseqJF2pMy7gIkRTU%3DRC2igPi4uulWsf1vuX0pTV82fMevlvX3whRhJ1LsGu8vTXgsdf"';

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

  let formSubmissions = {};

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validBoxes = boxes.filter((box) => box.twitterLink !== '');
    const formSubmissions = {};
    const categorizedData = {};

    for (const box of validBoxes) {
      const tweetId = box.twitterLink.split('/status/')[1];

      formSubmissions[tweetId] = {
        twitterLink: box.twitterLink,
        tweetId: tweetId,
        category: box.category,
      };

      try {
        const response = await fetch(
          `http://192.168.1.9:3000/api/tweets/${tweetId}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch tweet data for tweet ID ${tweetId}`);
        }

        const data = await response.json();

        if (categorizedData[box.category]) {
          categorizedData[box.category].push(data);
        } else {
          categorizedData[box.category] = [data];
        }

        formSubmissions[tweetId].tweetData = data;
      } catch (error) {
        console.error(error.message);
        // Show an error message to the user
      }
    }

    console.log(categorizedData);
  };
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
        class="h-full overflow-y-auto flex justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      >
        <div class="w-full mt-10 flex justify-center">
          <form on:submit={handleSubmit} class="w-4/5 flex flex-wrap">
            {#each boxes as box, index}
              <div class="text-sm pl-5 pr-5 w-1/2">
                <input
                  class="pt-1 pb-1 box flex-grow pl-2 text-sm bg-gray-100 border-2 border-black dark:bg-slate-900 w-full"
                  type="text"
                  bind:value={box.twitterLink}
                  on:change={() => (boxes[index] = box)}
                  placeholder="https://twitter.com/...."
                />
                <select
                  class="pt-1 pl-1 pr-10 pb-1 mt-2 bg-gray-100 border-2 text-black dark:text-white dark:border border-black dark:bg-slate-900"
                  bind:value={box.category}
                  on:change={() => (boxes[index] = box)}
                >
                  {#each categories as category, categoryIndex}
                    <option key={categoryIndex} value={category}
                      >{category}</option
                    >
                  {/each}
                </select>
              </div>
            {/each}
            <div>
              <button
                class="bg-sky-500 ml-5 mb-10 hover:bg-sky-700 text-white font-bold p-2 px-10 rounded-full"
                >Submit</button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
