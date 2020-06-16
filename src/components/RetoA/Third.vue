<template>
  <div class="third">
    <div class="left">
      <h3 class="title">Get early access today</h3>
      <p class="text">
        It only takes a minute to sign up and our free starter tier is extremely generous.
        If you have any questions, our support team would be happy to help you.
      </p>
    </div>
    <div class="right">
      <input type="text" class="input" placeholder="email@example.com" />
      <button class="btn">Get Started for Free</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.third {
  background: var(--p2);
  color: white;
  margin-left: -1.5em;
  width: 100vw;
  box-sizing: border-box;
  padding: 2em;
  .title {
    margin-top: 0;
  }
  .text {
    font-size: 1em;
    line-height: 1.5;
  }
  .right {
    display: flex;
    flex-direction: column;
    padding: 0 2.5em;
    .input,
    .btn {
      margin: 5px 0;
      border-radius: 2px;
    }
    .input {
      border: none;
      padding: 5px;
    }
    .btn {
      background: var(--a1);
      color: white;
      box-sizing: border-box;
      padding: 5px;
      font-size: 0.8em;
    }
  }
}
@media screen and (min-width: 1440px) {
  .third {
    margin-left: calc((1440px - 100vw - 10em) / 2);
    padding: 5em calc((100vw - 1440px) / 2);
    display: flex;
    .left,
    .right {
      width: 50%;
      box-sizing: border-box;
      text-align: left;
    }
    .left {
      padding: 0 5em;

      .title {
        margin: 15px auto;
        font-size: 2em;
      }
      .text {
        font-weight: 400;
        font-size: 17px;
        letter-spacing: 1px;
        margin: 0;
      }
    }
    .right {
      padding: 0 7em;
      .input,
      .btn {
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      }
      .input {
        padding: 0.8em;
      }
      .btn {
        padding: 1em 3em;
        width: fit-content;
        font-weight: 700;
      }
    }
  }
}
</style>