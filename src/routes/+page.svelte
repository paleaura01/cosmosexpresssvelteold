<script>
  import '../app.css';

  let isDarkMode = false;
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
  }
</script>

<div class="h-screen" class:dark={isDarkMode}>
  <div class="flex h-full bg-gray-400 dark:bg-gray-800 border-red-600 border-2">
    <div class="w-60 h-full bg-gray-400 dark:bg-gray-800 z-40" >Sidebar</div>
    <div class="flex flex-col w-full">
      <div class="h-24 w-full bg-gray-400 z-40 dark:bg-gray-800">
        Nav
        <div class=" bg-gray-400 dark:bg-gray-800"  >
          This div has a light background in light mode and a dark background in dark mode.
        </div>
        <button on:click={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
      <div class="h-full overflow-y-scroll flex justify-center dark:bg-slate-700">
        <div class="w-11/12 flex h-full text-white flex-col">
          <div class="h-1/5 flex w-full justify-between border">
            <div class="dark:text-white">Position Left</div>
            <div class="dark:text-white">Position Mid</div>
            <div class="dark:text-white">Position Right</div>
          </div>
          <div class="h-32">Time/Date Row</div>
          <div class="dark:text-white">Big Cards</div>
        </div>
      </div>
    </div>
  </div>
</div>
