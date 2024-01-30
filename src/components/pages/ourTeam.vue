<script>
import { store } from '../../store.js';

export default {
  data() {
    return {
      store,
      
    };
  },
  mounted() {
    console.log(this.images);
  },
  methods: {},
};
</script>



<template>

    <div class="contenitore-img">

      <div class="contenitore-img">
          <div v-for="(elem, i) in store.images" :key="i" class="visible">

            <img :src="elem.img" alt="#">

            <div class="description_container d-flex justify-content-center flex-column">
              <h3>{{ elem.name }}</h3>
              <p>{{ elem.professione }}</p>
            </div>
          </div>
      </div>

    </div>


    <div class="contenitore-vibes">

      <div class="contenitore-sx">
              <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              ANIMATION
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste!</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseone" aria-expanded="false" aria-controls="flush-collapseOne">
             RIGENERING
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iste!</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              SPECIAL EFFECT 
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, eaque?</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              3D MODEL
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, architecto.</div>
          </div>
        </div>
      </div>
      </div>

      <div class="contenitore-dx">

      </div>



    </div>



    


</template>



<style lang="scss" scoped>

img{
  width: 100%;
  height: 100%;
  }
.contenitore-img {
  display: flex;
  flex-wrap: wrap; 
 
  
}

.description_container {
    position: absolute;
    left: 0;
    top: 50%;
    background-color: white;
    transition: all 0.4s;
    width: 0;
    height: 100px;
    opacity: 0;

    h3,
    p {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 0;
      transition: all 0.3s;
    }
    p {
      font-style: italic;
      font-family: 'Playfair Display', serif !important;
    }
  }

  img {
    width: 100%;
  }

  .visible {
    
    box-sizing: border-box; 
    border: 1px solid black;
    width: 25%;
    min-height: 300px;
    position: relative; 
    overflow: hidden;
    &:hover {
      .description_container {
        width: 90%;
        padding: 10px 20px;
        opacity: 1;

        h3,
        p {
          opacity: 1;
        }
      }
    }
  
}

.contenitore-vibes{
  width: 100%;
  margin: 50px;
  margin-top: 100px;
}
.contenitore-sx{
  width: 50%;
  
}
.contenitore-dx{
  width: 50%;
}

button{
  color: black;
  border-bottom: rgb(208, 70, 93);
}
</style>