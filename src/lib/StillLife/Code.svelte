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
    const withBiggenedBlock = html.replace(
      '■',
      '&lt;span style="font-size:min(2.5rem, 8vw);position:relative; left: -0.5vw;"&gt;■&lt;/span&gt;'
    );
    const doc = new DOMParser().parseFromString(withBiggenedBlock, 'text/html');
    return doc.documentElement.textContent;
  };
</script>

<pre>
  {#if mounted}
    <code>{@html code}</code>
  {/if}
</pre>

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
</style>
