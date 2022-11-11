<script>
  const unfinished = [
    'chapter(02): An Impossible Book',
    'chapter(03): Arrives a Guest, Unexpected',
    'chapter(04): The Book of A⋂A',
    'chapter(05): Matter Over Mind',
    'chapter(06): Sense in the Stream',
    'chapter(07): Casting Spells',
    'chapter(08): A Thriving Hive',
    'chapter(09): I Reaches Out',
    'chapter(10): Bugs',
    'chapter(11): Miami to Atlantis',
    'chapter(12): Q&A',
    'chapter(13): Hyphema',
    'chapter(14): Exile',
    'chapter(15): Silence',
    'chapter(16): Making New Connections',
    'chapter(17): Captivity',
    'chapter(18): Dreamless',
    'chapter(19): MitM',
    'chapter(20): A Singularity',
    'chapter(21): A New Mission',
    'chapter(22): Inside the Mind of a Lunatic',
    'chapter(23): Waking Up',
    'chapter(24): Epilog'
  ];
</script>

<h1 class="title">TheStoryteller()</h1>

<h2>
  <a href="/TheStoryteller/Book/0/Prolog/the-north-tower">chapter(0): The North Tower (prolog) </a>
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
