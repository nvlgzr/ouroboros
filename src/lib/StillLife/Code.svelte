<script>
  import { onMount } from 'svelte';

  export let code = '';

  // This prop isn't needed for the StillLife project
  // but removing it creates a runtime warning, so…
  // svelte-ignore unused-export-let
  export let language = '';

  let mounted = false;

  onMount(() => {
    code = decode(code);
    mounted = true;
  });

  // https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
  const decode = (html) => {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.documentElement.textContent;
  };
</script>

<pre>
  {#if mounted}
    <code>{@html code}</code>
  {/if}
</pre>
<div>
  {#if $$slots.default}
    <div><slot /></div>
  {/if}
</div>

<style>
  code {
    font-family: Inter, sans-serif;
    font-size: min(1rem, 4vw);
    line-height: min(1.5rem, 6vw);
    display: block;
  }

  pre {
    font-family: Inter, sans-serif;
    position: relative;
    line-height: normal;
    /* display: block; */
    /* border-radius: 0.5rem; */
    /* overflow-x: auto; */
    white-space: pre-wrap;
    word-wrap: break-word;
    color: hsl(120, 11%, 23%);
    font-size: 0.75rem;
  }

  div {
    /* caption text */
    font-size: 0.8rem;
    color: hsl(120, 78%, 7%);
    margin: 0.5rem 1rem 0.5rem 0;
  }
</style>
