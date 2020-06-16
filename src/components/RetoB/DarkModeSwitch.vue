<template>
  <div class="dark-mode">
    <p class="dark-mode-title">Dark Mode</p>
    <input type="checkbox" id="checkbox" class="checkbox" @click="changeMode()" />
    <label for="checkbox" class="switch"></label>
  </div>
</template>

<script>
export default {
  methods: {
    changeMode() {
      this.$emit('changeMode')
    }
  }
}
</script>

<style lang="scss" scoped>
.dark-mode {
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  &-title {
    color: var(--text-color);

    margin: 0;
  }

  .checkbox {
    display: none;
    &:checked ~ .switch::before {
      transform: translate(0);
    }
  }

  .switch {
    background: var(--switch-color);
    display: block;
    height: 28px;
    width: 58px;
    padding: 4px;
    border-radius: 20px;
    box-sizing: border-box;
  }

  .switch::before {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    background: var(--bg-color);
    border-radius: 50%;
    transform: translate(30px);
    transition: 0.2s;
  }
}

@media screen and (min-width: 1024px) {
  .dark-mode {
    padding-top: 0;
    .dark-mode-title {
      margin: 5px;
    }
  }
}
</style>