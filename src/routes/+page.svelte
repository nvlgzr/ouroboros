<script>
  import { fade } from 'svelte/transition';
  import IntroAnimation from './intro.svelte';
</script>

<svlete:head>
  <title>The Procrastinator's Guide to…</title>
  <meta name="author" content="Elbong Gearny" />
</svlete:head>

<div transition:fade><IntroAnimation /></div>
