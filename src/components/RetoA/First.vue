<template>
  <div class="first">
    <img class="image" src="@/assets/reto-a/illustration-1.svg" alt />
    <div class="content">
      <h2 class="title">All your files in one secure location, accessible anywhere.</h2>
      <p class="text">
        Fylo stores your most important files in one secure location.
        Access them wherever you need, share and collaborate with friends,
        family, and co-workers.
      </p>
      <div>
        <input class="input" type="text" placeholder="Enter your email" />
        <button class="btn">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.first {
  color: var(--p1);
  padding: 60px 0;
  .image {
    box-sizing: border-box;

    width: 100%;
    padding: 15px;
  }
  .content {
    padding: 0 10px;
    .title {
      font-size: 1.65em;
      line-height: 1.5em;
    }
    .text,
    .input,
    .btn {
      box-sizing: border-box;
      border-radius: 3px;
      width: 100%;
      margin: 10px 0;
    }
    .text {
      font-size: 0.9em;
      font-weight: 400;
      line-height: 1.5;
    }
    .input {
      color: black;
      border: 1px solid var(--p1);
      padding: 10px 15px;
      &::placeholder {
        color: var(--n2);
      }
    }
    .btn {
      padding: 10px;
      background: var(--a1);

      font-weight: 600;
      color: white;
    }
  }
}
@media screen and (min-width: 650px) {
  .first {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 170px;
    .image {
      width: 50%;
    }
    .content {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;

      div {
        display: grid;
        grid-template-columns: 50% 35%;
        gap: 25px;
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .first {
    .image {
      width: 50%;
    }
    .content {
      font-size: 25px;
      .title {
        font-size: 1.8em;
      }
      .text {
        font-size: 0.8em;
      }
    }
  }
}
</style>