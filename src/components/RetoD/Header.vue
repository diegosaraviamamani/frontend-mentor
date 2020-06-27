<template>
  <header>
    <nav>
      <Logo />
      <div v-if="menu" class="mask">
        <div class="menu-mobile">
          <span v-for="item in links" :key="item.id">{{item}}</span>
        </div>
      </div>
      <div class="menu-desktop">
        <span v-for="item in links" :key="item.id">{{item}}</span>
      </div>
      <img :src="`img/reto-d/icon-${menu? 'close':'hamburger'}.svg`" @click="menu = !menu" />
      <div class="btn">
        <InviteBtn />
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/RetoD/Logo";
import InviteBtn from "@/components/RetoD/InviteBtn";

export default {
  components: { Logo, InviteBtn },
  data() {
    return {
      menu: false,
      links: ["Home", "About", "Contact", "Blog", "Careers"]
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  background: var(--n4);
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--pad-page);
    max-width: 1440px;
    margin: 0 auto;
    img {
      display: flex;
      width: fit-content;
      border: 1px solid orange;
      cursor: pointer;
    }
    .btn,
    .menu-desktop {
      display: none;
    }
    .mask {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100vw;
      height: calc(100vh - 60px);
      background: var(--bg-menu);
      padding: 1.65em 1.5em;
      box-sizing: border-box;
      .menu-mobile {
        position: static;
        height: fit-content;
        width: 100%;
        border-radius: 5px;
        box-sizing: border-box;
        background: var(--n4);
        padding: 0.6em;

        span {
          position: relative;
          display: block;
          margin: 0.75em auto;
          width: fit-content;
          color: var(--p1);
          font-size: 1.2em;
          line-height: 1.6em;
          cursor: pointer;
          user-select: none;
          &::before {
            content: "";
            position: absolute;
            background: var(--bg-linear);
            left: 0;
            right: 0;
            bottom: -5px;
            margin: 0 auto;
            width: 0;
            height: 4px;
            transition: 0.25s;
          }
          &:hover::before {
            transition: 0.3s;
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  header {
    box-sizing: border-box;
    padding-left: var(--pad-y);
    padding-right: var(--pad-y);
    nav {
      height: 5.5em;
      padding: 0;
      display: flex;
      align-items: center;
      .btn {
        display: block;
      }
      .mask,
      img {
        display: none;
      }
      .menu-desktop {
        display: flex;
        height: 5.5em;
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 1em;
          position: relative;
          opacity: 0.5;
          cursor: pointer;
          user-select: none;
          transition: 0.25s;

          &::before {
            content: "";
            position: absolute;
            background: var(--bg-linear);
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 0;
            height: 4px;
            transition: 0.25s;
          }
          &:hover {
            opacity: 1;
            &::before {
              transition: 0.3s;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>