<script>
  import { useState } from 'svelte';
  import { Link } from 'svelte-routing';

  const initialBoxes = [
    { twitterLink: "", category: "" },
    { twitterLink: "", category: "" },
    { twitterLink: "", category: "" },
    { twitterLink: "", category: "" }
  ];

  let boxes = initialBoxes;

  const handleTwitterLinkChange = (event, index) => {
    const newBoxes = [...boxes];
    newBoxes[index].twitterLink = event.target.value;
    boxes = newBoxes;
  };

  const handleCategoryChange = (event, index) => {
    const newBoxes = [...boxes];
    newBoxes[index].category = event.target.value;
    boxes = newBoxes;
  };

  const categories = ["None", "Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7", "Category 8", "Category 9"];
</script>

<div>
  {#each boxes as box, index}
    <div class="text-sm box" key={index}>
      <input 
        class="pt-1 pb-1 pr-56 mt-3 text-sm bg-gray-100 border-2 border-slate-400 dark:bg-slate-900"
        type="text"
        placeholder="https://twitter.com/...."
        value={box.twitterLink}
        on:input={(event) => handleTwitterLinkChange(event, index)}
      />
      <select 
        class="pt-1 pb-1 ml-2 bg-gray-100 border-2 text-slate-400 border-slate-400 dark:bg-slate-900"
        value={box.category}
        on:change={(event) => handleCategoryChange(event, index)}
      >
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
  {/each}
</div>
