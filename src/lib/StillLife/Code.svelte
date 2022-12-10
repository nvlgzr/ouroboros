<script>
  import { onMount } from 'svelte';
  import { getContext } from 'svelte';

  const { next, previous } = getContext('pageStuff');

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
    const withWideFrontSpaces = html.replace(/  /g, '&emsp;&emsp;');
    const withBiggenedBlock = withWideFrontSpaces.replace(
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
    <div class="pageturners">
    {#if previous.length}
        <div>
          <a href={`/StillLife${previous}`}>꧁ {previous.replace(/^\//, '')}</a>
      </div>
      {/if}
    {#if next.length}
        <div>
        <a href={`/StillLife${next}`}>{next.replace(/^\//, '')} ꧂</a>
      </div>
      {/if}
  </div>
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
    white-space: pre-wrap;
    word-wrap: break-word;
    color: hsl(120, 11%, 23%);
    font-size: 0.75rem;
    margin-left: min(2rem, 5vw);
    margin-right: min(2rem, 5vw);
  }

  a {
    text-decoration: none;
    color: hsl(120, 11%, 23%);
    display: block;
  }

  a:hover {
    color: hsl(168, 20%, 65%);
  }

  .pageturners {
    display: flex;
    justify-content: space-between;
  }
</style>
