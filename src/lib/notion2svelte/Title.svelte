<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,100;0,300;0,500;0,700;0,900;1,100;1,300;1,500;1,700;1,900&family=Noto+Serif:ital@0;1&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<span><slot /></span>

<style>
  span {
    font-weight: 300;
    line-height: 1.2;
    font-size: 3.2rem;
    font-family: 'Noto Serif Display', serif;
    cursor: text;
    display: flex;
    align-items: center;
    margin: 0 0 1rem 0;
  }
</style>
