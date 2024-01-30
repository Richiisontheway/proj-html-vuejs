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
    <footer>
        <div class="container">
            <div class="logo-group-start">

                <div class="img-logo">
                    <img src="/img/logo-sidearea-1-1.png" alt="">
                    <div>Let’s Get Creative</div>
                </div>

                <div>
                    <div class="list" @mouseover="underline">maree@qodeinteractive.com</div>
                    <div class="list" @mouseover="underline">+44645 321 789</div>
                </div>

                <div>
                    <div class="list" @mouseover="underline">Avenue d’Auderghem 10</div>
                    <div class="list" @mouseover="underline">1040 Brussels, Belgium</div>
                </div>

                <div>
                    <div class="over-icon" >Stay in touch with us</div>
                    <div class="icon">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>

            </div>
        </div>
    </footer>
  </template>
  
  <style lang="scss" scoped>
  @use '../assets/scss/partials/mixins.scss' as *;

  footer {
    border: 1px solid black;
    background-color: rgb(192, 225, 197);
  }
  
  .container {
    width: 100%;
    height: 200px;
    text-align: center;
    display: inline;
    text-align: left;
  }
  
  .logo-group-start {
    display: flex;
    justify-content: space-around;
    align-items: center; 
  }
  
  .img-logo {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
  
  .list:hover {
    @include border-special;
    text-align: left;
    border-bottom: 10px solid pink;
  }


  
  .down-logo {
    text-align: center;
  }
  
  .logo-group-down {
    display: flex;
    justify-content: space-around;
    text-align: left;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .icon {
    display: flex;
    justify-content: space-around;
  }

    .over-icon{
        margin-bottom: 10px;
    }
  
  i:hover {
    color: white;
  }
  </style>
  
