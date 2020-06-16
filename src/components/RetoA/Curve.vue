<template>
  <div class="curve">
    <img class="curve-svg" src="@/assets/reto-a/bg-curve-mobile.svg" v-if="mobile" />
    <img class="curve-svg" src="@/assets/reto-a/bg-curve-desktop.svg" v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: true
    }
  },
  mounted() {
    this.resize()
  },

  created() {
    window.addEventListener('resize', this.resize)
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
  },

  methods: {
    resize() {
      this.width < 500 ? (this.mobile = true) : (this.mobile = false)
    }
  }
}
</script>

<style lang="scss" scoped>
.curve {
  margin-left: -1.5em;
  margin-bottom: -1em;
  width: 100vw;
  .curve-svg {
    width: 100%;
    margin-top: -50px;
    height: 40px;
  }
}
@media screen and (min-width: 1440px) {
  .curve {
    margin-left: calc((1440px - 10em - 100vw) / 2);
    height: 100px;
    .curve-svg {
      height: 150px;
    }
  }
}
</style>