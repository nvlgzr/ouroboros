<script>
  import StillLife from './../StillLife.svelte';
  import Copyright from '$lib/Copyright.svelte';
  import SiteLink from '$lib/SiteLink.svelte';
</script>

<vstack>
  <hstack>
    <StillLife />
    <Copyright />
    <SiteLink />
  </hstack>
</vstack>

<style>
  @media (hover: none) {
    a {
      background-color: hsla(169, 15%, 94%, 0.5);
      padding: min(0.25rem, 0.5vw) 0.5rem;
      border-radius: 0.25rem;
    }
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
  a {
    color: var(--paper);
    margin: min(1rem, 4.5vw) min(2rem, 1vw);
    text-decoration: none;
    font-family: 'Noto Serif Display';
    font-size: min(3rem, 3.5vw);
  }
  a:hover {
    filter: brightness(55%);
  }
</style>
