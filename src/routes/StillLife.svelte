<script>
  export let horizontal = false;
</script>

{#if horizontal}
  <a href="/StillLife">
    <hstack align-y="bottom">
      <div class="still" style="font-size: 4vw;">Still</div>
      <img
        class="life"
        src="/life.png"
        alt="The word 'Life' in a cursive font, filled in with a collage of hand-drawn bits and masked photographs"
        style="width: 8vw; top: 0.2vw; position: relative;"
      />
    </hstack>
  </a>
{:else}
  <vstack align-x="center">
    <div class="still">Still</div>
    <img
      class="life"
      src="/life.png"
      alt="The word 'Life' in a cursive font, filled in with a collage of hand-drawn bits and masked photographs"
    />
  </vstack>
{/if}

<style>
  a {
    color: var(--paper);
    margin: min(1rem, 4.5vw) min(2rem, 1vw);
    text-decoration: none;
    font-family: 'Noto Serif Display';
    font-size: min(3rem, 3.5vw);
  }
  a:hover:first-of-type {
    color: hsl(137, 20%, 35%);
  }
  a:hover:nth-of-type(1) {
    filter: brightness(155%);
  }
  @media (hover: none) {
    a {
      background-color: hsla(169, 15%, 94%, 0.5);
      padding: min(0.25rem, 1.5vw) 0.5rem;
      border-radius: 0.25rem;
    }
  }
  vstack {
    /* background-color: hsla(180, 100%, 97%, 0.5); */
    z-index: 1;
    aspect-ratio: 832 / 1112;
  }
  .still {
    /* background-color: hsla(110, 100%, 37%, 0.3); */
    font-family: Chalkduster;
    font-size: 3.7rem;
  }
  .life {
    width: 100%;
    /* background-color: hsla(270, 100%, 37%, 0.3); */
  }
</style>
