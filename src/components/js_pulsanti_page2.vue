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
                <ul class="illustration--list_special">
                    <li>
                        <a href="#">
                            animation
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            design
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            lettering
                        </a>
                    </li>
                </ul>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, hic nam similique atque nemo eius, est eveniet, iure sequi itaque reiciendis doloremque. Obcaecati aspernatur voluptatem sed eveniet maxime! Repellat, atque?
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col my-5 ">
                <h4>
                    vibes loving intro
                </h4>
                <div>
                    Mundi dolore molestie cu qui, duo homero accumsan eligendi cu. Id nam posse ocurreret disputando, ad sed nihil eirmod theophrastus. Ut civibus noluisse ocurreret mel, duo bonorum accusamus torquatos id. Viris voluptaria vituperata et quo, putent bonorum nam in. Prodesset signiferumque nec an. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur.
                </div>
            </div>
            <div class="col">
                
                <ul class="illustration--bar">
                    <li>
                        ANIMATION
                    </li>
                    <li>
                        50%
                    </li>
                </ul>
                <ul class="illustration--bar">
                    <li>
                        DESING
                    </li>
                    <li>
                        60%
                    </li>
                </ul>
                <ul class="illustration--bar">
                    <li>
                        LETTERING
                    </li>
                    <li>
                        90%
                    </li>
                </ul>
                <ul class="illustration--bar">
                    <li>
                        ANIMATION
                    </li>
                    <li>
                        70%
                    </li>
                </ul>

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
    .illustration--list_special{
        list-style: none;
        display: flex;
        padding-left: 0;
        li{
            width: calc(100% / 3);
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 4px solid rgba($color: lightgrey, $alpha: 0.5);
            
            a{
            text-decoration: none;
            color: black;
            }

        }
    }
    .illustration--bar{
        padding-left: 0;
        display: flex;
        list-style: none;
        justify-content: space-between;
        border-bottom: 4px solid rgba($color: lightgrey, $alpha: 0.5);
        
        li{
            border-bottom: none;
            text-align: left;
            width: 30px;
            padding-bottom: 20px;
        }
    }
</style>
