<template>
  <section class="section-c">
    <h1>Latest Articles</h1>
    <div class="grid">
      <article v-for="n in articles" :key="n.id">
        <img :src="imageURL(n.image)" alt />
        <div class="content">
          <h6 class="autor">By {{n.autor}}</h6>
          <h4 class="title">{{n.title}}</h4>
          <p class="text">{{n.text}}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          image: "currency",
          autor: "Claire Robinson",
          title: "Receive money in any currency with no fees",
          text:
            "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        },
        {
          image: "restaurant",
          autor: "Wilson Hutton",
          title: "Treat yourself without worrying about money",
          text:
            "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },
        {
          image: "plane",
          autor: "Wilson Hutton",
          title: "Take your Easybank card wherever you go",
          text:
            "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        },
        {
          image: "confetti",
          autor: "Claire Robinson",
          title: "Our invite-only Beta accounts are now live!",
          text:
            "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        }
      ]
    };
  },
  methods: {
    imageURL(image) {
      return "img/reto-d/image-" + image + ".jpg";
    }
  }
};
</script>

<style lang="scss" scoped>
.section-c {
  padding: 3.5em var(--pad-page) 6em;
  h1 {
    font-size: 2em;
  }
  .grid {
    display: grid;
    gap: 1.5em;
    article {
      border-radius: 8px;
      overflow: hidden;
      background: var(--n4);
      height: 400px;
      img {
        height: 50%;
      }
      .content {
        display: grid;
        gap: 10px;
        text-align: left;
        padding: calc(var(--pad-page) + 5px) calc(var(--pad-page) + 6px);
        * {
          margin: 0;
        }
        h4,
        h6 {
          font-weight: 400;
        }
        p {
          font-size: 0.82em;
          line-height: 1.4;
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .section-c {
    padding: 4em var(--pad-y) 5em;
    h1 {
      text-align: left;
      font-size: 2.5em;
    }
    .grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
  }
}
</style>