<script>
  export let blockProps = {};
</script>

<p>
  {#if $$slots.default}
    <div title={JSON.stringify(blockProps, null, 2)}><slot /></div>
  {:else}
    &nbsp; <!-- Ensures empty blocks get rendered -->
  {/if}
</p>

<style>
  p {
    padding: 0 0 0.5rem 0;
    margin: 0;
    position: relative;
  }
</style>
