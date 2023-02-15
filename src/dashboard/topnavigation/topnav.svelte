<script>
	import { getContext } from 'svelte';
	import SubscribeButton from './subscribe.svelte';
	import MidiCog from './icons/MidiCog.svelte'
	import MdiInformationOutline from './icons/MdiInformationOutline.svelte'
	import MdiWhiteBalanceSunny from './icons/MdiWhiteBalanceSunny.svelte'
	import MdiMoonWaningCrescent from './icons/MdiMoonWaningCrescent.svelte'

	let isDarkMode = false;
	let tglDm = getContext('tglDm');

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		tglDm(isDarkMode);
	}
</script>

<header class="h-20 dark:bg-slate-900 shadow bg-white items-center relative z-40">
	<div class="flex flex-center flex-col h-full justify-center  relative  text-white z-40">
	
		<div class=" relative w-full ">
			
			<div class="flex items-center justify-end relative text-gray-700 w-full ">
				
				<a href="/retweetpanel" class="mr-4 block dark:text-white text-gray-700">
					<MidiCog />
				</a>
				<div class="block pr-3  dark:text-white text-gray-700">
					<button class='dark:text-white mt-1.5 text-gray-700' on:click={toggleDarkMode}>
						{#if isDarkMode}
						<div class=' text-yellow-500'>
						<MdiWhiteBalanceSunny />
						</div>
					{:else}
					<div>
						<MdiMoonWaningCrescent />
					</div>
					{/if}
				  </button>
					  
					
				</div>
				<a href="/info" class="block pr-5 dark:text-white text-gray-700 relative">
					<MdiInformationOutline />
				</a>
				<div class="block relative pr-5">
					<SubscribeButton />
				</div>
				
			</div>
			
		</div>
	</div>
</header>
