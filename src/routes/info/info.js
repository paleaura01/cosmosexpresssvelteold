<script>
  const supporters = [
    "Osmosis Icon",
    "Cosmos Spaces Icon",
    "Interchain.Info icon",
    "Notional Icon",
    "Atlas Dao Icon",
    "Stakewolle Icon"
  ];

  const otherProjects = [
    "Portfolio Manager",
    "Cosmos Spaces Calendar",
    "Interchain.Info",
    "Atlas Dao NFT Tool"
  ];
</script>

<div class="container py-4 mx-auto">
  <h1 class="mb-4 text-2xl font-bold">My Supporters</h1>
  <div class="flex">
    {#each supporters as supporter}
      <p class="mr-3">{supporter}</p>
    {/each}
  </div>
  <div class="container py-4 mx-auto" style="position: absolute">
    <h1 class="mb-4 text-2xl font-bold">Other Development/Projects</h1>
    <div class="flex">
      {#each otherProjects as project}
        <p class="mr-3">{project}</p>
      {/each}
    </div>
  </div>
</div>