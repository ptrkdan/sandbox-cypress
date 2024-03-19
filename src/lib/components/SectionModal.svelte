<script lang="ts">
	import { createEventDispatcher } from "svelte";


  export let isOpen = false;
  export let serviceName = "Service Name";
  export let serviceNumber = 0;

  const dispatch = createEventDispatcher();
  const onCloseModalClick = () => {
    dispatch("closeModal");
  }
</script>

{#if isOpen}
  <div class="modal">
    <h2 data-cy="service-name">{serviceName}</h2>
    <p data-cy="service-number">{serviceNumber}</p>
    <button on:click={onCloseModalClick}>Close Modal</button>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
