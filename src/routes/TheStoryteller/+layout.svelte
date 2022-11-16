<script>
  import Footer from './Footer.svelte';
</script>

<div id="cover" style="height:0">&nbsp;</div>

<main>
  <section>
    <div class="left">&nbsp;</div>
    <div class="content"><slot /></div>
    <div class="right">&nbsp;</div>
  </section>
  <Footer />
</main>

<style>
  :global(:root) {
    --main-margin: 4rem;
    --paper: hsl(23, 62%, 98%);
    --body-text: 'Noto Serif', serif;
    --body-spacing: 1.6rem;
    --display-font: 100 1.6rem/1.6rem 'Noto Serif Display', serif / 3.2rem;
    --reading-width: 42rem;
  }
  :global(a) {
    text-decoration: none;
    color: inherit;
  }
  :global(.title) {
    font-family: 'Noto Serif Display';
    font-size: min(3.2rem, 10vw);
  }
  main {
    background-color: var(--paper);
    width: 100vw;
  }
  section {
    display: grid;
    grid-template-columns: 1fr min(var(--reading-width), 90%) 1fr;
    margin: 0 auto;
    max-width: var(--reading-width);
    font-family: var(--body-text);
    line-height: var(--body-spacing);
  }
</style>
