<script>
  const categories = [
    ['Updates/Announcements', 'tweetbox'],
    ['Partnerships/Integrations', 'tweetbox'],
    ['Threads/Infographics', 'tweetbox'],
    ['Technology/infrastructure', 'tweetbox'],
    ['Validation', 'tweetbox'],
    ['Governance', 'tweetbox'],
    ['Security', 'tweetbox'],
    ['Testnet Announcements', 'tweetbox'],
    ['Airdrops', 'tweetbox'],
  ];

  
    let dropdownOpen = false;
    let column1Open = false;
    let column2Open = false;
    let column3Open = false;
  
    function toggleDropdown() {
      dropdownOpen = !dropdownOpen;
    }
  
    function toggleColumn1() {
      column1Open = !column1Open;
    }
  
    function toggleColumn2() {
      column2Open = !column2Open;
    }
  
    function toggleColumn3() {
      column3Open = !column3Open;
    }

    function toggleColumn4() {
      column1Open = !column1Open;
    }
  
    function toggleColumn5() {
      column2Open = !column2Open;
    }
  
    function toggleColumn6() {
      column3Open = !column3Open;
    }

    function toggleColumn7() {
      column1Open = !column1Open;
    }
  
    function toggleColumn8() {
      column2Open = !column2Open;
    }
  
    function toggleColumn9() {
      column3Open = !column3Open;
    }
  </script>
  
  <div class="relative">
    <button class="px-4 py-2 bg-blue-500 text-white rounded-lg" on:click={toggleDropdown}>
      Open Dropdown
    </button>
    
    {#if dropdownOpen}
    <div class="grid grid-cols-3">
      <div class=" top-12 right-0 z-10 w-80">
          <div class="w-1/3">
            <button class="flex-col sticky block text-white w-full px-4 py-2 text-gray-800" on:click={toggleColumn1}>
              Column 1
            </button>
            
            {#if column1Open}
              <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
               <form class="block w-full h-96 px-4 py-2 text-gray-800">Tweetbox</form>
              </div>
            {/if}
          </div>
          
          <div class="w-1/3">
            <button class="flex-col sticky text-white block w-full px-4 py-2 text-gray-800" on:click={toggleColumn2}>
              Column 2
            </button>
            
            {#if column2Open}
              <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
                <form class="block w-full h-96 px-4 py-2 text-gray-800">Tweetbox</form>
              </div>
            {/if}
          </div>
          
          <div class="w-1/3">
            <button class="flex-col sticky text-white block w-full px-4 py-2 text-gray-800" on:click={toggleColumn3}>
              Column 3
            </button>
            
            {#if column3Open}
              <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
                <form class="block w-full  h-96 px-4 py-2 text-gray-800">Tweetbox</form>
              </div>
            {/if}
          </div>
      </div>

      <div class=" top-12 right-0 z-10 w-80">
        <div class="w-1/3">
          <button class="flex-col sticky block text-white w-full px-4 py-2 text-gray-800" on:click={toggleColumn1}>
            Column 1
          </button>
          
          {#if column1Open}
            <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
             <form class="block w-full h-96 px-4 py-2 text-gray-800">Tweetbox</form>
            </div>
          {/if}
        </div>
        
        <div class="w-1/3">
          <button class="flex-col sticky text-white block w-full px-4 py-2 text-gray-800" on:click={toggleColumn2}>
            Column 2
          </button>
          
          {#if column2Open}
            <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
              <form class="block w-full h-96 px-4 py-2 text-gray-800">Tweetbox</form>
            </div>
          {/if}
        </div>
        
        <div class="w-1/3">
          <button class="flex-col sticky text-white block w-full px-4 py-2 text-gray-800" on:click={toggleColumn3}>
            Column 3
          </button>
          
          {#if column3Open}
            <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
              <form class="block w-full  h-96 px-4 py-2 text-gray-800">Tweetbox</form>
            </div>
          {/if}
        </div>
    </div>

          <div class=" top-12 right-0 z-10 w-80">
        <div class="w-1/3">
          <button class="flex-col sticky block text-white w-full px-4 py-2 text-gray-800" on:click={toggleColumn1}>
            Column 1
          </button>
          
          {#if column1Open}
            <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
             <form class="block w-full h-96 px-4 py-2 text-gray-800">Tweetbox</form>
            </div>
          {/if}
        </div>
        
        <div class="w-1/3">
          <button class="flex-col sticky text-white block w-full px-4 py-2 text-gray-800" on:click={toggleColumn2}>
            Column 2
          </button>
          
          {#if column2Open}
            <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
              <form class="block w-full h-96 px-4 py-2 text-gray-800">Tweetbox</form>
            </div>
          {/if}
        </div>
        
        <div class="w-1/3">
          <button class="flex-col sticky text-white block w-full px-4 py-2 text-gray-800" on:click={toggleColumn3}>
            Column 3
          </button>
          
          {#if column3Open}
            <div class="bg-white border border-gray-300 rounded-lg shadow-md mt-2">
              <form class="block w-full  h-96 px-4 py-2 text-gray-800">Tweetbox</form>
            </div>
          {/if}
        </div>
    </div>
</div>
    {/if}
  </div>
  