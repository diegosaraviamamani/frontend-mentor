<template>
  <div>
    <article class="card" :style="'--social-color: '+social.color">
      <p class="card-title">
        <img :src="getImage(social.image)" :alt="social.image" />@DiegoSaravia
      </p>
      <p class="card-followers">
        <span class="card-followers-number">{{social.total}}</span>
        <span class="card-followers-title">Followers</span>
      </p>
      <p class="card-today" :style="todayColor">
        <img :src="getImage(social.status)" />
        {{social.today}} Today
      </p>
    </article>
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
.card {
  background: var(--card-color);
  position: relative;
  overflow: hidden;
  padding: 10px;
  border-radius: 5px;
  text-align: center;

  &:before {
    content: "";
    background: var(--social-color);
    display: block;
    position: absolute;
    height: 4px;
    right: 0;
    left: 0;
    top: 0;
  }
  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    font-size: 0.85em;
    font-weight: bold;
    img {
      padding-right: 10px;
      width: fit-content;
    }
  }

  &-followers {
    &-number {
      font-size: 50px;
      font-weight: 700;
      color: var(--text-color);
    }

    &-title {
      display: block;
      font-size: 0.75em;
      letter-spacing: 5px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  &-today {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 0.8em;
    font-weight: bold;
    margin: 30px 0;
    color: var(--status-color);
    & img {
      width: fit-content;
      margin-right: 10px;
    }
  }
}
</style>