<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        ciao(){
            console.log(store.portfolio_nav[0].pages[0].page)
        }
    },
    mounted(){
        this.ciao()
    }
}
</script>

<template>
    <header>
        <nav class="mx-4">
            <div>
                <img src="/public/img/logo-sidearea-1.png" alt="Marée">
            </div>
            <div class="illustration--list_container">
                <ul>
                    <li class="illustration--dropdown">

                        <a href="#" class="illustration--home">
                            HOME
                        </a>
                        <div class="illustration--dropdown_content">
                            <a href="#" class="illustration--home" v-for="(homeKey, a) in store.home_nav" :key="a">
                                {{ homeKey.page }}
                            </a>
                            
                        </div>

                    </li>
                    <li class="illustration--dropdown">

                        <a href="#" class="illustration--pages">
                            PAGES
                        </a>
                        <div class="illustration--dropdown_content">
                            <a href="#" class="illustration--pages_hover" v-for="(pageKey,b) in store.page_nav" :key="b">
                                {{ pageKey.page }}
                            </a>
                        </div>

                    </li>
                    <li class="illustration--dropdown">

                        <a href="#" class="portfolio">
                            PORTFOLIO
                        </a>
                        <div class="illustration--dropdown_content">
                            <h3>
                                {{ this.store.portfolio_nav[0].title }}
                            </h3>
                            <a href="#" class="illustration--pages_hover" v-for="(portfolioKey,c) in store.portfolio_nav[0].pages" :key="c">
                                {{ portfolioKey.page }}
                            </a>
                        </div>

                    </li>
                    <li>
                        <a href="#" class="blog">
                            BLOG
                        </a>
                    </li>
                    <li>
                        <a href="#" class="shop">
                            SHOP
                        </a>
                    </li>
                    <li>
                        <a href="#" class="element">
                            ELEMENTS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/public/svg/svg-1.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/header.scss" as *;
@import "../assets/scss/partials/reset";

</style>
