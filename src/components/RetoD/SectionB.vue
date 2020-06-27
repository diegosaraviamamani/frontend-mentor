<template>
  <section class="section-b">
    <div class="intro">
      <h1>{{title}}</h1>
      <p>{{text}}</p>
    </div>
    <div class="content">
      <div v-for="n in content" :key="n.id" class="feature">
        <img :src="iconURL(n.icon)" alt />
        <h3>{{n.title}}</h3>
        <p>{{n.text}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Why choose Easybank?",
      text:
        "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
      content: [
        {
          icon: "online",
          title: "Online Banking",
          text:
            "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
          icon: "budgeting",
          title: "Simple Budgeting",
          text:
            "See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits."
        },
        {
          icon: "onboarding",
          title: "Fast Onboarding",
          text:
            "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
          icon: "api",
          title: "Open API",
          text:
            "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        }
      ]
    };
  },
  methods: {
    iconURL(icon) {
      let url = "img/reto-d/icon-" + icon + ".svg";
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
.section-b {
  padding: 2em var(--pad-page);
  background: var(--n2);
  h1 {
    font-size: 2.05em;
    font-weight: 400;
    margin-bottom: 0px;
  }
  p {
    line-height: 1.7em;
    font-size: 0.95em;
  }
  .intro {
    margin-bottom: 50px;
  }
  .content {
    display: grid;
    grid-gap: 20px;
    .feature {
      img {
        width: 70px;
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .section-b {
    padding: 5em var(--pad-y);
    text-align: left;
    .intro {
      width: 60%;
      h1 {
        font-size: 2.5em;
      }
      p {
        font-size: 1.15em;
      }
    }
    .content {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 25px;
      h3 {
        font-size: 1.5em;
      }
      p {
        font-size: 1.04em;
      }
    }
  }
}
</style>