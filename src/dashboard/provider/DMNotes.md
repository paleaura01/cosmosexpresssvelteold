Gritz

when im in darkmode the lightmode flashes before changing back to darkmode when i refrehs
This issue may be caused by the fact that the page initially loads with the default light mode settings, and then the dark mode settings are applied after the darkModeSettings are fetched from local storage.

One way to avoid this issue is to hide the content until the darkModeSettings are fetched from local storage and applied. Here's an example of how you can do this:

Add a CSS class to the body tag when darkModeSettings are being applied:
html
Copy code

<!-- App.svelte -->

<script>
  import { darkModeSettings } from './store.js';
  import './app.css';
  import Header from './Header.svelte';
  import Content from './Content.svelte';
  import Footer from './Footer.svelte';
  
  $darkModeSettings // subscribe to changes in darkModeSettings
    .subscribe(value => {
      document.body.classList.add('loading'); // add the 'loading' class to body
    })
    .unsubscribe();
  
  $darkModeSettings // subscribe again
    .subscribe(value => {
      document.body.classList.remove('loading'); // remove the 'loading' class from body
    })
    .unsubscribe();
</script>

<!-- Add the 'loading' class to the body tag when dark mode is being applied -->
<style>
  .loading {
    visibility: hidden;
  }
</style>

<!-- The main app content -->
<div class="app">
  <Header />
  <Content />
  <Footer />
</div>


Add some CSS styles to hide the content until the darkModeSettings are applied:
css
Copy code

/* app.css */

body.loading .app {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

body.loading .loading-spinner {
  display: block;
}


Add a loading spinner to show that the app is still loading:
html

Copy code

<!-- App.svelte -->
<div class="loading-spinner"></div>

With these changes, the content of the app will be hidden until the darkModeSettings are fetched from local storage and applied, which should prevent the white flash that you're seeing.