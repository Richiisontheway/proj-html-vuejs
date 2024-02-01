<script>
import { store } from '../store';
export default {
  data() {
    return {
      currentSlide: 0,
      store,
      slides: [
        {
          title: 'Projects made with',
          italic: 'love',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi.',
          button: {
            text: 'Read More',
            link: 'https://maree.qodeinteractive.com/portfolio-item/enthusiasm-is-great/',
          },

          images: [
            'short-slider-rev-1-img-3.png',
            'short-slider-rev-1-img-2.png',
            'short-slider-rev-1-img-1.png',
            'short-slider-rev-1-img-7.png',
            'short-slider-rev-1-img-8.png',
            'short-slider-rev-1-img-9.png',
            'short-slider-rev-1-img-10.png',
            'short-slider-rev-1-img-6.png',
            'short-slider-rev-1-img-5.png',
            'short-slider-rev-1-img-4.png',
          ],

          class: 'firstslide',
        },
        {
          title: 'Our new folio full of',
          italic: 'joy',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi.',
          button: {
            text: 'Read More',
            link: 'https://maree.qodeinteractive.com/portfolio-item/life-and-inspiration/',
          },

          images: [
            'h-2-slider-img-11.png',
            'short-slider-rev-1-img-2.png',
            'short-slider-rev-1-img-6.png',
            'h-2-slider-img-12.png',
            'h-2-slider-img-13.png',
            'h-2-slider-img-14.png',
          ],

          class: 'secondslide',
        },
        {
          title: 'Devotion that never',
          italic: 'ends',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi.',
          button: {
            text: 'Read More',
            link: 'https://maree.qodeinteractive.com/portfolio-item/looking-to-expand-my-portfolio/',
          },

          images: [
            'h-2-slider-img-15.png',
            'h-2-slider-img-16.png',
            'short-slider-rev-1-img-2.png',
            'short-slider-rev-1-img-6.png',
            'h-2-slider-img-12.png',
            'h-2-slider-img-13.png',
            'h-2-slider-img-14.png',
            'h-2-slider-img-17.png',
          ],

          class: 'thirdslide',
        },
      ],
    };
  },
  methods: {
    goNumber(index) {
      this.currentSlide = index;
    },
    nextBtn() {
      if (this.currentSlide >= this.slides.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
    prevBtn() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.slides.length - 1;
      }
    },
  },
};
</script>

