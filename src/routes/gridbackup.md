<script>
    // Importing two SVG icons from local files
    import MdiChevronDown from './icons/MdiChevronDown.svelte';
    import MdiChevronRight from './icons/MdiChevronRight.svelte';

    // Array of categories, each category has a label and a 'tweetid' value
    const categories = [    ['Updates/Announcements', 'tweetid'],
      ['Partnerships/Integrations', 'tweetid'],
      ['Threads/Infographics', 'tweetid'],
      ['Technology/infrastructure', 'tweetid'],
      ['Validation', 'tweetid'],
      ['Governance', 'tweetid'],
      ['Security', 'tweetid'],
      ['Testnet Announcements', 'tweetid'],
      ['Airdrops', 'tweetid'],
    ];
    
    // Array of categories, each category has a label and a 'tweetid' value
    let dropdownOpen = Array(categories.length).fill(false);
    
    // Function that gets called when a dropdown is clicked to toggle its visibility
    function toggleDropdown(event, index) {
      const dropdown = event.target.closest(".dropdown-wrapper").querySelector(".dropdown-list");
      dropdown.classList.toggle('hidden');
      dropdownOpen[index] = !dropdownOpen[index];
      console.log(`Dropdown ${index} is now ${dropdownOpen[index] ? 'open' : 'closed'}`);
    }
  </script>
  
 
  <div class="container">
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-7 mb-8 mt-2">
    <!-- Creates 3 columns out of the 9 category grid -->
      {#each [0, 3, 6] as startIndex}
      <div class="col-span-1 lg:mb-0  -mb-6">
        <!-- Slices 3 independant columns out of the 9 category  -->
        {#each categories.slice(startIndex, startIndex + 3) as column, index}
        <div class="dropdown-wrapper">
          <button type="button" class=" text-sm border-t border-b border-black dark:border-white border-l-0 border-r-0  pt-1 pb-1 mt-2 mb-4 w-full font-bold text-center" on:click={(event) => toggleDropdown(event, startIndex + index)}>
            
            <!-- If statement to change chevron icons when dropdown opens -->
            <div class="flex items-center justify-center">
              {column[0]}
              {#if dropdownOpen[startIndex + index]}
                <MdiChevronDown />
              {:else}
                <MdiChevronRight />
              {/if}
            </div>
          </button>

          <!-- Display the dropdown list items -->
          <div class="dropdown-list w-full mb-4 h-96 bg-white hidden">
            {#each column.slice(1) as item}
            <p class="block text-black">{item}</p>
            {/each}
            </div>
        </div>
        {/each}
      </div>
      {/each}
    </div>
  </div>