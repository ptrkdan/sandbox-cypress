<script lang="ts">
	import SectionModal from "./SectionModal.svelte";

  export let sectionName = "Section Name";
  export let services = [
    { name: "Service 1", number: 1 },
    { name: "Service 2", number: 2 },
    { name: "Service 3", number: 3 },
  ];

  let currentServiceName = '';
  let currentServiceNumber = 0;
  let isModalOpen = false;
	const showModal = (name: string, number: number) => {
    console.log('Opening modal');
		currentServiceName = name;
    currentServiceNumber = number;
    isModalOpen = true;
	}
</script>

<main>
  <h1 data-cy="section-name">{sectionName}</h1>
  <ul>
    {#each services as service}
      <li>
        <button data-cy="show-service" on:click={() => showModal(service.name, service.number)}>
          <p>{service.name}</p>
        </button>
      </li>
    {/each}
  </ul>
</main>
<SectionModal 
  isOpen={isModalOpen}
  serviceName={currentServiceName}
  serviceNumber={currentServiceNumber}
  on:closeModal={() => isModalOpen = false}  
/>

<style>
  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 10px;
  }
</style>
