<script>
  import StillLife from '../StillLife.svelte';
</script>

<main>
  <vstack align-x="center" stretch>
    <spacer />
    <div class="container">
      <StillLife />
    </div>
    <spacer />
    <h1>Bookends</h1>
    <spacer />
    <h1>Vampire, revisited</h1>
    <spacer />
  </vstack>
</main>

<style>
  main {
    height: 100vh;
    font-family: Unkempt;
    color: hsl(169, 15%, 14%);
    background: radial-gradient(50% 133.13% at 50% 50%, white 0% 20%, hsl(17, 20%, 93%) 100%);
  }
  .container {
    width: 12rem;
    /* background-color: beige; */
  }
</style>
