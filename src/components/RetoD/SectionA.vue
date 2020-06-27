<template>
  <section class="section-a">
    <div class="hero">
      <img src="@/assets/reto-d/image-mockups.png" alt />
    </div>
    <div class="desc">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
      <InviteBtn :style="{margin: '2.2em auto'}" />
    </div>
  </section>
</template>

<script>
import InviteBtn from "@/components/RetoD/InviteBtn";
export default {
  components: { InviteBtn },
  data() {
    return {
      title: "Next generation digital banking",
      content:
        "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
    };
  }
};
</script>

<style lang="scss" scoped>
.section-a {
  box-sizing: border-box;
  height: 740px;
  padding: var(--pad-page);
  background: var(--n4);
  background-image: url("../../assets/reto-d/bg-intro-mobile.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top;
  .hero {
    margin: auto -8px;
    img {
      margin-top: -5.25em;
      height: auto;
      width: 349px;
    }
  }
  .desc {
    h1 {
      margin-top: 0.5em;
      margin-bottom: 0;
      font-size: 2.5em;
    }
  }
}
@media screen and (min-width: 1440px) {
  .section-a {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    height: 740px;
    padding-top: 6em;
    padding-left: var(--pad-y);
    padding-right: var(--pad-y);
    background: url("../../assets/reto-d/bg-intro-desktop.svg");
    background-repeat: no-repeat;
    background-position-y: -175px;
    background-position-x: right -450px;
    .hero {
      margin-top: 20px;
      margin-right: -290px;
      img {
        width: 100%;
      }
    }
    .desc {
      width: 22em;
      text-align: left;
      font-size: 20px;
      h1 {
        font-size: 2.75em;
      }
    }
  }
}
</style>