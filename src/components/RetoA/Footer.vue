<template>
  <div class="footer">
    <div class="logo">
      <img src="@/assets/reto-a/logo-dark.svg" class="image" />
    </div>
    <div class="content">
      <div class="info">
        <p>
          <img src="@/assets/reto-a/icon-phone.svg" class="phone" />Phone: +1-543-123-4567
        </p>
        <p>
          <img src="@/assets/reto-a/icon-email.svg" class="email" /> example@fylo.com
        </p>
      </div>
      <div v-for="list in lists" :key="list.id" class="list">
        <p v-for="link in list" :key="link">{{ link }}</p>
      </div>
      <div class="socials">
        <span class="social">f</span>
        <span class="social">t</span>
        <span class="social">i</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        ['About Us', 'Jobs', 'Press', 'Blog'],
        ['Contact Us', 'Terms', 'Privacy']
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
p:last-of-type {
  margin-bottom: 0;
}
.footer {
  text-align: left;
  margin-left: -1.5em;
  width: 100vw;
  background: var(--p1);
  color: white;
  padding: 40px;
  box-sizing: border-box;
  display: grid;
  row-gap: 10px;
  .content {
    display: grid;
    row-gap: 50px;
  }
  .logo {
    .image {
      height: 3.5em;
      width: 12em;
      margin: 20px 0;
    }
  }
  .info {
    p {
      display: flex;
      align-items: center;
      .phone,
      .email {
        height: 1em;
        width: 1.2em;
        margin-right: 20px;
      }
    }
  }
  .socials {
    display: flex;
    justify-content: center;
    .social {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1em;
      height: 1em;
      padding: 5px;
      border-radius: 50%;
      border: 1px solid white;
      margin: 5px;
    }
  }
}
@media screen and (min-width: 650px) {
  .footer {
    display: block;
    .logo {
      width: 100%;
    }
    .content {
      display: flex;
      .info {
        width: 35%;
      }
      .list {
        width: 20%;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .footer {
    margin-left: calc((1440px - 100vw - 10em) / 2);
    padding: 5em calc((100vw - 1440px + 10em) / 2);
  }
}
</style>