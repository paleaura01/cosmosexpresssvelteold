<script>
    import { darkMode } from './store.js';
</script>

<div class="container" class:dark-mode={$darkMode}>
    <button on:click={() => darkMode.update(d => !d)}>
        {$darkMode ? 'Dark' : 'Light'} Mode
    </button>
</div>
