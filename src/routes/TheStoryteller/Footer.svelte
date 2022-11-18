<script>
  import TheStoryteller from './TheStoryteller.svelte';
  import Copyright from '$lib/Copyright.svelte';
  import SiteLink from '$lib/SiteLink.svelte';
</script>

<vstack>
  <img src="/the-storyteller-footer.svg" alt="" />
  <hstack>
    <TheStoryteller />
    <Copyright />
    <SiteLink />
  </hstack>
</vstack>

<style>
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
</style>
