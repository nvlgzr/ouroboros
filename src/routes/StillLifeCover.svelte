<script>
  export let width = '12rem';
</script>

<div class="wrapper" style="width: {width}">
  <vstack>
    <div class="still">Still</div>
    <img
      class="life"
      src="/life.png"
      alt="The word 'Life' in a cursive font, filled in with a collage of hand-drawn bits and masked photographs"
    />
  </vstack>
  <img class="bg" src="/still-life-cover.svg" alt="" />
</div>

<style>
  .wrapper {
    /* background-color: peachpuff; */
    position: relative;
    display: flex;
    justify-content: center;
  }
  vstack {
    /* background-color: hsla(180, 100%, 97%, 0.5); */
    z-index: 1;
    aspect-ratio: 832 / 1112;
  }
  .still {
    /* background-color: hsla(110, 100%, 37%, 0.3); */
    font-weight: normal;
    font-family: Chalkduster;
    font-size: 3.7rem;
    text-align: center;
    padding-top: 1.7rem;
  }
  .life {
    width: 100%;
    /* background-color: hsla(270, 100%, 37%, 0.3); */
  }
  .bg {
    position: absolute;
    width: 100%;
    height: auto;
    /* display: none; */
  }
</style>
