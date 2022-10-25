<script lang="ts">
  import { fade } from 'svelte/transition';
  import IntroAnimation from './Intro.svelte';
  import Home from './Home.svelte';
  import { showIntroAnimation } from '$lib/persistentStore';
</script>

<svlete:head>
  <title>The Procrastinator's Guide to…</title>
  <meta name="author" content="Elbong Gearny" />
</svlete:head>

{#if $showIntroAnimation}
  <IntroAnimation />
{:else}
  <Home />
{/if}
