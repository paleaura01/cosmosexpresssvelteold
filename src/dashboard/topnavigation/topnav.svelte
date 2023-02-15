<script>

	import { getContext } from 'svelte';

	let tglDm = getContext('tglDm');

</script>

<header class="h-16 md:h-20 dark:bg-gray-800 shadow bg-white items-center relative z-10">
	<div class="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10">
	<button class='dark:text-white text-black' on:click={tglDm}>Toggle Dark Mode</button>
		<div class="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
			<div class="flex items-center justify-end ml-5 mr-0 p-1 relative text-gray-700 w-full sm:mr-0 sm:right-auto">
				<a href="/" class="block pr-5">
				
				</a>
				<a href="/" class="block pr-5">
<<<<<<< HEAD
					
				</a>
				<a href="/" class="block pr-5 relative">
					
				</a>
				<a href="/" class="block relative">
					
=======
					<!-- <Skull /> -->
				</a>
				<a href="/" class="block pr-5 relative">
					<!-- <Skull /> -->
				</a>
				<a href="/" class="block relative">
					<!-- <Skull /> -->
>>>>>>> e720c3dee25b2e6b78d788caa72531dd0298d5b2
				</a>
			</div>
		</div>
	</div>
</header>
