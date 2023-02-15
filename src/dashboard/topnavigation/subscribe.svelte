<script>
  import MdiAlphaXBoxOutline from './icons/MdiAlphaXBoxOutline.svelte'
  
    const platforms = [
      { name: "Twitter", link: "https://twitter.com/Cosmos_Express" },
      { name: "Telegram", link: "https://t.me/Cosmos_Express" },
      { name: "Discord", link: "https://discord.gg/4xRQ5JBr" },
      { name: "Reddit", link: "https://www.reddit.com/r/Cosmos_Express/" },
      { name: "Email", link: "cosmos.express@gmx.com" }
    ];
  
    let showPopout = false;
  
    const handleSubscribe = (link) => {
      if (link.includes("@")) {
        navigator.clipboard.writeText(link);
        alert("Email copied to your clipboard!");
      } else {
        window.open(link);
      }
      showPopout = false;
    };
  
    const closePopout = () => {
      showPopout = false;
    };
  </script>
  
  <button class="flex items-center px-4 mr-4 py-2 font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-3xl text-md" on:click={() => (showPopout = true)}>
    Subscribe
  </button>
  
  {#if showPopout}
    <div class="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-75" on:click|self={closePopout}>
      <div class="flex items-center justify-center h-full p-8 rounded-lg shadow-lg">
        <div class="relative flex flex-col p-12 bg-gray-100 bg-opacity-50 rounded-lg dark:bg-opacity-50 dark:bg-slate-900" on:click|stopPropagation>
          {#each platforms as platform (platform.link)}
            <button class="w-64 p-4 m-4 font-bold text-gray-400 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white" on:click={() => handleSubscribe(platform.link)} key={platform.link}>
              {platform.name}
            </button>
          {/each}
          <div class="absolute top-0 right-0 m-6">
            <button class="p-1 font-bold text-white bg-red-500 border-white rounded-lg hover:bg-red-600" on:click={() => (showPopout = false)}><MdiAlphaXBoxOutline />
            </button>
          </div>
        </div>
        
      </div>
      
    </div>
  {/if}
  