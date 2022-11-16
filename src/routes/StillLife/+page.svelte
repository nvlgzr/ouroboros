<script>
  import StillLife from '../StillLife.svelte';
</script>

<vstack align-x="center" stretch>
  <spacer />
  <div class="logo">
    <StillLife />
  </div>
  <spacer />
  <h1><a href="/StillLife/bookends">Bookends</a></h1>
  <spacer />
  <h1>Vampire, revisited</h1>
  <spacer />
</vstack>

<style>
  h1 {
    pointer-events: none;
    transform: skew(5deg, 5deg) !important;
  }
  a {
    pointer-events: auto;
    text-decoration: none;
    color: hsl(169, 15%, 14%);
  }
  h1:hover,
  a:hover {
    color: hsl(169, 25%, 44%);
  }
  .logo {
    width: 12rem;
  }
</style>
