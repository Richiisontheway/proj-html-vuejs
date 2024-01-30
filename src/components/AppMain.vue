<script>
import { store } from '../store';
import Jumbotron from './Jumbotron.vue';
import Cards from './Cards.vue';
import Card from './Card.vue';
export default {
  components: {
    Jumbotron,
    Cards,
    Card,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <main>
    <Jumbotron />
    <Cards />
  </main>
</template>

<style lang="scss" scoped></style>
