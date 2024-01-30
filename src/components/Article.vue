<script>
export default {
  name: 'Card',
  data() {
    return {};
  },
  props: {
    Day: String,
    Month: String,
    Image: String,
    Text: String,
    Signature: String,
  },
};
</script>

<template>
  <div class="col article">
    <div class="book-container">
      <div class="day">
        <h3>{{ Day }}</h3>
      </div>
      <div class="month-year">
        <p class="text-uppercase">{{ Month }}</p>
      </div>
    </div>

    <div class="article_thumb overflow-hidden">
      <img :src="`/img/${Image}.jpg`" alt="" />
    </div>

    <h4 class="text-capitalize my-3">
      {{ Text }}
    </h4>
    <p class="author text-capitalize">{{ Signature }}</p>
  </div>
</template>

<style lang="scss" scoped>
.col {
  position: relative;
  .book-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 15;
    top: -15px;
    left: 20px;
    width: 70px;
    height: 80px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
    .day {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 55%;
      background-color: #c0e1cf;
      font-family: 'Playfair Display', serif !important;
      h3 {
        text-align: center;
        font-family: 'Playfair Display', serif !important;
        font-style: italic;
        font-weight: 800;
        font-size: 2.3rem;
      }
    }
    .month-year {
      width: 100%;
      height: 45%;
      background-color: #f3d0c7;
      p {
        text-align: center;
        padding-top: 7px;
        font-weight: 700;
        font-size: 0.7rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  img {
    width: 100%;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.03);
      cursor: pointer;
    }
  }
  h4 {
    font-size: 1.5rem;
  }
  .author {
    font-family: 'Playfair Display', serif !important;
    font-style: italic;
  }
}
</style>
