<script>
  
  let options = [
    { value: 1, label: "CLC" },
    { value: 2, label: "Marvel" },
    { value: 3, label: "Mr. Beast" },
    { value: 4, label: "Beyonce" }
    // ... add more options as needed
  ];
  
  let searchTerm = "";
  let selectedOption = null;
  let selectedOptionName = ""
  let filteredOptions = options;

  $: filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function selectOption(option) {
    searchTerm = option.label; // Set the input value to the selected option label
    // Populate the text box with the selected option's label
    selectedOption = option.value;
    selectedOptionName = option.label;
  }
</script>

<div class="access-options">
<!-- {selectedOption} {selectedOptionName} -->
</div>
<div class="custom-select-wrapper">
    <input type="text" bind:value={searchTerm} placeholder="Search for Licensor">
    <div class="select-options {searchTerm ? 'show' : ''}">
      {#each filteredOptions as option (option.value)}
        <div class="options-div" on:click={() => { searchTerm = option.label; selectOption(option); }}>
          {option.label}
        </div>
      {/each}
    </div>
</div>

<style>
  .custom-select-wrapper {
    margin-left: -60px;
  }

  .options-div {
    font-size: 1.2rem;
    margin-top: 4px;
  }

  .select-options {
    display: none;
  }

  .select-options.show {
    display: block;

  }
</style>
<!-- To use this component in another Svelte file -->
<!-- <SearchableSelect /> -->