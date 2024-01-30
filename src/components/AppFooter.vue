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
                    <span class="list" @mouseover="underline">maree@qodeinteractive.com</span>
                    <div class="list" @mouseover="underline">+44645 321 789</div>
                </div>

                <div>
                    <span class="list" @mouseover="underline">Avenue d’Auderghem 10</span>
                    <div class="list" @mouseover="underline">1040 Brussels, Belgium</div>
                </div>

                <div>
                    <span>Stay in touch with us</span>
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
    text-decoration: underline;
    text-decoration-color: pink;
    text-align: left;
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
  
  i:hover {
    color: white;
  }
  </style>
  
