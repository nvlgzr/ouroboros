<script>
  import { showIntroAnimation } from '$lib/persistentStore';
</script>

<main>
  <nav>
    <div on:click={() => ($showIntroAnimation = true)}>
      <img
        class="logo"
        src="/navelgazer-third-eye.png"
        alt="A sort of alien head with a brown third eye on its wide forehead"
      />
    </div>
  </nav>
  <section>
    <a href="/TheStoryteller/Book/0/Prolog/the-north-tower"> TheStoryteller() </a>
    <a href="#nyi"> Still Life </a>
  </section>
</main>

<style>
  div {
    cursor: pointer;
    width: fit-content;
  }
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: hsl(0, 0%, 96%);
  }
  nav {
    /* background-color: white; */
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    row-gap: 1rem;
  }
  .logo {
    padding: 1vw 0 1vw 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 5vh;
    position: relative;
  }
  a {
    display: block;
    padding: 5rem;
    background-color: antiquewhite;
  }
</style>
