<script>
</script>

<div id="cover" style="height:0">&nbsp;</div>
<main>
  <slot />
</main>

<footer>
  <p>
    <a href="/">Front of the Club</a>
  </p>
</footer>

<style>
  :root {
    --main-margin: 4rem;
    --footer-gray: hsl(224, 9%, 50%);
    --white: hsl(0, 4%, 95%);
    --font: ;
    --reading-width: 35rem;
  }
  main {
    margin: var(--main-margin);
    max-width: var(--reading-width);
  }
  footer * {
    padding: 1rem;
    margin: 0 auto;
    color: var(--white);
    text-decoration: none;
    display: flex;
  }
  footer p {
    background-color: var(--footer-gray);
  }
  p {
    margin: 0;
    background-color: aliceblue;
  }
</style>
