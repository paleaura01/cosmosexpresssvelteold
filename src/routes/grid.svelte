<script>
  import {articles} from '../dashboard/provider/store.js';
  import {get} from 'svelte/store';
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
  let dropdownOpen = Array(categories.length).fill(false);

  const articlesValue = get(articles);

  function toggleDropdown(event, index) {
    const dropdown = event.target
      .closest('.dropdown-wrapper')
      .querySelector('.dropdown-list');
    dropdown.classList.toggle('hidden');
    dropdownOpen[index] = !dropdownOpen[index];
  }

  // This function returns the articles for a given category from the articles object
  function getArticlesByCategory(category) {
    const articles = articlesValue.articles[0]?.content || [];
    const categoryArticles =
      articles.find((item) => item.title === category)?.articles || [];

    if (categoryArticles.length > 0) {
      console.log(`Category "${category}" has the following articles:`);
      console.log(categoryArticles);
    }

    return categoryArticles;
  }
</script>

<div class="container">
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-7 mb-8 mt-2">
    {#each [0, 3, 6] as startIndex}
      <div class="col-span-1 lg:mb-0 -mb-6">
        {#each categories.slice(startIndex, startIndex + 3) as column, index}
          <div class="dropdown-wrapper">
            <button
              type="button"
              class="text-sm border-t border-b border-black dark:border-white border-l-0 border-r-0 pt-1 pb-1 mt-2 mb-4 w-full font-bold text-center"
              on:click={(event) => toggleDropdown(event, startIndex + index)}
            >
              <div class="flex items-center justify-center">
                {column[0]}
                {#if dropdownOpen[startIndex + index]}
                  <MdiChevronDown />
                {:else}
                  <MdiChevronRight />
                {/if}
              </div>
            </button>

            <div class="dropdown-list w-full mb-4 h-96 bg-white hidden">
              {#each getArticlesByCategory(column[0]) as article}
                <p class="block text-black">Author ID: {article.id}</p>
                <p class="block text-black">Tweet ID: {article.id}</p>
                <p class="block text-black">Text:{article.text}</p>
                <p class="block text-black">Likes: {article.public_metrics.like_count}</p>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
