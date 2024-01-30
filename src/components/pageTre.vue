<script>
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
      images: [
        { img: "public\svg\svg-0.svg"},
        { img: "public\svg\svg-1.svg"},
        { img: "public\svg\svg-2.svg"},
        { img: "public\svg\svg-3.svg"},
        { img: "public\svg\svg-4.svg"},
        { img: "public\svg\svg-5.svg"},
        { img: "public\svg\svg-6.svg"},
        { img: "public\svg\svg-7.svg"},
        { img: "public\svg\svg-8.svg"},
       
      ]
    };
  },
  methods: {},
};
</script>



<template>

<div>
    <div v-for="(elem, i) in images" :key="i">

        <div class="visible">
            
        </div>
      
    </div>
</div>







</template>



<style lang="scss" scoped>

.visibile{
    border: 1px solid black;
    width: 25%;
    height: 200px;
}


</style>


