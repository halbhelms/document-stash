<script>
  export let data
  const { document } = data

  import DocumentEditor from '$lib/components/DocumentEditor.svelte'
</script>
<h2>Viewer for Document</h2>

<DocumentEditor document={document} />