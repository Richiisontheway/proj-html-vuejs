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
    <div class="container my-5 illustration--email_container d-flex align-items-center justify-content-center">
        <div class="w-75 text-center">
            <h4>
                subscribe to our Newsletter
            </h4>
            <br>
            <input type="text" class="w-50 me-4" placeholder="YOUR EMAIL">
            <button class="illustration--button">
                send
            </button>
        </div>
    </div>
</template>
<style lang="scss">

    .illustration--email_container{
        background-image: url(../../public/img/h-2-background-1.jpg);
        height: 600px;
        background-size: cover;

        input{
            padding: 10px 10px;
        }

        .illustration--button{
            background-color: #C0E1CF;
            padding: 10px 50px;
        }
    }

</style>