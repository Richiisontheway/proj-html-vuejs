<script>
import { store } from '../store';
export default {
    data() {
        return {
        store,
        };
    },
    methods: {
        change_active_text(){
            console.log('ciao');
            
        },
        change_active_text2(){
            console.log('ciao2')
        },
        change_active_text3(){
            console.log('ciao3')
        }
    },
    updated(){
        this.change_active_text();
        this.change_active_text2();
        this.change_active_text3();
    }
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
                    <li @click="change_active_text()">
                        <a href="#">
                            animation
                        </a>
                    </li>
                    <li @click="change_active_text2()">
                        <a href="#">
                            design
                        </a>
                    </li>
                    <li @click="change_active_text3()">
                        <a href="#">
                            lettering
                        </a>
                    </li>
                </ul>
                <div v-if="change_active_text == true">
                    <div>
                        lorem
                    </div>
                </div>
                <div v-else-if="change_active_text2 == true">
                    <div>
                        ciao
                    </div>
                </div>
                <div v-else-if="change_active_text3 == true">
                    <div>
                        helo
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex align-items-center">
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
                <div class="grey-line">
                    <div class="orange-line w-50">
                    </div>
                </div>
                <ul class="illustration--bar">
                    <li>
                        DESING
                    </li>
                    <li>
                        60%
                    </li>
                </ul>
                <div class="grey-line">
                    <div class="orange-line second">
                    </div>
                </div>
                <ul class="illustration--bar">
                    <li>
                        LETTERING
                    </li>
                    <li>
                        90%
                    </li>
                </ul>
                <div class="grey-line">
                    <div class="orange-line third">
                    </div>
                </div>
                <ul class="illustration--bar">
                    <li>
                        ANIMATION
                    </li>
                    <li>
                        70%
                    </li>
                </ul>
                <div class="grey-line">
                    <div class="orange-line fourth">
                    </div>
                </div>
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
    //margin-bottom: 10px;
    li{
        width: calc(100% / 3);
        text-align: center;
        padding-bottom: 20px;
        //border-bottom: 4px solid rgba($color: lightgrey, $alpha: 0.5);
        
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
    //border-bottom: 4px solid rgba($color: lightgrey, $alpha: 0.5);
    
}
.grey-line{
    background-color: lightblue;
    margin-bottom: 10px ;
    
    .orange-line{
        padding: 2px 0;
        background-color: #F5D8CA;
    }
    .second{
        width: 60%;
    }
    .third{
        width: 90%;
    }
    .fourth{
        width: 70%;
    }
}
</style>
