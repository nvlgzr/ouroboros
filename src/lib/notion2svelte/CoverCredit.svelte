<script>
  import { getContext } from 'svelte';

  const { coverCreditAuthor, coverCreditURL } = getContext('pageStuff');
</script>

{#if coverCreditAuthor}
  <div>
    {#if coverCreditURL}
      <span>©</span> <a target="blank" href={coverCreditURL}>{coverCreditAuthor}</a>
    {:else}
      <span>©</span> {coverCreditAuthor}
    {/if}
  </div>
{/if}

<style>
  div,
  a {
    text-decoration: none;
    color: hsl(0deg 0% 0% / 35%);
  }
  div:hover a,
  div:hover span {
    cursor: pointer;
    color: hsl(0deg 0% 100% / 35%);
  }
  span {
    display: inline-block;
    transform: rotate(180deg);
  }
</style>
