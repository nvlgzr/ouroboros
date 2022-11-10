<script>
  import Nav from './Nav.svelte';
  import Book from '$lib/BookLink.svelte';
  import StillLifeCover from './StillLifeCover.svelte';
</script>

<main>
  <Nav />
  <section>
    <Book title="TheStoryteller()" url="/TheStoryteller">
      <img
        alt="Cover Art displaying the title—Who Killed Adrim Wiren?—over a sunset-tinged fog into which is falling a shadowy figure in red high heels. Only the heels and the hands remain above the pink-and-purple cloud layer, and each hand is offering up a middle finger. Oh, and there's like, a robot emoji mask flying away, and a sort of paper butterfly casting a long shadow, and rust-colored suspension bridge cables, and, well…the rest makes for a boring description."
        src="/the-storyteller-cover_832x1112.png"
      />
    </Book>
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
  img {
    width: 12rem;
    display: block;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    row-gap: 1rem;
  }
</style>
