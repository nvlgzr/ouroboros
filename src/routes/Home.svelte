<script>
  import Nav from './Nav.svelte';
  import Book from '$lib/BookLink.svelte';
  import StillLifeCover from './StillLifeCover.svelte';
</script>

<main>
  <Nav />
  <section>
    <Book title="TheStoryteller()" url="/TheStoryteller/Book/0/Prolog/the-north-tower" />
    <Book title="Still Life" url="/StillLife">
      <StillLifeCover />
    </Book>
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
</style>
