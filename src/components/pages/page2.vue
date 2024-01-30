<script>
import { store } from '../../store';
import mainpage2 from '../mainpage2.vue'
export default{
    data(){
        return{
            store,
        };
    },
    components:{
        mainpage2
    }
    
}
</script>
<template>
    <mainpage2 />
</template>