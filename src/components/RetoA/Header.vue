<template>
  <div class="nav">
    <img class="logo" src="@/assets/reto-a/logo.svg" alt />
    <div class="links">
      <span v-for="link in links" :key="link" class="link">{{link}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ['Features', 'Team', 'Sign in']
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 1.5em 0;
  display: flex;
  justify-content: space-between;
  .logo {
    height: 1.5em;
    width: 5em;
  }
  .links {
    display: flex;
    height: 1.5em;
    .link {
      display: flex;
      align-items: center;
      padding-left: 2em;
      font-size: 0.75em;
    }
  }
}
@media screen and (min-width: 1440px) {
  .nav {
    font-size: 30px;
  }
}
</style>