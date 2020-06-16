<template>
  <div class="overview">
    <h1 class="overview-title">Overview today</h1>
    <div class="grid">
      <TodayCard v-for="item in socials" :key="item.id" :social="item" />
    </div>
  </div>
</template>

<script>
import TodayCard from '@/components/RetoB/TodayCard'
export default {
  components: { TodayCard },
  data() {
    return {
      socials: [
        {
          title: 'Pages views',
          image: 'facebook',
          count: 87,
          status: 'up',
          perc: '3'
        },
        {
          title: 'Likes',
          image: 'facebook',
          count: 52,
          status: 'down',
          perc: '2'
        },
        {
          title: 'Likes',
          image: 'instagram',
          count: 546,
          status: 'up',
          perc: '22'
        },
        {
          title: 'Profile Views',
          image: 'instagram',
          count: 534,
          status: 'up',
          perc: '13'
        },
        {
          title: 'Retweets',
          image: 'twitter',
          count: 117,
          status: 'up',
          perc: '302'
        },
        {
          title: 'Likes',
          image: 'twitter',
          count: 704,
          status: 'up',
          perc: '24'
        },
        {
          title: 'Likes',
          image: 'youtube',
          count: 546,
          status: 'down',
          perc: '19'
        },
        {
          title: 'Total Views',
          image: 'youtube',
          count: 534,
          status: 'down',
          perc: '12'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.overview {
  text-align: left;
  &-title {
    font-size: 1.3em;
    margin-bottom: 1.2em;
    color: var(--text-color);
  }
  .grid {
    display: grid;
    grid-gap: 20px;
  }
}
@media screen and (min-width: 780px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1440px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>