<template>
  <div class="jumbotron">
    <div id="carousel" class="carousel-slide">
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          :class="currentSlide == index ? ' indicator_active ' : ''"
          type="button"
          class="button_indicator"
          aria-current="true"
        ></button>
      </div>
      <div class="slides">
        <div
          class="carousel-inner"
          v-for="(slide, index) in slides"
          :key="index"
          :class="(currentSlide == index ? 'active ' : '') + slide.class"
        >
          <div class="text-container">
            <h1 class="title">
              {{ slide.title }}
              <span class="special-font">{{ slide.italic }}</span>
            </h1>
            <h3 class="description">
              {{ slide.description }}
            </h3>
            <a :href="slide.button.link" class="btn">
              {{ slide.button.text }}</a
            >
          </div>
          <div class="images_container carousel-item">
            <img
              v-for="(image, index) in slide.images"
              :key="image"
              v-bind:src="`/img/${image}`"
              :class="'dimension' + (index + 1)"
              alt=""
            />
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" @click="prevBtn">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" @click="nextBtn">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.jumbotron {
  width: 100%;
  height: 530px;
  //background-color: aqua;
}
.carousel-slide {
  display: flex;
  widows: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  position: relative;
  .carousel-indicator {
    display: none;
    .carousel-indicator.active {
      display: flex;
    }
  }
  .slides {
    width: 100%;
    height: 100%;
    .carousel-inner {
      display: none;
    }
    .carousel-inner.active {
      display: flex;
    }
    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      position: relative;
      .title {
        font-size: 4.7rem;
        width: 70%;
        font-weight: 400;
        font-family: 'Mulish', sans-serif;
        word-wrap: break-word;
        line-height: 1.261em;
        position: absolute;
        top: 52px;
        left: 133px;
        .special-font {
          font-weight: 900;
          font-family: 'Playfair Display', serif !important;
          font-style: italic;
        }
      }
      .description {
        width: 80%;
        font-size: 18px;
        color: gray;
        font-weight: 300;
        font-family: 'Mulish', sans-serif;
        word-wrap: break-word;
        line-height: 1.2em;
        margin-bottom: 20px;
        position: absolute;
        bottom: 170px;
        left: 139px;
      }
      .btn {
        padding: 15px 40px;
        font-weight: 700;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        border: 2px solid #e1c0b0;
        transition: all 0.4s;
        position: absolute;
        bottom: 96px;
        left: 134px;

        &:hover {
          background-color: #e1c0b0;
          color: white;
        }
      }
    }
  }
  .button_indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background-color: #e1c0b0;
    margin-left: 15px;
    &.indicator_active {
      width: 15px;
      height: 15px;
    }
  }

  .images_container {
    display: flex;
    align-items: center;
    width: 50%;
    height: 500px;
    //border: 1px solid blue;
    position: relative;
    img {
      object-fit: contain;
    }
  }

  .firstslide {
    .dimension1 {
      position: absolute;
      left: 93px;
      top: 74px;
      object-fit: scale-down;
      max-width: 399px;
    }
    .dimension2 {
      width: 45px;
      height: 46px;
      position: absolute;
      left: 46px;
      top: 190px;
    }
    .dimension3 {
      width: 107px;
      height: 89px;
      position: absolute;
      left: -26px;
      bottom: 73px;
    }
    .dimension4 {
      width: 40px;
      height: 60px;
      position: absolute;
      left: 102px;
      bottom: 70px;
    }
    .dimension5 {
      width: 40px;
      height: 60px;
      position: absolute;
      right: 209px;
      bottom: 76px;
    }
    .dimension6 {
      width: 66px;
      height: 141px;
      position: absolute;
      right: 130px;
      bottom: 76px;
    }
    .dimension7 {
      width: 39px;
      height: 38px;
      position: absolute;
      right: 91px;
      bottom: 70px;
    }
    .dimension8 {
      width: 38px;
      height: 42px;
      position: absolute;
      right: 177px;
      top: 199px;
    }
    .dimension9 {
      width: 113px;
      height: 53px;
      position: absolute;
      right: 103px;
      top: 106px;
    }
    .dimension10 {
      width: 92px;
      height: 44px;
      position: absolute;
      right: 156px;
      top: 116px;
    }
  }
  .secondslide {
    .dimension1 {
      width: 590px;
      height: 491px;
      position: absolute;
      top: 3px;
      left: -48px;
    }
    .dimension2 {
      width: 40px;
      height: 41px;
      position: absolute;
      top: 119px;
      left: -65px;
    }
    .dimension3 {
      width: 40px;
      height: 61px;
      position: absolute;
      top: 30px;
      right: 229px;
    }
    .dimension4 {
      width: 39px;
      height: 38px;
      position: absolute;
      bottom: 98px;
      left: -73px;
    }
    .dimension5 {
      width: 40px;
      height: 60px;
      position: absolute;
      bottom: 68px;
      left: -2px;
    }
    .dimension6 {
      width: 40px;
      height: 60px;
      position: absolute;
      bottom: 42px;
      right: 238px;
    }
  }
  .thirdslide {
    .dimension1 {
      width: 300px;
      height: 373px;
      position: absolute;
      top: 89px;
      left: 23px;
    }
    .dimension2 {
      width: 305px;
      height: 481px;
      position: absolute;
      top: 23px;
      left: 294px;
    }
    .dimension3 {
      width: 40px;
      height: 41px;
      position: absolute;
      top: 52px;
      left: 23px;
    }
    .dimension4 {
      width: 40px;
      height: 123px;
      position: absolute;
      top: 47px;
      right: 167px;
    }
    .dimension5 {
      width: 39px;
      height: 38px;
      position: absolute;
      bottom: 153px;
      left: -43px;
    }
    .dimension6 {
      width: 38px;
      height: 58px;
      position: absolute;
      bottom: 50px;
      left: 36px;
    }
    .dimension7 {
      width: 40px;
      height: 43px;
      position: absolute;
      top: 5px;
      right: 196px;
    }
    .dimension8 {
      width: 47px;
      height: 71px;
      position: absolute;
      bottom: 49px;
      right: 128px;
    }
  }
}
.carousel-control-prev {
  width: 5%;
}
.carousel-control-prev-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e1c0b0;
}
.carousel-control-next-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e1c0b0;
}
</style>
