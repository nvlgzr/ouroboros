<script>
  export let url;
  export let title;
</script>

<div class="card">
  <div class="contents">
    <slot />
  </div>
  <a href={url}>{title}</a>
</div>

<style>
  .card {
    /* background-color: plum; */
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .contents {
    /* background-color: greenyellow; */
  }
  a {
    text-decoration: none;
    color: purple;
    /* display: block; */
    padding: 1rem 0 0 0;
    text-align: center;
    /* background-color: antiquewhite; */
  }
  a:hover {
    color: black;
  }
</style>
