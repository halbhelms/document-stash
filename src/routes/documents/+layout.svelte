<script>
  import DocumentNavigation from '$lib/components/DocumentNavigation.svelte'

  export let data
  const { filteredDocs } = data
</script>

<main>
  <div id="nav"><DocumentNavigation documents={filteredDocs} /></div>
  <div id="working"><slot /></div>
</main>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  main {
    display: flex;
    height: 100vh;
  }

  #nav {
    width: 275px;
    height: 100%;
    padding-top: 20px;
    border-right: 1px solid grey;
    padding-left: 12px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.7rem;
    background-color: rgb(20, 20, 20);
    color: white;
    margin: 0;
  }

  #working {
    flex-grow: 1;
    height: 100%;
    padding-left: 12px;
    padding-top: 20px;
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
  }
</style>