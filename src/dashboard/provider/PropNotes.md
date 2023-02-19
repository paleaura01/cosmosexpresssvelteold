Yes, you can pass data as props to child components instead of storing it in your store file to avoid double rendering.

In Svelte, when you pass data from a parent component to a child component as a prop, any changes to the prop in the parent component will trigger a re-render of the child component, but not of the parent component. This means that if you're passing data down to a child component and updating it frequently, it won't cause double rendering in the parent component.

Here's an example of how you can pass data as props from a parent component to a child component in Svelte:

php
Copy code
<!-- ParentComponent.svelte -->
<script>
  import ChildComponent from './ChildComponent.svelte';
  
  let data = ['item 1', 'item 2', 'item 3'];
  
  function handleClick() {
    data.push('new item');
  }
</script>

<button on:click={handleClick}>Add Item</button>

<ChildComponent data={data} />

<!-- ChildComponent.svelte -->
<script>
  export let data;
</script>

<ul>
  {#each data as item}
    <li>{item}</li>
  {/each}
</ul>
In this example, we have a parent component called ParentComponent and a child component called ChildComponent. The parent component has an array of data called data, and when the "Add Item" button is clicked, a new item is added to the data array.

The data array is then passed down to the ChildComponent as a prop using the data={data} syntax. The ChildComponent receives the data prop as an input variable using export let data, and renders a list of items based on the data array.

Because the ChildComponent only receives the data array as a prop and doesn't modify it directly, any changes to the data array in the ParentComponent won't trigger a re-render of the ParentComponent. Instead, only the ChildComponent will re-render when the data prop changes.