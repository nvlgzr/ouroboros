<script>
  import { showIntroAnimation } from '$lib/persistentStore';
</script>

<nav>
  <div on:click={() => ($showIntroAnimation = true)}>
    <img
      class="logo"
      src="/navelgazer-third-eye.png"
      alt="A sort of alien head with a brown third eye on its wide forehead"
    />
  </div>
  <div class="menu-item wtf"> <a href="/whats-this-for"><div>WTF</div><div>?</div></a></div>
</nav>

<style>
  div {
    cursor: pointer;
    width: fit-content;
  }
  nav {
    /* background-color: white; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  img {
    height: 5vh;
    position: relative;
  }
  .logo {
    padding: 1vw 0 1vw 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1.5rem;
  }
  a:hover {
    color: plum;
  }
  .menu-item {
    font-family: 'Rock Salt';
  }
  .wtf {
    line-height: 0.6rem;
    letter-spacing: -0.1rem;
  }
</style>
