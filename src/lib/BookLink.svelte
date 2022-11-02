<script>
  export let url;
  export let title;
</script>

<div class="card">
  <a href={url}>
    <div class="contents">
      <slot />
    </div>
    <div class="title">{title}</div>
  </a>
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
    border-radius: 0.5vw;
    overflow: hidden;
    filter: drop-shadow(0.4rem 0.4rem 0.9rem hsl(0, 0%, 0%, 30%));
  }
  .title {
    /* background-color: greenyellow; */
    padding: 1rem 0 0 0;
    color: purple;
    text-align: center;
    font-family: Unkempt;
  }
  a {
    color: black; /* Prevent standard Link Blue from "leaking" into the svg */
    text-decoration: none;
    /* background-color: antiquewhite; */
  }
  a:hover {
    color: black;
  }
</style>
