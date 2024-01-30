<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <section>
    <div class="contact_container">
      <h2>
        Want to work with us? Send us <span class="a-message">a message!</span>
      </h2>
      <p class="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, odio
        eos quod ea, quasi animi necessitatibus ullam est ab, neque similique
        nesciunt dolores autem? Nihil alias eum quam sapiente at!
      </p>
      <a
        href="https://maree.qodeinteractive.com/contact-us/"
        class="btn text-uppercase"
      >
        contact
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
section {
  width: 100%;
  height: 530px;
  background-image: url(../../public/img/h-2-background-1.jpg);
  background-position: center;
  .contact_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    h2 {
      font-size: 4rem;
      margin-bottom: 30px;
      text-align: center;
      font-weight: 400;

      .a-message {
        font-weight: 900;
        font-style: italic;
        font-family: 'Playfair Display', serif !important;
      }
    }
    p {
      color: gray;
      font-size: 18px;
      margin-bottom: 35px;
      text-align: center;
    }
    .btn {
      background-color: #d8f0e3;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.2rem;
      padding: 16px 60px;
      transition: all 0.3s;

      &:hover {
        background-color: #f2d0c7;
        color: white;
      }
    }
  }
}
</style>
