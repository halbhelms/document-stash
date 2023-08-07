<script>
  import DocumentEditor from '$lib/components/DocumentEditor.svelte'
  export let data
  const { document } = data
</script>
<h2>Editor for Document</h2>
<main>
  <DocumentEditor document={document} />
</main>