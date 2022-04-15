<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,100;0,300;0,500;0,700;0,900;1,100;1,300;1,500;1,700;1,900&family=Noto+Serif:ital@0;1&display=swap"
    rel="stylesheet"
  />
</svelte:head>

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
    --body-text: 'Noto Serif', serif;
    --body-spacing: 1.6rem;
    --body-weight: 400;
    --display-font: 100 1.6rem/1.6rem 'Noto Serif Display', serif / 3.2rem;
    --reading-width: 35rem;
  }
  main {
    margin: var(--main-margin);
    max-width: var(--reading-width);
    font-family: var(--body-text);
    font-weight: var(--body-weight);
    line-height: var(--body-spacing);
  }
  footer {
    font: 100 1.6rem 'Noto Serif Display', serif;
  }
  footer * {
    padding: 0.95rem 0 1rem 0;
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
