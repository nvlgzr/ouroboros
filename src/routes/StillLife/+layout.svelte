<main>
  <slot />
</main>

<style>
  main {
    min-height: 100vh;
    width: 100vw;
    font-family: Unkempt;
    color: hsl(169, 15%, 14%);
    background: radial-gradient(50% 133.13% at 50% 50%, white 0% 20%, hsl(17, 20%, 93%) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
