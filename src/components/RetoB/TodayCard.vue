<template>
  <div class="card-sm">
    <p class="card-sm-title">{{social.title}}</p>
    <p class="card-sm-icon">
      <img :src="getImage(social.image)" />
    </p>
    <p class="card-sm-number">{{social.count}}</p>
    <p class="card-sm-perc" :style="todayColor">
      <span>
        <img :src="getImage(social.status)" />
        {{social.perc}}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['social'],
  computed: {
    todayColor() {
      let style
      this.social.status === 'up'
        ? (style = { '--status-color': 'hsl(163, 72%, 41%)' })
        : (style = { '--status-color': 'hsl(356, 69%, 56%)' })
      return style
    }
  },
  methods: {
    getImage(img) {
      return 'img/reto-b/icon-' + img + '.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.card-sm {
  background: var(--card-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  padding: 25px;
  border-radius: 10px;

  &-title {
    font-weight: bold;
  }

  &-icon {
    text-align: right;
    img {
      width: 1em;
    }
  }

  &-number {
    color: var(--text-color);
    font-weight: bold;
    line-height: 0.9em;
    font-size: 35px;
  }

  &-perc {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: var(--status-color);
    & span {
      display: flex;
      align-items: center;
      font-size: 0.9em;
      font-weight: bold;
    }

    & img {
      margin-right: 5px;
    }
  }
}
</style>