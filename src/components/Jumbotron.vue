<script>
import { store } from '../store';
export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <div class="jumbotron"></div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.jumbotron {
  width: 100%;
  height: 645px;
  background-color: aqua;
}
</style>
