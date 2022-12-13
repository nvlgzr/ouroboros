<script>
  import { page } from '$app/stores';
  import StillLife from '../StillLife.svelte';

  const pages = [
    { path: '', title: 'Table of Contents' },
    { path: 'bookends', title: 'Bookends' },
    { path: 'forgiveness', title: 'Forgiveness' },
    { path: 'malespero', title: 'malespero' },
    { path: 'bellydown', title: 'Untitled' },
    { path: 'vessel', title: 'Vessel' },
    { path: 'folkbytheoakfedmepokeandscoke', title: 'Crone' },
    { path: 'lastthingsfirst', title: '⇌' },
    { path: 'beached', title: 'Whale' }
  ];
</script>

<a class="skuller" href="/">
  <img
    src="/skulking-skuller.svg"
    alt="In the corner of the 'page', the skuller lurks, peering at you over a fold in the 'paper'. Follow it to close this book and return to tiny club library."
  />
</a>

<vstack align-x="center" stretch>
  <spacer />
  <div class="logo">
    <StillLife />
  </div>
  <spacer />
  <ul>
    {#each pages as page, index}
      <li>
        <a class="pagelink" href="/StillLife/{page.path}">
          <span class="index">p. {index}</span><span class="chapter">{page.title}</span>
        </a>
      </li>
      <spacer />
    {/each}
    <li>more to come</li>
  </ul>
  <spacer />
</vstack>

<style>
  ul {
    padding: 0;
  }
  span {
    min-width: 1.5rem;
  }
  span:last-of-type {
    text-align: right;
  }
  li {
    transform: skew(5deg, 5deg) !important;
    padding: 0.75rem;
    margin: 0.5rem;
    display: flex;
  }
  a {
    text-decoration: none;
    color: hsl(169, 15%, 14%);
    display: flex;
    width: min(20rem, 80vw);
  }
  a:after {
    background-image: radial-gradient(circle, currentcolor 0.25px, transparent 1px);
    background-position: bottom;
    background-size: 1.25ex 0.1rem;
    background-repeat: space no-repeat;
    margin: 0 0.25rem;
    content: '';
    flex-grow: 1;
    height: 1rem;
  }
  a.skuller:after {
    /* Prevent dots from rendering to the right of Skuller image */
    content: none;
  }
  li:hover,
  a:hover {
    color: hsl(169, 25%, 44%);
  }
  a:hover span:first-of-type {
    color: black;
  }
  li .chapter {
    order: 3;
  }
  li:first-of-type,
  li:last-of-type {
    pointer-events: none;
  }
  li:last-of-type {
    /* more to come */
    color: hsl(169, 25%, 54%);
  }
  li:last-of-type::after {
    background-image: radial-gradient(circle, currentcolor 0.25px, transparent 2px);
    background-position: bottom;
    background-size: 0.8ex 0.1rem;
    background-repeat: space no-repeat;
    content: '';
    flex-grow: 0.1;
    height: 1rem;
  }

  @media (hover: none) {
    li {
      background-color: hsl(169, 25%, 93%);
      border-radius: 0.25rem;
    }
    li,
    a {
      width: min(20rem, 60vw);
    }
    a::after {
      /* Safari mobile has a weird bug where the dots don't get
         rendered on some lines, so I'm just opting out on mobile */
      background: none;
    }
    li:first-of-type,
    li:last-of-type {
      background: none;
    }
    li:last-of-type::after {
      /* more to come */
      background-image: none;
      content: '…';
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
