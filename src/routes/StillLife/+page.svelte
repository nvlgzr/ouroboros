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
  @media (hover: none) {
    h1,
    a {
      background-color: hsl(169, 25%, 93%);
      padding: min(0.25rem, 0.5vw) 0.5rem;
      border-radius: 0.25rem;
    }
  }
  .logo {
    width: 12rem;
  }
</style>
