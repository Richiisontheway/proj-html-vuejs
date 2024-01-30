<script>
import { store } from '../../store.js';
import Jumbotron from '../Jumbotron.vue';
import Cards from '../Cards.vue';
import Card from '../Card.vue';
import WorkingProcess from '../WorkingProcess.vue';
import Contacts from '../Contacts.vue';
export default {
  components: {
    Jumbotron,
    Cards,
    Card,
    WorkingProcess,
    Contacts,
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
</template>

<style lang="scss" scoped></style>
