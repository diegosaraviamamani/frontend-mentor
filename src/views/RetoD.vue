<template>
  <main class="reto-d">
    <div class="container">
      <Header />
      <div class="subcontainer bg-n3">
        <SectionA />
        <SectionB />
        <SectionC />
        <Footer />
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/RetoD/Header";

import SectionA from "@/components/RetoD/SectionA";
import SectionB from "@/components/RetoD/SectionB";
import SectionC from "@/components/RetoD/SectionC";
import Footer from "@/components/RetoD/Footer";

export default {
  components: { Header, SectionA, SectionB, SectionC, Footer }
};
</script>

<style lang="scss">
.reto-d {
  --pad-page: 1.5em;
  $colors: (
    p1: hsl(233, 26%, 24%),
    p2: hsl(136, 65%, 51%),
    p3: hsl(192, 70%, 51%),
    n1: hsl(233, 8%, 62%),
    n2: rgb(244, 245, 247),
    n3: hsl(0, 0%, 98%),
    n4: hsl(0, 0%, 100%)
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
  --bg-menu: linear-gradient(
    to bottom,
    hsla(233, 26%, 24%, 1) 0%,
    hsla(233, 26%, 24%, 0.1) 100%
  );
  --bg-linear: linear-gradient(to right, var(--p2) 0%, var(--p3) 100%);
  color: var(--p1);
  h1,
  h2,
  h3 {
    font-weight: 400;
  }
  p,
  h6 {
    color: var(--n1);
  }
  p {
    font-size: 0.9em;
    line-height: 1.7em;
  }
  .container {
    min-height: 100vh;
    .subcontainer {
      max-width: 375px;
      margin: 0 auto;
    }
  }
}
@media screen and (min-width: 1440px) {
  .reto-d {
    --pad-y: 10.25em;
    .container {
      .subcontainer {
        max-width: 1440px;
      }
    }
  }
}
</style>