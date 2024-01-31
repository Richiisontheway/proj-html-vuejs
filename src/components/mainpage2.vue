<script>
import { store } from '../store';
import js_pulsanti_page2 from '../components/js_pulsanti_page2.vue'
import email from '../components/email.vue'
import Articles from './Articles.vue';
export default {
    data() {
        return {
        store,
        };
    },
    components:{
        js_pulsanti_page2,
        email,
        Articles
    },
    methods: {},
};
</script>

<template>
    <section>
        <div class="illustration--jumbotron">
            <!-- <img src="../../public/img/h-2-background-1.jpg" alt=""> -->
            <h2>
                What we Offer
            </h2>
        </div>
    </section>
    <section>
        <js_pulsanti_page2 />
    </section>
    <section>
        <email />
    </section>
    <section>
        <Articles />
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.illustration--jumbotron{
    height: 300px;
    background-image: url(../../public/img/h-2-background-1.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        color: black;
    }
}
</style>