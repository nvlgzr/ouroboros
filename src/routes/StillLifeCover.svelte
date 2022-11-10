<script>
  import StillLife from './StillLife.svelte';

  export let width = '12rem';
</script>

<div class="wrapper" style="width: {width}">
  <StillLife /> <img class="bg" src="/still-life-cover.svg" alt="" />
</div>

<style>
  .wrapper {
    /* background-color: peachpuff; */
    position: relative;
    display: flex;
    justify-content: center;
  }
  .bg {
    position: absolute;
    width: 100%;
    height: auto;
    /* display: none; */
  }
  .bg:hover {
    color: black;
  }
</style>
