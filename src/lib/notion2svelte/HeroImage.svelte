<script>
  import Portal from './Portal.svelte';
  import CoverCredit from './CoverCredit.svelte';

  export let src = '';
  export let height = '100%';
</script>

<Portal target="#cover">
  <div class="fullbleed" style="height: {height};">
    <img style="height: {height};" {src} alt="ARIA Fail. Sorry!" />
  </div>
  <div class="inner-shadow fullbleed" style="height: {height};">&nbsp;</div>
  <div style="height: {height}; position: relative;">
    <div style="position: absolute; bottom: 0; right: 0;">
      <CoverCredit />
    </div>
  </div>
</Portal>

<style>
  .fullbleed {
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .inner-shadow {
    box-shadow: inset 0 7rem 5rem -5rem hsla(0, 0%, 0%, 0.5);
  }

  img {
    width: 100%;
    animation: kenburns 3s 1 cubic-bezier(0.075, 0.82, 0.165, 1);
    object-fit: cover;
  }

  @keyframes kenburns {
    0% {
      transform: scale3d(7, 2, 2) translate3d(50px, 50px, 50px) rotate(-0.02turn);
      opacity: 0;
    }
    100% {
      transform: scale3d(1, 1, 1) translate3d(0, 0, 0) rotate(0);
    }
  }
</style>
