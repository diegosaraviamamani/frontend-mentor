<template>
  <div class="wrapper">
    <Header />
    <First />
    <Curve />
    <Second />
    <Third />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/RetoA/Header.vue'
import First from '@/components/RetoA/First.vue'
import Curve from '@/components/RetoA/Curve.vue'
import Second from '@/components/RetoA/Second.vue'
import Third from '@/components/RetoA/Third.vue'
import Footer from '@/components/RetoA/Footer.vue'

export default {
  components: { Header, First, Second, Third, Curve, Footer }
}
</script>

<style lang="scss">
:root {
  --p1: hsl(243, 87%, 12%);
  --p2: hsl(238, 22%, 44%);
  --a1: hsl(224, 93%, 58%);
  --a2: hsl(170, 45%, 43%);
  --n1: hsl(240, 75%, 98%);
  --n2: hsl(0, 0%, 75%);
}
.wrapper {
  max-width: 1440px;
  padding: 0 1.5em;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
img {
  width: 100%;
}
button {
  border: none;
}
@media screen and (min-width: 1440px) {
  .wrapper {
    padding: 0 5em;
  }
}
</style>