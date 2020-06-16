<template>
  <div class="job-card" :class="{featured: job.featured}">
    <img class="job-logo" :src="'img/reto-c/'+job.logo" />
    <div class="job-description">
      <div>
        <span class="title">{{job.company}}</span>
        <span class="pill bg-a" v-if="job.new">NEW!</span>
        <span class="pill bg-e" v-if="job.featured">FEATURED</span>
      </div>
      <div>
        <span class="position">{{job.position}}</span>
      </div>
      <div>
        <span>{{job.postedAt}}</span>
        <span>{{' - '+job.contract}}</span>
        <span>{{' - '+job.location}}</span>
      </div>
    </div>
    <div class="divider" />
    <div class="job-filters">
      <Tag v-for="i in tags" :key="i.id" :text="i" @click="add" />
    </div>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  components: { Tag },
  props: {
    job: {
      type: Object,
      default: {}
    },
    filters: {
      type: Array,
      default: []
    }
  },
  data() {
    const tags = [
      this.job.role,
      this.job.level,
      ...this.job.languages,
      ...this.job.tools
    ];
    return {
      tags: tags
    };
  },
  methods: {
    add(text) {
      this.$emit("add", text);
    }
  }
};
</script>

<style lang="scss" scoped>
.job {
  &-card {
    padding: 1.75em 1.5em 1.5em;
    text-align: left;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 10px 10px 0 hsla(180, 29%, 50%, 0.25);
    position: relative;
    line-height: 2em;
    .divider {
      height: 1px;
      width: 100%;
      background: var(--d);
      margin-top: 14px;
    }
  }
  &-logo {
    position: absolute;
    top: -25px;
    width: 3em;
  }
  &-description {
    .title {
      font-size: 0.9em;
      color: var(--a);
      margin-right: 1em;
    }
    .pill {
      font-size: 0.75em;
      border-radius: 20px;
      padding: 4px 10px;
      color: var(--b);
      margin-right: 10px;
    }
    .position {
      &:hover {
        color: var(--a);
        user-select: none;
        cursor: pointer;
      }
    }
    & div:nth-child(3) {
      font-size: 0.9em;
      font-weight: 400;
      color: var(--d);
    }
  }
  &-filters {
    display: flex;
    flex-wrap: wrap;
  }
}
.featured {
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: var(--a);
    width: 4px;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
}
@media screen and (min-width: 900px) {
  .job {
    &-card {
      display: grid;
      grid-template-columns: 6.5em 1fr 1fr;
      .divider {
        display: none;
      }
    }
    &-logo {
      margin: auto;
      margin-left: 0;
      position: static;
      width: 5em;
    }
    &-description {
      font-size: 1.1em;
    }
    &-filters {
      align-content: center;
      justify-content: right;
      .filter {
        margin: 0;
        margin-left: 1em;
        height: fit-content;
      }
    }
  }
}
</style>