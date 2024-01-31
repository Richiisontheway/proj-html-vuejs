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
        <h1>Vibes loving intro</h1>
        <p>No homero adolescens mei, eum cu decore reformidans, cum erant nonumy dictas ei. Ne vis congue gloriatur, vel eu doming philosophia. Qui quem munere ad, et agam copiosae nam. Ei reque verear periculis eam. Has commune constituam eu, ex vis.</p>

      </div>



    </div>

    <div class="carusel">
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://media.istockphoto.com/photos/love-picture-id516005666?k=6&m=516005666&s=612x612&w=0&h=rtyUb3_TFsE0R8RMp80iwqpvnPaqBMQrhvz6Yt9NiHI=" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item">
            <img src="https://th.bing.com/th/id/R.85c5385ef153bc0809a4a622edb710f1?rik=5zsdeoIwWkzSdQ&riu=http%3a%2f%2febrevinil.com%2fmedia%2fcache%2fc1b74f490bdd4c0f0732f74756adb352.jpg&ehk=TcWrn2tPpukfRf3lU1jSHuB6y3ZtTQUN9zO%2b8xt%2bkHc%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item">
            <img src="https://th.bing.com/th/id/OIP.mfXhuGVj8Cf7SZyncSTjEwAAAA?rs=1&pid=ImgDetMain" class="d-block w-100" alt="">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
  display: flex;
}
.contenitore-sx{
  width: 50%;
  margin: 20px;
  
}
.contenitore-dx{
  width: 50%;
  text-align: center;
  margin: 20px;
}

button{
  color: black;
  border-bottom: rgb(208, 70, 93);
}

.carusel{
  width: 100%;
  display: flex;
  justify-content: center;
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: pink; 
    border-radius: 50%;
  }

  .carousel-control-prev, .carousel-control-next {
    color: black; 
    
  }
}
.carusel img {
  height: 400px; 
  width: 100%;
}

.carusel .carousel-item {
  transition: transform 0.6s; 
}


.carusel .carousel-item.active {
  transform: scale(1);
}

</style>

<!-- https://th.bing.com/th/id/OIP.Q7jvX9XQRvjNL9A3X0c1RwHaFP?rs=1&pid=ImgDetMain
https://th.bing.com/th/id/R.5df3def5983dcf991fe66343d24adea3?rik=aoCoVXeS5Rf5DA&pid=ImgRaw&r=0
https://th.bing.com/th/id/R.881f91b8b073b0eb472b4afe0711fd29?rik=M9SuBfCfvy6qkg&pid=ImgRaw&r=0 -->
