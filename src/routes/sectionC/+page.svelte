<script lang="ts">
	import SectionPage from "$lib/components/SectionPage.svelte";
  import data from '$lib/data/20240318_data.json';

  const section = data.sections[2]

  const sectionName = section.name
  const services = section.services
</script>

<SectionPage {sectionName} {services} />
