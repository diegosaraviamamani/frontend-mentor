<template>
  <div class="top-cards">
    <div class="grid">
      <Card v-for="item in socials" :key="item.id" :social="item" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/RetoB/Card'
export default {
  components: { Card },
  data() {
    return {
      socials: [
        {
          image: 'facebook',
          total: '13k',
          today: '9',
          status: 'up',

          color: '#168ef4'
        },
        {
          image: 'twitter',
          total: '326',
          today: '5',
          status: 'down',
          color: 'hsl(203, 89%, 53%)'
        },
        {
          image: 'instagram',
          total: '187',
          today: '2',
          status: 'down',

          color:
            'linear-gradient(to right,hsl(37, 97%, 70%) 0%,hsl(329, 70%, 58%) 100%);'
        },
        {
          image: 'youtube',
          total: '1987',
          today: '4',
          status: 'up',
          color: 'hsl(348, 97%, 39%)'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.top-cards {
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