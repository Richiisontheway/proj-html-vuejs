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
                Subscribe to our 
                <span>newsletter</span>
            </h4>
            <br>
            <form>
                <input type="email" class="w-50 me-4" placeholder="YOUR EMAIL">
                <button class="illustration--button border-0 text-uppercase ">
                    send
                </button>
            </form>
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
.illustration--email_container{
    background-image: url(../../public/img/h-2-background-1.jpg);
    height: 600px;
    background-size: cover;

    input{
        padding: 10px 10px;
    }

    .illustration--button{
        background-color: #C0E1CF;
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
        padding: 16px 60px;
        transition: all 0.3s;

        &:hover {
            background-color: #f2d0c7;
            color: white;        }
    }
}

</style>