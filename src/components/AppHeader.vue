<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        // ciao(){
        //     console.log(store.portfolio_nav[0].pages[0].page)
        // }
    },
    // mounted(){
    //     this.ciao()
    // }
}
</script>

<template>
    <header class="sticky-top">
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
                                <div v-if="(homeKey.page == 'Main Home')">
                                    <router-link :to="{ name: 'home'}">
                                        {{ homeKey.page }}
                                    </router-link>
                                </div>
                                <div v-else>
                                    {{ homeKey.page }}
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="illustration--dropdown">

                        <a href="#" class="illustration--pages">
                            PAGES
                        </a>
                        <div class="illustration--dropdown_content row ">
                            <a href="#" class="illustration--pages_hover col " v-for="(pageKey,b) in store.page_nav" :key="b">
                                <div v-if="(pageKey.page == 'What We Offer')">
                                    <router-link :to="{ name: 'whatWeOffer'}">
                                        {{ pageKey.page }}
                                    </router-link>
                                </div>
                                <div v-else-if="(pageKey.page == 'Our Team')">
                                    <router-link :to="{ name: 'ourTeam'}">
                                        {{ pageKey.page }}
                                    </router-link>
                                </div>
                                <div v-else>
                                    {{ pageKey.page }}
                                </div>
                            </a>
                        </div>

                    </li>
                    <li class="illustration--dropdown_special">

                        <a href="#" class="illustration--portfolio">
                            PORTFOLIO
                        </a>
                        <div class="special_content row">
                            <div class="mx-3 col-2">
                                <h3>
                                    {{ this.store.portfolio_nav[0].title }}
                                </h3>
                                <a href="#" class="illustration--portfolio w-100 " v-for="(portfolioKey,c) in store.portfolio_nav[0].pages" :key="c">
                                    {{ portfolioKey.page }}
                                </a>
                            </div>
                            <div class="mx-3 col-2 ">
                                <h3>
                                    {{ this.store.portfolio_nav[1].title }}
                                </h3>
                                <a href="#" class="illustration--portfolio w-100 " v-for="(portfolioKey,d) in store.portfolio_nav[1].pages" :key="d">
                                    {{ portfolioKey.page }}
                                </a>
                            </div>
                            <div class="mx-3 col-2">
                                <h3>
                                    {{ this.store.portfolio_nav[2].title }}
                                </h3>
                                <a href="#" class="illustration--portfolio w-100 " v-for="(portfolioKey,e) in store.portfolio_nav[2].pages" :key="e">
                                    {{ portfolioKey.page }}
                                </a>
                            </div>
                            <div class="mx-3 col-2">
                                <h3>
                                    {{ this.store.portfolio_nav[3].title }}
                                </h3>
                                <a href="#" class="illustration--pages_hover w-100 " v-for="(portfolioKey,e) in store.portfolio_nav[3].pages" :key="e">
                                    {{ portfolioKey.page }}
                                </a>
                            </div>
                            
                        </div>
                    </li>
                    <li class="illustration--dropdown">
                        <a href="#" class="illustration--blog">
                            BLOG
                        </a>
                        <div class="illustration--dropdown_content">
                            <a href="#" class="illustration--blog w-100 " v-for="(blogKey,f) in store.blog_nav" :key="f">
                                {{ blogKey.page }}
                            </a>
                        </div>
                    </li>
                    <li class="illustration--dropdown">
                        <a href="#" class="illustration--shop">
                            SHOP
                        </a>
                        <div class="illustration--dropdown_content">
                            <a href="#" class="illustration--shop w-100" v-for="(shopKey,g) in store.shop_nav" :key="g">
                                {{ shopKey.page }}
                                <!-- <ul v-if="(shopKey.page == 'Shop Pages')" class="illustration--second_dropdown">
                                    <li v-for="(elem) in shopKey.dropstart">
                                        {{ elem.layout }}
                                    </li>
                                </ul> -->

                            </a>
                        </div>
                    </li>
                    <li class="illustration--dropdown_special">
                        <a href="#" class="element">
                            ELEMENTS
                        </a>
                        <div class="special_content_element">
                            <div class="mx-3 col-2">
                                <h3>
                                    {{ this.store.element_nav[0].title }}
                                </h3>
                                <a href="#" class="illustration--shop w-100 " v-for="(elementKey,h) in store.element_nav[0].pages" :key="h">
                                    {{ elementKey.page }}
                                </a>
                            </div>
                            <div class="mx-3 col-2">
                                <h3>
                                    {{ this.store.element_nav[1].title }}
                                </h3>
                                <a href="#" class="illustration--shop w-100 " v-for="(elementKey,h) in store.element_nav[1].pages" :key="h">
                                    {{ elementKey.page }}
                                </a>
                            </div>
                            <div class="mx-3 col-2">
                                <h3>
                                    {{ this.store.element_nav[2].title }}
                                </h3>
                                <a href="#" class="illustration--shop w-100 " v-for="(elementKey,h) in store.element_nav[2].pages" :key="h">
                                    {{ elementKey.page }}
                                </a>
                            </div>
                            <div class="mx-3 col-2">
                                <h3>
                                    {{ this.store.element_nav[3].title }}
                                </h3>
                                <a href="#" class="illustration--shop w-100 " v-for="(elementKey,h) in store.element_nav[3].pages" :key="h">
                                    {{ elementKey.page }}
                                </a>
                            </div>
                        </div>
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
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/reset";

</style>
