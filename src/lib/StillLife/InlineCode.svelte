<script>
  export let code = '';
</script>

<span><code>{@html code}</code></span>

<style>
  span {
    font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
    background: hsla(0, 0%, 100%, 0.45);
    color: #eb5757;
    border-radius: 3px;
    font-size: 85%; /* Sets height of gray box */
    padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  }

  code {
    display: inline;
    background: hsla(0, 80%, 95%);
    color: inherit;
    border-radius: 3px;
    font-size: 85%;
    white-space: pre-wrap;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  }
</style>
