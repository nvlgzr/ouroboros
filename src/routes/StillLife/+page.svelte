<script>
  import StillLife from '../StillLife.svelte';
</script>

<a href="/">
  <img
    src="/skulking-skuller.svg"
    alt="In the corner of the 'page', the skuller lurks, pearing at you over a fold in the 'paper'."
  />
</a>

<vstack align-x="center" stretch>
  <spacer />
  <div class="logo">
    <StillLife />
  </div>
  <spacer />
  <h1><a href="/StillLife/bookends">page 1</a></h1>
  <spacer />
  <h1><a href="/StillLife/forgiveness">page 2</a></h1>
  <spacer />
  <h1><a href="/StillLife/malespero">page 3</a></h1>
  <spacer />
  <h1><a href="/StillLife/" class="disabled">page 4</a></h1>
  <spacer />
  <h1><a href="/StillLife/" class="disabled">page 5</a></h1>
  <spacer />
  <h1><a href="/StillLife/" class="disabled">page 6</a></h1>
  <spacer />
  <h1><a href="/StillLife/" class="disabled">page 7</a></h1>
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
  .disabled {
    color: hsl(169, 25%, 84%);
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
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: min(15rem, 30vw);
  }
</style>
