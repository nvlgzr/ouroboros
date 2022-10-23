<script lang="ts">
  import { fade } from 'svelte/transition';
  import IntroAnimation from './Intro.svelte';
  import Home from './Home.svelte';

  let mode: 'intro' | 'home' = 'intro';
</script>

<svlete:head>
  <title>The Procrastinator's Guide to…</title>
  <meta name="author" content="Elbong Gearny" />
</svlete:head>

{#if mode === 'intro'}
  <div id="intro" transition:fade on:click={() => (mode = 'home')}><IntroAnimation /></div>
{:else}
  <div id="home" transition:fade on:click={() => (mode = 'intro')}><Home /></div>
{/if}

<style>
  div {
    cursor: pointer;
  }
</style>
