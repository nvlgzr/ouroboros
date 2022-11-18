<script>
  import Chapter from './Chapter.svelte';

  const unfinished = [
    '02. An Impossible Book',
    '03. Arrives a Guest, Unexpected',
    '04. The Book of A⋂A',
    '05. Matter Over Mind',
    '06. Sense in the Stream',
    '07. Casting Spells',
    '08. A Thriving Hive',
    '09. I Reaches Out',
    '10. Bugs',
    '11. Miami to Atlantis',
    '12. Q&A',
    '13. Hyphema',
    '14. Exile',
    '15. Silence',
    '16. Making New Connections',
    '17. Captivity',
    '18. Dreamless',
    '19. MitM',
    '20. A Singularity',
    '21. A New Mission',
    '22. Inside the Mind of a Lunatic',
    '23. Waking Up',
    '24. Epilog'
  ];
</script>

<h1 class="title">TheStoryteller()</h1>

<Chapter url="/TheStoryteller/Book/0/Prolog/the-north-tower">00. The North Tower (prolog)</Chapter>

{#each unfinished as chapter}
  <Chapter nyw>{chapter}</Chapter>
{/each}

<style>
  h1 {
    color: hsl(169, 15%, 14%);
    line-height: 5rem;
    font-weight: 350;
  }
  h2 {
    margin: min(1rem, 4.5vw) 0.5rem;
  }
  .unfinished {
    color: hsla(169, 15%, 86%, 1);
  }
</style>
