<script>
  import { articles } from '../dashboard/provider/store.js';
  import { get } from 'svelte/store';
  import MdiChevronDown from './icons/MdiChevronDown.svelte';
  import MdiChevronRight from './icons/MdiChevronRight.svelte';
 

  const categories = [
    ['Updates/Announcements', 'tweetid'],
    ['Partnerships/Integrations', 'tweetid'],
    ['Threads/Infographics', 'tweetid'],
    ['Technology/infrastructure', 'tweetid'],
    ['Validation', 'tweetid'],
    ['Governance', 'tweetid'],
    ['Security', 'tweetid'],
    ['Testnet Announcements', 'tweetid'],
    ['Airdrops', 'tweetid'],
  ];
  
  const articlesValue = get(articles);
  let dropdownOpen = Array(categories.length).fill(false);

  function toggleDropdown(event, index) {
    const dropdown = event.target
      .querySelector('.dropdown-list');
      dropdown.classList.toggle('dropdown-list-open');
    dropdownOpen[index] = !dropdownOpen[index];
  }

  // This function returns the articles for a given category from the articles object
  function getArticlesByCategory(category) {
  const articles = articlesValue.articles[0]?.content || [];

  const categoryArticles = articles.flatMap(item => item.articles)
    .filter(article => article.category === category);

  return categoryArticles;
}

</script>



<div class="w-full flex-span ">
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-10 mb-16 lg:mb-7">
    {#each [0, 3, 6] as startIndex}
      <div class="col-span-1 lg:mb-0 -mb-10" >
        {#each categories.slice(startIndex, startIndex + 3) as column, index}
          <div class="dropdown-wrapper">
            <button
              type="button"
              class=" text-sm border-t border-b border-black dark:border-white border-l-0 border-r-0 py-1 mt-4 w-full font-bold text-center"
              on:click={(event) => toggleDropdown(event, startIndex + index)
              
              }>
             
              <div class="flex items-center justify-center">
                {column[0]}
                {#if dropdownOpen[startIndex + index]}
                  <MdiChevronDown />
                {:else}
                  <MdiChevronRight />
                {/if}
              </div>
            
            </button>

            <div class="dropdown-list border-t-0 rounded-br-md rounded-bl-md border-b border-black dark:border-white border-l border-r w-full dark:bg-slate-900 mb-4 h-38% md:h-47% lg:h-43%  bg-white">

                {#each getArticlesByCategory(column[0]) as article}
                <div class="bg-white dark:bg-slate-900 shadow-md  ">
                  <div class="flex items-start ">
                    <img
                      class="h-10 w-10 rounded-full mr-4"
                      src={article.profile_image_url}
                      alt="Profile Img"
                    />
                    <div class="flex-grow">
                      <div class="flex items-center">
                        <h2 class="font-semibold mr-2">{article.name}</h2>
                        <span class="text-gray-600">@{article.author_name}</span>
                        <span class="text-gray-600 mx-2">•</span>
                        <span class="text-gray-600">2h</span>
                      </div>
                      <p class="text-gray-900 dark:text-white mt-1">
                        {article.text}
                      </p>
                      <div class="mt-2">
                        <a
                          href="/"
                          class="text-blue-500 hover:text-blue-700 mr-4"
                          >Reply</a
                        >
                        <a
                          href="/"
                          class="text-gray-600 hover:text-gray-800 mr-4"
                          >Retweet</a
                        >
                        <a href="/" class="text-gray-600 hover:text-gray-800"
                          >Like</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
