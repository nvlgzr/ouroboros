<div id="cover" style="height:0">&nbsp;</div>

<main>
  <section>
    <div class="left">&nbsp;</div>
    <div class="content"><slot /></div>
    <div class="right">&nbsp;</div>
  </section>
  <vstack>
    <img src="/the-storyteller-footer.svg" alt="" />
    <hstack>
      <a href="/TheStoryteller">TheStoryteller()</a>
      <div stretch class="copyright">©2022 Elbong Gearny</div>
      <a href="/">navelgazer.club</a>
    </hstack>
  </vstack>
</main>

<style>
  :root {
    --main-margin: 4rem;
    --paper: hsl(23, 62%, 98%);
    --body-text: 'Noto Serif', serif;
    --body-spacing: 1.6rem;
    --display-font: 100 1.6rem/1.6rem 'Noto Serif Display', serif / 3.2rem;
    --reading-width: 42rem;
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
  vstack {
    position: relative;
    margin-top: 4rem;
    font: 100 1.6rem 'Noto Serif', serif;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  img {
    width: 100vw;
  }
  hstack {
    position: absolute;
    width: 100vw;
    bottom: 0rem;
    z-index: 1;
    height: fit-content;
    color: var(--paper);
    align-items: baseline;
  }
  .copyright {
    font-size: 1.4vw;
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 0.5rem;
    color: hsl(168, 20%, 65%);
  }
  a {
    color: var(--paper);
    margin: 1rem 2rem;
    text-decoration: none;
    font-family: 'Noto Serif Display';
    font-size: 3rem;
  }
  a[href='/'] {
    font-family: 'Rock Salt';
    font-size: 1.5rem;
    position: relative;
    top: 0.2rem; /* Just looks better to me this way 🤷🏽 */
  }
</style>
