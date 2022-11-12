<script>
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

<h2>
  <a href="/TheStoryteller/Book/0/Prolog/the-north-tower">00. The North Tower (prolog) </a>
</h2>

{#each unfinished as chapter}
  <h2 class="unfinished">{chapter}</h2>
{/each}

<style>
  h1 {
    line-height: 5rem;
  }
  h2 {
    font-size: min(1.5rem, 5vw);
    line-height: 1.25rem;
    letter-spacing: 0.04rem;
    padding: 0.25rem 0.5rem;
  }
  .unfinished {
    color: hsla(169, 15%, 86%, 1);
  }
  @media (hover: none) {
    a {
      background-color: hsla(169, 15%, 94%, 1);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }
  }
</style>
