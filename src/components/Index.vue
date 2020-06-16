<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Lista de Projectos</h3>
    <ul>
      <li v-for="item in projects" :key="item">
        <router-link :to="item.link" exact>{{item.title}}</router-link>
      </li>
    </ul>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li v-for="item in plugins" :key="item">
        <a :href="item.link" exact>{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    const base =
      'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-'
    return {
      projects: [
        { title: 'Proyecto 1', link: '/reto-a' },
        { title: 'Proyecto 2', link: '/reto-b' },
        { title: 'Proyecto 3', link: '/reto-c' }
      ],
      plugins: [
        { title: 'pwa', link: base + 'pwa' },
        { title: 'router', link: base + 'router' },
        { title: 'vuex', link: base + 'vuex' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
