<script>
import { store } from '../../store.js';
import Jumbotron from '../Jumbotron.vue';
import Cards from '../Cards.vue';
import Card from '../Card.vue';
import WorkingProcess from '../WorkingProcess.vue';
import Contacts from '../Contacts.vue';
import Articles from '../Articles.vue';
export default {
  components: {
    Jumbotron,
    Cards,
    Card,
    WorkingProcess,
    Contacts,
    Articles,
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
  <Jumbotron />
  <Cards />
  <WorkingProcess />
  <Contacts />
  <Articles />
</template>

<style lang="scss" scoped></style>
