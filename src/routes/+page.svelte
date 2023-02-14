<script>
  import '../app.css';
  import { onMount } from 'svelte';

  let isDarkMode = false;

  onMount(() => {
    // Check if the user has set their preference for dark mode in their browser
    isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
  }
</script>

<div class="h-screen" class:dark={isDarkMode}>
  <div class="flex h-full bg-gray-400 dark:bg-gray-800 border-red-600 border-2">
    <div class="w-60 h-full bg-gray-400 dark:bg-gray-800 z-40" class:dark-mode={isDarkMode}>Sidebar</div>
    <div class="flex flex-col w-full">
      <div class="h-24 w-full bg-gray-400 z-40 dark:bg-gray-800" class:dark={isDarkMode}>
        Nav
        <div class=" bg-gray-400 dark:bg-gray-800"  >
          This div has a light background in light mode and a dark background in dark mode.
        </div>
        <button on:click={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
      <div class="h-full overflow-y-scroll flex justify-center dark:bg-slate-700" class:dark-mode={isDarkMode}>
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
