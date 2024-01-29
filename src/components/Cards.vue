<script>
import { store } from '../store';
import Card from './Card.vue';
export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
      cards: [
        {
          src: 'h-2-port-img-1',
          title: 'All these illustrations',
          description: 'Illustration',
        },
        {
          src: 'h-2-port-img-2',
          title: 'Type and illustrations',
          description: 'Illustration',
        },
        {
          src: 'h-2-port-img-3',
          title: 'Draw and illustrate',
          description: 'Illustration',
        },
        {
          src: 'h-2-port-img-4',
          title: 'Illustrations of novel',
          description: 'Illustration',
        },
        {
          src: 'h-2-port-img-5',
          title: 'Too many illustrations',
          description: 'Illustration',
        },
        {
          src: 'h-2-port-img-6',
          title: 'Dreams are illustrations',
          description: 'Illustration',
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <section class="cards">
    <div class="row row-cols-3">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :Image="card.src"
        :Title="card.title"
        :Description="card.description"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.cards {
  width: 100%;
}
</style>
