<script>
  import StillLife from './../StillLife.svelte';
  import Copyright from '$lib/Copyright.svelte';
  import SiteLink from '$lib/SiteLink.svelte';
</script>

<hstack align-y="bottom">
  <StillLife horizontal />
  <spacer />
  <Copyright />
  <spacer />
  <SiteLink />
</hstack>

<style>
  hstack {
    position: relative;
    margin-top: 4rem;
    font: 100 1.6rem 'Noto Serif', serif;
    max-width: min(80rem, 100vw);
  }
  spacer {
    min-width: 5vw;
  }
</style>
