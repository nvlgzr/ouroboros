<script>
  export let url = '#';
  export let nyw = false; // Not Yet Written
</script>

{#if nyw}
  <div><slot /></div>
{:else}
  <a href={url}><slot /></a>
{/if}

<style>
  div,
  a {
    display: block;
    color: hsl(169, 15%, 14%);
    margin: min(1rem, 4.5vw) 0.5rem;
    text-decoration: none;
    font-family: 'Noto Serif Display';
    /* font-size: min(3rem, 3.5vw); */

    font-size: min(1.5rem, 5vw);
    line-height: min(1.25rem, 3.5vw);
    letter-spacing: 0.04rem;
    padding: 0.25rem 0;
  }
  div {
    color: hsla(169, 15%, 86%, 1);
  }
  a:hover {
    color: hsl(169, 15%, 70%);
  }
  @media (hover: none) {
    a {
      background-color: hsla(169, 15%, 94%, 0.5);
      padding: min(0.25rem, 0.5vw) 0.5rem;
      border-radius: 0.25rem;
    }
  }
  @media (hover: none) {
    a {
      background-color: hsla(169, 15%, 94%, 1);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }
  }
</style>
