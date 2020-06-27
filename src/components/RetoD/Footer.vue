<template>
  <footer>
    <div class="logo">
      <Logo dark />
    </div>
    <div class="socials">
      <img v-for="n in socials" :key="n" :src="iconURL(n)" alt />
    </div>
    <div class="links">
      <p v-for="n in links" :key="n">{{n}}</p>
    </div>
    <div class="btn">
      <InviteBtn class="a" />
    </div>
    <div class="copy">
      <p>© Easybank. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/RetoD/Logo";
import InviteBtn from "@/components/RetoD/InviteBtn";

export default {
  components: { Logo, InviteBtn },
  data() {
    return {
      socials: ["facebook", "youtube", "twitter", "pinterest", "instagram"],
      links: [
        "About Us",
        "Contact",
        "Blog",
        "Careers",
        "Support",
        "Privacy Policy"
      ]
    };
  },
  methods: {
    iconURL(icon) {
      return "img/reto-d/icon-" + icon + ".svg";
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  background: var(--p1);
  color: white;
  padding: 3em;
  display: grid;
  gap: 30px;

  .socials {
    justify-content: center;
    img {
      width: 1.5em;
      margin: 0 0.5em;
      &:hover {
        cursor: pointer;
        color: var(--bg-linear);
      }
    }
  }
  .links {
    display: grid;

    gap: 10px;
    p {
      margin: 0;
      color: white;
      &:hover {
        color: var(--p2);
        cursor: pointer;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
  }
}
@media screen and (min-width: 1440px) {
  footer {
    padding: 3em var(--pad-y);
    grid-template-columns: 300px 2fr 2fr;
    grid-template-areas:
      "one three four"
      "two three five";
    gap: 0px;
    .logo {
      text-align: left;
      grid-area: one;
    }
    .socials {
      text-align: left;
      grid-area: two;
      display: flex;
      justify-content: left;
      align-items: flex-end;
      height: 45px;
      img:first-of-type {
        margin-left: 0;
      }
    }
    .links {
      grid-area: three;
      display: grid;
      text-align: left;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "a d"
        "b e"
        "c f";
      $links: (
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6
      );
      @each $area, $n in $links {
        p:nth-child(#{$n}) {
          display: flex;
          align-items: center;
          grid-area: #{$area};
        }
      }
    }
    .btn {
      justify-content: flex-end;
      grid-area: four;
    }
    .copy {
      grid-area: five;
      display: flex;
      justify-content: right;
    }
  }
}
</style>