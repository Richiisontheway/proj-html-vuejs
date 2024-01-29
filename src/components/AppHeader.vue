<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <nav class="mx-4">
            <div>
                <img src="/public/img/logo-sidearea-1.png" alt="Marée">
            </div>
            <div class="list-container">
                <ul>
                    <li class="illustration--dropdown">
                        <a href="#" class="home">
                            HOME
                        </a>
                        <div class="illustration--dropdown_content">
                            <a href="#">cia</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="pages">
                            PAGES
                        </a>
                    </li>
                    <li>
                        <a href="#" class="portfolio">
                            PORTFOLIO
                        </a>
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
