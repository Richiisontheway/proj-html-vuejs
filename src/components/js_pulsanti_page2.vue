<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            isActive1: false,
            isActive2: true,
            isActive3: true
        };
    },
    methods: {
        change_active_text(){
            this.isActive1 = true
            if(this.isActive2 == true){
                this.isActive2 = false
            }
            if (this.isActive3 == true) {
                this.isActive3 = false
            }
            //console.log(this.change_active_text)
        },
        change_active_text2(){
            this.isActive2 = true
            if(this.isActive1 == true){
                this.isActive1 = false
            }
            if (this.isActive3 == true) {
                this.isActive3 = false
            }
            //console.log('ciao2')
        },
        change_active_text3(){
            this.isActive3 = true
            if(this.isActive1 == true){
                this.isActive1 = false
            }
            if (this.isActive2 == true) {
                this.isActive2 = false
            }
            //console.log('ciao3')
        }
    },
    mounted(){
        this.change_active_text();
    },
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
                    <li @click.prevent="change_active_text()">
                        <a href="#">
                            animation
                        </a>
                    </li>
                    <li @click.prevent="change_active_text2()">
                        <a href="#">
                            design
                        </a>
                    </li>
                    <li @click.prevent="change_active_text3()">
                        <a href="#">
                            lettering
                        </a>
                    </li>
                </ul>
                <div class="line-under"></div>
                <div :class="{'d-block': isActive1, 'd-none':isActive1 == false}">
                    Hinc assum pro ea. Meis verear an vel, ex quando legere scriptorem has, mea vide vidisse an. Eius eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te. Ex mei illud illum laudem, quem bonorum ius ne. His an omnes propriae fabellas, an duo aeterno expetenda explicari, ea vix propriae deseruisse. Munere utamur vertere.
                </div>
                <div :class="{'d-block': isActive2, 'd-none':isActive2 == false}">
                    Integre appareat cu mea, te mel ferri percipitur efficiendi, in ius phaedrum invenire expetendis. Eius eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te. Ex mei illud illum laudem, quem bonorum ius ne. His an omnes propriae fabellas, an duo aeterno expetenda explicari, ea vix propriae deseruisse. Inani expetendis ut cum.
                </div>
                <div :class="{'d-block': isActive3, 'd-none':isActive3 == false}">
                    Te sale iusto fabellas sed, eu sea tollit suscipiantur. Oblique omnesque ne eum, id putent malorum admodum vel, vix no tantas admodum nominavi. Eius eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te. Ex mei illud illum laudem, quem bonorum ius ne. His an omnes propriae fabellas, an duo aeterno expetend.
                </div>
            </div>
        </div>
        <div class="row d-flex align-items-center">
            <div class="col my-5 ">
                <h4>
                    vibes loving <span>intro</span>
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
h4{
    font-size: 50px;
}
span{
    font-family: 'Playfair Display', serif !important;
    font-style: italic;
    font-weight: bold;
}
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
    margin-top: 85px;
    li{
        width: calc(100% / 3);
        text-align: center;
        //border-bottom: 4px solid rgba($color: lightgrey, $alpha: 0.5);
        
        a{
            text-decoration: none;
            color: black;
        }
        
    }
}
.active{
    display: none;
}
.line-under{
    padding: 1px 0;
    background-color: lightblue;
    margin-bottom: 10px;
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
