<script>
import { store } from '../store';
import Jumbotron from './Jumbotron.vue';
import Cards from './Cards.vue';
import Card from './Card.vue';
import WorkingProcess from './WorkingProcess.vue';
export default {
  components: {
    Jumbotron,
    Cards,
    Card,
    WorkingProcess,
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
    <router-view></router-view>
    <Jumbotron />
    <Cards />
    <WorkingProcess />
  </main>
</template>

<style lang="scss" scoped></style>
