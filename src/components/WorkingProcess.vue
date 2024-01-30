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
  <section
    class="working-process d-flex align-items-center justify-content-center"
  >
    <div class="wrapper d-flex flex-column">
      <div class="title-container">
        <h2 class="text-center title">
          Working
          <span class="font-family">Process</span>
        </h2>
      </div>
      <div class="graph_container">
        <div class="process-container">
          <div class="rounded_container my-2">
            <i
              class="fa-solid fa-lightbulb fa-flip-horizontal"
              style="color: #badac9"
            ></i>
          </div>
          <h5 class="title-paragraph">First theres an idea</h5>
          <p class="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            labore maiores nostrum fugit?
          </p>
        </div>
        <div class="process-container">
          <div class="rounded_container my-2">
            <i class="fa-regular fa-comment" style="color: #ffc400"></i>
          </div>
          <h5 class="title-paragraph">Then we talk about</h5>
          <p class="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            labore maiores nostrum fugit?
          </p>
        </div>

        <div class="process-container">
          <div class="rounded_container my-2">
            <i class="fa-solid fa-cloud" style="color: #80465f"></i>
          </div>
          <h5 class="title-paragraph">And we think about</h5>
          <p class="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            labore maiores nostrum fugit?
          </p>
        </div>

        <div class="process-container">
          <div class="rounded_container my-2">
            <i class="fa-solid fa-pencil" style="color: #eb6950"></i>
          </div>
          <h5 class="title-paragraph">So we draw along</h5>
          <p class="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            labore maiores nostrum fugit?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.working-process {
  width: 100%;
  height: 700px;

  .wrapper {
    width: 70%;
    .title-container {
      width: 100%;
      margin-bottom: 35px;

      .title {
        font-size: 60px;
        font-weight: 300;
        font-family: 'Mulish', sans-serif;
        word-wrap: break-word;
        line-height: 1.261em;
      }
      .font-family {
        font-weight: 900;
        font-family: 'Playfair Display', serif !important;
        font-style: italic;
      }
    }
    .graph_container {
      display: flex;
      width: 100%;
      gap: 1rem;
      background-image: url(../../public/svg/svg-3.svg);
      background-repeat: no-repeat;
      background-position: top;

      .process-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          color: gray;
        }
        .rounded_container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 150px;
          height: 150px;
          background-color: #faf7f1;
          border-radius: 50%;

          i {
            font-size: 3rem;
          }
        }
        .title-paragraph {
          text-align: center;
          font-size: 21px;
          line-height: 1.238em;
          font-family: Muli, sans-serif;
          font-weight: 400;
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
