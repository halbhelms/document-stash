<script>
  export let data
  const { availableDoc } = data

  import DocumentEditor from '$lib/components/DocumentEditor.svelte'
  import AccessDenied from '$lib/components/AccessDenied.svelte'
</script>


<h2>Viewer for Document</h2>

{#if availableDoc}
  <DocumentEditor document={availableDoc} />
{:else}
  <AccessDenied/>
{/if}

