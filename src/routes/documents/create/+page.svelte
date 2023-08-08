<script>
  export let data
  const {addNewDocument} = data
  let docContents = {
    editorContents: "",
    title: "",
    author: ""
  }
  import Editor from '@tinymce/tinymce-svelte'
  let conf = {
    plugins: 'table',
    height: 500,
    toolbar: 'h1 h2 h3 hr | undo redo | styles | bold italic strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | table | copy cut paste | fontfamily fontsize | print'
  }
  function saveDocument(event){
    addNewDocument(docContents)
  }
</script>

<h2>Creator for Document</h2>
<!-- We need an input box for the author name and one for the title of the doc -->

<div id="options">

  <p>
    <label for="author">Author:</label>
    <input id="author" placeholder="author name here" bind:value = {docContents.author}/>
  </p>

  <p>
    <label for="title">Title:</label>
    <input id="title" placeholder="document title here" bind:value = {docContents.title}/>
  </p>

</div>
  

<Editor 
  apiKey="193d7ugpni1u1hgvxyhhyvm4bi8wtimmni33gnyxrfcrl815" 
  bind:value = {docContents.editorContents}
  {conf}
/>

<button on:click={saveDocument}>Save</button>

<style>
  label {
    display: inline-block;
    width: 200px; 
    text-align: right; 
    margin-right: 10px;
    margin-bottom: 10px;
  }
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  #options {
    margin-bottom: 20px;
  }
</style>