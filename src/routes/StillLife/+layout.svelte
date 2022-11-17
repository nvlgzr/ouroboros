<script>
  import Footer from './Footer.svelte';
</script>

<main>
  <section>
    <vstack stretch>
      <slot />
    </vstack>
  </section>
  <section>
    <Footer />
  </section>
</main>

<style>
  main {
    min-height: 100vh;
    font-family: Unkempt;
    color: hsl(169, 15%, 14%);
    background: radial-gradient(50% 133.13% at 50% 50%, white 0% 20%, hsl(17, 20%, 93%) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
