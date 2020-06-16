<template>
  <header class="header">
    <div class="header-grid">
      <div>
        <h1 class="header-title">Social Media Dashboard</h1>
        <p class="header-total">Total Followers: 23,004</p>
      </div>
      <DarkModeSwitch @changeMode="changeMode()" />
    </div>
  </header>
</template>

<script>
import DarkModeSwitch from '@/components/RetoB/DarkModeSwitch'
export default {
  components: { DarkModeSwitch },
  methods: {
    changeMode() {
      this.$emit('changeMode')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  text-align: left;

  &-title {
    margin-top: 0;
    font-size: 1.6em;
    color: var(--text-color);
  }
  &-total {
    margin-top: -10px;
    font-weight: bold;
    font-size: 0.85em;
    padding-bottom: 25px;
    border-bottom: 2.9px solid #afb1b8;
  }
}
@media screen and (min-width: 1024px) {
  .header {
    &-total {
      border: none;
    }
    &-grid {
      display: grid;
      grid-template-columns: 1fr 200px;
    }
  }
}
</style>