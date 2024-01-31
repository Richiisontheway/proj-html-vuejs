<script>
import { store } from '../store';
export default {
  data() {
    return {
      store,
      currentSlide: 0,
      slides: [
        {
          title: 'Projects made with',
          italic: 'love',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi.',
          button: [
            {
              text: 'Read More',
              link: 'https://maree.qodeinteractive.com/portfolio-item/enthusiasm-is-great/',
            },
          ],
          image: [
            'short-slider-rev-1-img-3',
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

          class: 'first-slide',
        },
        {
          title: 'Our new folio full of',
          italic: 'joy',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi.',
          button: [
            {
              text: 'Read More',
              link: 'https://maree.qodeinteractive.com/portfolio-item/life-and-inspiration/',
            },
          ],
          image: [
            'h-2-slider-img-11.png',
            'short-slider-rev-1-img-2.png',
            'short-slider-rev-1-img-8.png',
            'h-2-slider-img-12.png',
            'h-2-slider-img-13.png',
            'h-2-slider-img-14.png',
          ],

          class: 'second-slide',
        },
        {
          title: 'Devotion that never',
          italic: 'ends',
          description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi.',
          button: [
            {
              text: 'Read More',
              link: 'https://maree.qodeinteractive.com/portfolio-item/looking-to-expand-my-portfolio/',
            },
          ],
          image: [
            'h-2-slider-img-15.png',
            'h-2-slider-img-16.png',
            'short-slider-rev-1-img-2.png',
            'short-slider-rev-1-img-8.png',
            'h-2-slider-img-12.png',
            'h-2-slider-img-13.png',
            'h-2-slider-img-14.png',
            'h-2-slider-img-17.png',
          ],

          class: 'third-slide',
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
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="slides">
        <div
          class="carousel-inner d-flex"
          v-for="(slide, index) in slides"
          :key="index"
          :class="currentSlide == index ? 'active' : ''"
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
          <div class="images_container carousel-item active">
            <img :src="`/img/${slide.Image}.jpg`" class="image1" alt="..." />
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" @click="prevBtn">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" @click="nextBtn">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
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
  widows: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  position: relative;
  .slides {
    width: 100%;
    height: 100%;
    .carousel-inner {
      display: none;
    }
    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      position: relative;
      //border: 1px solid red;
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
        font-size: 1.2rem;
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
    .image1 {
      position: absolute;
      left: 93px;
      top: 74px;
      object-fit: scale-down;
      max-width: 399px;
    }
    .image2 {
      width: 45px;
      height: 46px;
      position: absolute;
      left: 46px;
      top: 190px;
    }
    .image3 {
      width: 107px;
      height: 89px;
      position: absolute;
      left: -26px;
      bottom: 73px;
    }
    .image4 {
      width: 40px;
      height: 60px;
      position: absolute;
      left: 102px;
      bottom: 70px;
    }
    .image5 {
      width: 40px;
      height: 60px;
      position: absolute;
      right: 209px;
      bottom: 76px;
    }
    .image6 {
      width: 66px;
      height: 141px;
      position: absolute;
      right: 130px;
      bottom: 76px;
    }
    .image7 {
      width: 39px;
      height: 38px;
      position: absolute;
      right: 91px;
      bottom: 70px;
    }
    .image8 {
      width: 38px;
      height: 42px;
      position: absolute;
      right: 177px;
      top: 199px;
    }
    .image9 {
      width: 113px;
      height: 53px;
      position: absolute;
      right: 103px;
      top: 106px;
    }
    .image10 {
      width: 92px;
      height: 44px;
      position: absolute;
      right: 156px;
      top: 116px;
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
