<script>
  import Nav from './Nav.svelte';
</script>

<main>
  <Nav />
  <section>
    <a href="/TheStoryteller/Book/0/Prolog/the-north-tower"> TheStoryteller() </a>
    <a href="#nyi"> Still Life </a>
  </section>
</main>

<style>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: hsl(0, 0%, 96%);
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    row-gap: 1rem;
  }
  a {
    display: block;
    padding: 5rem;
    background-color: antiquewhite;
  }
</style>
