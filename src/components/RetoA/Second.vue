<template>
  <div class="second">
    <img class="image" src="@/assets/reto-a/illustration-2.svg" />
    <div class="content">
      <h4 class="title">Stay productive, wherever you are</h4>
      <p
        class="text"
      >Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
      <p
        class="text"
      >Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
      <span class="link">
        See how Fylo works
        <img class="arrow" src="@/assets/reto-a/icon-arrow.svg" alt />
      </span>
      <div class="card">
        <img src="@/assets/reto-a/icon-quotes.svg" class="quotes" />
        <p class="card-text">
          Fylo has improved our team productivity by an order of magnitude. Since
          making the switch our team has become a well-oiled collaboration machine.
        </p>
        <div class="user">
          <img src="@/assets/reto-a/avatar-testimonial.jpg" alt class="avatar" />
          <div class="info">
            <span class="name">Kyle Burton</span>
            <span class="position">founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// let widthScreen = window.screen.width
// function resize() {
//   widthScreen = window.screen.width
//   return widthScreen
// }
// window.onresize = resize
export default {}
</script>

<style lang="scss" scoped>
.second {
  position: relative;
  margin-left: -1.5em;
  width: 100vw;
  box-sizing: border-box;
  padding: 1.5em;
  background: var(--n1);
  text-align: left;
  .image {
    width: 100%;
  }
  .content {
    display: flex;
    flex-direction: column;
    margin: 70px 0;
    color: var(--p1);

    .text {
      text-align: left;
      font-weight: 200;
      font-size: 15px;
      line-height: 1.5em;
    }
    .link {
      color: var(--a2);
      margin: 20px auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      width: fit-content;
      height: 2em;
      .arrow {
        margin-left: 7px;
        width: 1.2em;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        background: var(--a2);
        width: 100%;
        height: 1px;
      }
    }
    .card {
      background: white;
      position: relative;
      box-sizing: border-box;
      margin: 20px;
      margin-bottom: 0;
      border-radius: 5px;
      padding: 20px 25px;
      .quotes {
        display: block;
        width: 12px;
      }
      &-text {
        text-align: left;
        font-size: 0.65em;
        font-weight: 400;
        line-height: 2em;
      }
      .user {
        display: flex;
        .avatar {
          size: initial;
          height: 1.5em;
          width: 1.5em;
          border-radius: 50%;
        }
        .info {
          margin-left: 10px;
          display: grid;
          .name,
          .position {
            text-align: left;
          }
          .name {
            height: 1em;
            font-size: 0.7em;
            font-weight: 500;
          }
          .position {
            height: 0.6em;
            font-weight: 300;
            font-size: 0.55em;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 650px) {
  .second {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 0;
    p {
      margin: 0;
    }
    .image,
    .content {
      width: 50%;
      margin: 0;
    }
    .image {
      margin: auto;
      height: 100%;
    }
  }
}
@media screen and (min-width: 1440px) {
  .second {
    margin-left: calc((1440px - 100vw - 10em) / 2);
    padding: 40px calc((100vw - 1440px) / 2) 90px;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 0;
    .image,
    .content {
      height: auto;

      width: 50%;
      margin: 0;
      padding-left: 5em;
      .title {
        font-size: 2.5em;
        margin-top: 0;
        margin-bottom: 0.8em;
      }
      .text {
        letter-spacing: 1px;
        font-weight: 400;
        margin: 7px 0;
        margin-right: 5em;
      }
      .link {
        margin: 5px 0 2em;
        font-size: 1em;
      }
      .card {
        width: 350px;
        margin: 1em 0;
        padding: 30px 40px;
        font-size: 20px;
        &-text {
          font-size: 0.65em;
          line-height: 1.75;
          letter-spacing: 0.5px;
        }
      }
    }
  }
}
</style>