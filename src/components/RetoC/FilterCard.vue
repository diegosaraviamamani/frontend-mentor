<template>
  <div v-if="show" class="filter-card">
    <div class="tags">
      <Tag v-for="item in filters" :key="item.id" :text="item" @click="remove" filter />
    </div>
    <span class="clear" @click="clear()">Clear</span>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  components: { Tag },
  props: {
    filters: {
      type: Array,
      default: []
    }
  },
  computed: {
    show() {
      if (this.filters.length === 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    clear() {
      this.$emit("clear");
    },
    remove(text) {
      this.$emit("remove", text);
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-card {
  padding: 0.75em 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 10px 0 hsla(180, 29%, 50%, 0.25);
  line-height: 2em;
  margin-top: -90px;
  .tags {
    display: flex;
    flex-wrap: wrap;
  }
  .clear {
    color: var(--d);
    &:hover {
      color: var(--a);
      cursor: pointer;
      user-select: none;
      text-decoration: underline;
    }
  }
}
</style>