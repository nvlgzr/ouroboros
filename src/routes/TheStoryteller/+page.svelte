<script>
  const unfinished = [
    'chapter(2): Ancient Stories',
    'chapter(3): Foo Bar Baz',
    'chapter(4): Gumbie schnitzel',
    'chapter(5): Broadcast noose',
    'chapter(6): Great Sykologists',
    'chapter(7): Tegrity Reakdown',
    'chapter(8): What is good for you is good for the world. —Maslow',
    'chapter(9): Point of Faith'
  ];
</script>

<h1 class="title">TheStoryteller()</h1>

<h2>
  chapter(0):
  <a href="/TheStoryteller/Book/0/Prolog/the-north-tower"> The North Tower (prolog) </a>
</h2>

{#each unfinished as chapter}
  <h2 class="unfinished">{chapter}</h2>
{/each}

<style>
  h1 {
    line-height: 5rem;
  }
  h2 {
    line-height: 1.7rem;
    letter-spacing: 0.04rem;
  }
  .unfinished {
    color: hsla(169, 15%, 86%, 1);
  }
</style>
