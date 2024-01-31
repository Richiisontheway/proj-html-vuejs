<script>
import { store } from '../store';
import js_pulsanti_page2 from '../components/js_pulsanti_page2.vue'
export default {
    data() {
        return {
        store,
        };
    },
    components:{
        js_pulsanti_page2
    },
    methods: {},
};
</script>

<template>
    <section>
        <div class="illustration--jumbotron">
            <img src="../../public/img/h-2-background-1.jpg" alt="">
            <h2>
                What we Offer
            </h2>
        </div>
    </section>
    <section>
        <js_pulsanti_page2 />
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.illustration--jumbotron{
    height: 300px;
    position: relative;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: 0;
        position: absolute;
    }
    h2{
        position: absolute;
        top: 50%;
        left: 40%;
        right: 40%;
        z-index: 1;
        
    }
}
</style>