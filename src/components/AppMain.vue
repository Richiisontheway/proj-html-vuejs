<script>
import { store } from '../store';

export default {
  components: {},
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
  </main>
</template>

<style lang="scss" scoped></style>
