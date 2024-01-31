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
    <div class="container my-5 ">

        <div class="row">
            <div class="col">
                <div class="illustration--img_container">
                    <img src="../../public/img/h-2-port-img-6.jpg" alt="">
                </div>
            </div>
            <div class="col">
                ciao
            </div>
        </div>

    </div>
</template>
<style lang="scss">
    .illustration--img_container{
        height: 400px;
        width: 500px;
        img{
            height: 100%;
            width: 100%;
           //object-fit: contain;
        }
    }
</style>
