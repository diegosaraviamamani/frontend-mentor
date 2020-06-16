<template>
  <main class="reto-b">
    <div :style=" [styles.colors] " class="container">
      <div class="subContainer">
        <Header @changeMode="changeMode" />
        <TopCards />
        <Overview />
      </div>
    </div>
  </main>
</template>
<script>
import Header from '@/components/RetoB/Header'
import TopCards from '@/components/RetoB/TopCards'
import Overview from '@/components/RetoB/Overview'

const darkModeColors = {
  '--card-color': '#252C43',
  '--text-color': 'white',
  '--bg-color': '#1F2330',
  '--switch-color': 'linear-gradient(to right, #437FB1 0%, #39BB98 100%)'
}
const lightModeColors = {
  '--card-color': '#f0f3fa',
  '--text-color': 'black',
  '--bg-color': 'white',
  '--switch-color': '#5f616d'
}

export default {
  components: { Header, TopCards, Overview },
  data() {
    return {
      darkMode: true,
      styles: {
        colors: darkModeColors
      }
    }
  },
  methods: {
    changeMode() {
      this.darkMode = !this.darkMode
      this.darkMode && (this.styles.colors = darkModeColors)
      !this.darkMode && (this.styles.colors = lightModeColors)
    }
  }
}
</script>
<style lang="scss">
.reto-b {
  * {
    transition: 0.5s;
  }
  .container {
    background: var(--bg-color);
    color: #5f616d;
    min-height: 100vh;
    .subContainer {
      max-width: 1440px;
      margin: auto;
      padding: 1em;
      font-family: "Inter", sans-serif;
      display: grid;
      grid-row-gap: 20px;
    }
  }
}
</style>
