<div id="cover" style="height:0">&nbsp;</div>

<main>
  <section>
    <div class="left">&nbsp;</div>
    <div class="content"><slot /></div>
    <div class="right">&nbsp;</div>
  </section>
  <footer>
    <img src="/the-storyteller-footer.svg" alt="" />
    <!-- <a class="home-button" href="/">Front of the Club</a>
  <a
    class="feedback-button"
    href="mailto:elbong@navelgazer.club?subject=Navelgazer%20Club%20Feedback"
    target="_blank"
    rel="noopener noreferrer"
  >
    Got feedback?
  </a> -->
  </footer>
</main>

<style>
  :root {
    --main-margin: 4rem;
    /* --footer-gray: hsl(224, 9%, 50%); */
    --paper: hsl(23, 62%, 96%);
    --white: hsl(0, 4%, 95%);
    --body-text: 'Noto Serif', serif;
    --body-spacing: 1.6rem;
    --body-weight: 400;
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
    font-weight: var(--body-weight);
    line-height: var(--body-spacing);
  }
  footer {
    /* background-color: var(--footer-gray); */
    margin-top: 4rem;
    font: 100 1.6rem 'Noto Serif Display', serif;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: space-between; */
    /* border-top-left-radius: 40%;
    border-top-right-radius: 700%; */
  }
  footer * {
    /* margin: 0 auto; */
    color: var(--white);
    text-decoration: none;
    position: relative;
    top: 1px; /* Compensate for edge transparency @ bottom of svg? */
  }
  /* a {
    display: block;
  }
  .feedback-button {
    font-size: 1rem;
    margin-right: 15vw;
    justify-self: end;
    align-self: end;
    min-width: 10rem;
  }
  .home-button {
  }
  a[href^='mailto:']::after,
  a[href^='mailto:']::before {
    content: '  💌  ';
  } */
</style>
