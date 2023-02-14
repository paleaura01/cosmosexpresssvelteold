<script>
  import '../app.css'; 

  let isDm = false;
  function tglDM() {
    isDm = !isDm;
  }
</script>

<div class="h-screen" class:dark={isDm}>
  <div class="flex h-full bg-gray-400 dark:bg-gray-800 border-red-600 border-2">
    <div class="w-60 h-full bg-gray-400 dark:bg-gray-800 z-40" >Sidebar</div>
    <div class="flex flex-col w-full">
      <div class="h-24 w-full bg-gray-400 z-40 dark:bg-gray-800">
        Nav
        <button on:click={tglDM}>Toggle Dark Mode</button>
      </div>
      <div class="h-full overflow-y-scroll flex justify-center dark:bg-slate-700">
        <div class="w-11/12 flex h-full text-white flex-col">
          <div class="h-1/5 flex w-full space-x-6 justify-between border">
            <div class="dark:text-white w-1/3 flex flex-col">
              <div class="bg-red-500 h-16 flex-grow"></div>
              <div class="bg-green-500 h-16 flex-grow"></div>
              <div class="bg-blue-500 h-16 flex-grow"></div>
            </div>
            <div class="dark:text-white w-1/3 flex flex-col">
              <div class="bg-yellow-900 h-16 flex-grow"></div>
              <div class="bg-pink-200 h-16 flex-grow"></div>
              <div class="bg-orange-400 h-16 flex-grow"></div>
            </div>
            <div class="dark:text-white w-1/3 flex flex-col">
              <div class="bg-yellow-500 h-16 flex-grow"></div>
              <div class="bg-pink-500 h-16 flex-grow"></div>
              <div class="bg-gray-500 h-16 flex-grow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
