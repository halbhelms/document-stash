<script>
  export let documents
</script>

{#each documents as document}
  <h3>{document.title}</h3>
{/each}

<style>
  h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
</style>