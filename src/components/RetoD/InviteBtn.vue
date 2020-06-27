<template>
  <span :style="styles">Request Invite</span>
</template>

<script>
export default {
  props: {
    styles: Object
  }
};
</script>

<style lang="scss" scoped>
span {
  display: block;
  width: fit-content;
  padding: 0.9em 2em;
  border-radius: 1.6em;
  font-size: 15px;
  font-weight: 700;
  color: var(--n4);
  background: var(--bg-linear);
  cursor: pointer;
  user-select: none;
  &:hover {
    background: var(--bg-linear);
    opacity: 0.7;
  }
}
@media screen and (min-width: 1440px) {
  span {
    margin-left: 0 !important;
  }
}
</style>