<template>
  <main class="reto-c" :style="colors">
    <div class="container">
      <div class="header" />
      <div class="subcontainer">
        <FilterCard :filters="filters" @remove="remove" @clear="clear" />
        <JobCard
          v-for="item in data"
          v-show="show(item)"
          :key="item.id"
          :job="item"
          :filters="filters"
          @add="add"
        />
      </div>
    </div>
  </main>
</template>

<script>
import data from "@/assets/reto-c/data.json";
import JobCard from "@/components/RetoC/JobCard";
import FilterCard from "@/components/RetoC/FilterCard";
export default {
  components: { JobCard, FilterCard },
  data() {
    return {
      filters: ["HTML"],
      data: data,
      colors: {
        "--a": "hsl(180, 29%, 50%)",
        "--b": "hsl(180, 52%, 96%)",
        "--c": "hsl(180, 31%, 95%)",
        "--d": "hsl(180, 8%, 52%)",
        "--e": "hsl(180, 14%, 20%)"
      }
    };
  },
  methods: {
    add(item) {
      !this.filters.includes(item) && this.filters.push(item);
    },
    clear() {
      this.filters = [];
    },
    remove(text) {
      this.filters = this.filters.filter(el => el !== text);
    },
    tags(job) {
      return [job.role, job.level, ...job.languages, ...job.tools];
    },
    show(job) {
      const tags = this.tags(job);
      let count = 0;
      this.filters.forEach(element => {
        tags.includes(element) && count++;
      });
      if (count == this.filters.length) {
        return true;
      }
    }
  }
};
</script>

<style lang="scss">
.reto-c {
  * {
    transition: 0.5s;
  }
  $colors: (
    "a": "hsl(180, 29%, 50%)",
    "b": "hsl(180, 52%, 96%)",
    "c": "hsl(180, 31%, 95%)",
    "d": "hsl(180, 8%, 52%)",
    "e": "hsl(180, 14%, 20%)"
  );

  @each $name, $color in $colors {
    .text-#{$name} {
      color: #{$color};
    }
    .bg-#{$name} {
      background: #{$color};
    }
    --#{$name}: #{$color};
  }
  .container {
    min-height: 100vh;

    background: var(--c);
    .header {
      width: 100%;
      height: 150px;
      background: var(--a);
      background-image: url("../assets/reto-c/bg-header-mobile.svg");
    }
    .subcontainer {
      display: grid;
      grid-row-gap: 40px;
      max-width: 1440px;
      margin: auto;
      padding: 3.5em 1.5em;
      box-sizing: border-box;
      font-family: "Spartan", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Oxygen, Ubuntu, Roboto, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 700;
    }
  }
}
@media screen and (min-width: 1440px) {
  .reto-c {
    .container {
      .header {
        background-image: url("../assets/reto-c/bg-header-desktop.svg");
        background-repeat: no-repeat;
        background-position-x: center;
        background-size: 1440px;
      }
    }
  }
}
</style>