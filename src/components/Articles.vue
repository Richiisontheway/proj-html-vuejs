<script>
import { store } from '../store';
import Article from './Article.vue';
export default {
  components: {
    Article,
  },
  data() {
    return {
      store,
      articles: [
        {
          day: '07',
          month: 'may 19',
          src: 'h-2-blog-img-1',
          text: 'this way, love: a detailed guide through new design',
          signature: 'by emily fields',
        },
        {
          day: '07',
          month: 'may 19',
          src: 'h-2-blog-img-2',
          text: ' i try to give people a different way of looking art',
          signature: 'by emily fields',
        },
        {
          day: '07',
          month: 'may 19',
          src: 'h-2-blog-img-3',
          text: 'introduce richard laperrière of those amazing features',
          signature: 'by emily fields',
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <section>
    <div class="articles-container">
      <div class="row row-cols-3">
        <Article
          v-for="(article, index) in articles"
          :key="index"
          :Day="article.day"
          :Month="article.month"
          :Image="article.src"
          :Text="article.text"
          :Signature="article.signature"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
section {
  height: 700px;
  .articles-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .row {
      width: 90%;
    }
  }
}
</style>
