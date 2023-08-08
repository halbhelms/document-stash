<script>
  let editorContents = ""
  import Editor from '@tinymce/tinymce-svelte'
  let conf = {
    plugins: 'table',
    toolbar: 'h1 h2 h3 hr | undo redo | styles | bold italic strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | table | copy cut paste | fontfamily fontsize | print'
  }
  // import { tinymce } from '@tinymce/tinymce-svelte';
  // tinymce.init({
  //   menubar: 'file edit insert view format table tools help'
  // })
</script>

<h2>Creator for Document</h2>

<Editor 
  apiKey="193d7ugpni1u1hgvxyhhyvm4bi8wtimmni33gnyxrfcrl815" 
  bind:value = {editorContents}
  {conf}
/>

<div>{@html editorContents}</div>
<textarea bind:value={editorContents}></textarea>