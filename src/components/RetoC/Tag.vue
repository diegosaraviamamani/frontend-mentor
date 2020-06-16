<template>
  <span class="tag" :class="{filter: filter}" @click="$emit('click',text)">
    <div class="text">{{text}}</div>
    <div v-if="filter" class="image">
      <img src="img/reto-c/icon-remove.svg" />
    </div>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Tag"
    },
    filter: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  background: var(--c);
  color: var(--a);
  padding: 0 0.75em;
  margin-top: 14px;
  margin-right: 1em;
  font-size: 0.9em;
  border-radius: 5px;
  &:hover {
    background: var(--a);
    color: var(--b);
    cursor: pointer;
    user-select: none;
  }
}
.filter {
  margin: 0.5em 0;
  margin-right: 1em;
  padding-right: 0;
  display: flex;
  overflow: hidden;
  .text {
    padding-right: 10px;
  }
  .image {
    height: 100%;
    width: 2em;
    background: var(--a);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 15px;
    }
  }
  &:hover {
    background: var(--c);
    color: var(--a);
    .image {
      background: var(--e);
    }
  }
}
</style>