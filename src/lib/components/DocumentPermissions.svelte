<!-- call SearchableSelect component, passing it which state it should be in -->
<script>
    import SearchableSelect from '$lib/components/SearchableSelect.svelte'
    let selectedRestriction = false
</script>
<div>
    <label>
        <input type="radio" name="access" value="-500">
        CounterFind (Internal Only)
      </label>
      
      <label>
        <input on:click={()=>{selectedRestriction=false}} type="radio" name="access" value="null">
        All licensors
      </label>
      
      <label>
        <input on:click={()=>{selectedRestriction=true}} type="radio" name="access" value="">
        Restricted to 
      </label>
      {#if selectedRestriction}
        <SearchableSelect/>
      {/if}
</div>


<style>
  div {
    display: flex;
    gap: 40px;
    margin-left: 150px;
    margin-top: 12px;
  }
</style>