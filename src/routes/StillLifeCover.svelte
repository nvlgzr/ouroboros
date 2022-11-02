<picture>
  <div>
    <!-- <img
      class="vector-overlay"
      src="/life-alone.png"
      alt="The words, 'Still Life' 'with the 'Still' in fragmented letters which vibrate quietly, and 'Life' in a vibrant collage: full of life, but completely inert."
    /> -->
    <img class="raster-underlay" src="/still-life-cover_832x1112.png" alt="Life" />
    <h1>Still</h1>
  </div>
</picture>

<style>
  div {
    /* background-color: aqua; */
    position: relative;
    display: flex;
    justify-content: center;
  }
  h1 {
    position: absolute;
    font-weight: normal;
    top: -2rem;
    font-family: Chalkduster;
    font-size: 3.7rem;
  }
  picture {
  }
  img {
    height: 30vh;
  }
  .vector-overlay {
  }
  .raster-underlay {
    filter: drop-shadow(0.4rem 0.4rem 0.9rem hsl(0, 0%, 0%, 30%));
    width: 11.3rem;
    height: auto;
    /* position: absolute; */
    top: 8rem;
    left: 1.75rem;
  }
</style>
