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
              3D MODELING
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, architecto.</div>
          </div>
        </div>
      </div>
      </div>

      <div class="contenitore-dx">
        <h1>Vibes loving <span><b><em>intro</em></b></span></h1>
        <p>No homero adolescens mei, eum cu decore reformidans, cum erant nonumy dictas ei. Ne vis congue gloriatur, vel eu doming philosophia. Qui quem munere ad, et agam copiosae nam. Ei reque verear periculis eam. Has commune constituam eu, ex vis.</p>

      </div>



    </div>

    <div class="contenitore-carusel ">
              <div class="carusel">
                <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
           <img src="../../../public/img/img-lara-dimensione.jpg" alt="">
          </div>
          <div class="carousel-item">
           <img src="../../../public/img/img-akiko-dimensioni.jpg" alt="">
          </div>
          <div class="carousel-item">
            <img src="../../../public/img/img-mark beaver-dimensione.jpg" alt="">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
            </div>   

    </div>

    


    <div class="container-finale">

      <div class="img-ds-ultimo">
             <img src="https://th.bing.com/th/id/OIP.OQNKa-cNsOMJZ_jr5X_L6AHaEo?rs=1&pid=ImgDetMain" alt="">
      </div>


      <div class="design-carattetere-dx">
            <h2>Character<br><b><em>design</em></b></h2>
            <p>No homero adolescens mei, eum cu decore <br> reformidans, cum erant nonumy dictas ei. Ne vis <br> congue gloriatur vel eu.</p>
            <button>READ MORE</button>
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

  .img {
    width: 100%;
  }

  .visible {
    
    box-sizing: border-box; 
    border: 1px solid black;
    width: 25%;
    min-height: 300px;
    font-family: 'Mulish', sans-serif;
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
  font-family: 'Mulish', sans-serif;
  display: flex;
}
.contenitore-sx{
  width: 50%;
  margin: 20px;
  font-family: 'Mulish', sans-serif;
  
}
.contenitore-dx{
  width: 50%;
  text-align: center;
  position: relative;
  top: 50px;
  margin: 20px;
  font-family: 'Muli', sans-serif;
  color: #000;
  font-weight: 400;
  margin: 15px 0;
  -ms-word-wrap: break-word;
    word-wrap: break-word;
 

  h1{
    font-size: 50px;
    line-height: 1.24em;
    font-family: Muli,sans-serif;
    
  }
  p{
    color: gray;
    
  }
 

}

button{
  color: black;
  border-bottom: 2px solid #e1c0b0;
}


// CAROSELLO
.contenitore-carusel{
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 200px;
  .carusel{
    width: 60%;
    height: 250px;

  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
  background-color: pink; 
  border-radius: 50%;
  }
  .carousel-control-prev, .carousel-control-next {
    color: black; 
    
  }

}




// contenitore finle
.container-finale{
  width: 100%;
  display: flex;
}
.img-ds-ultimo{
  width: 50%;
  margin: 50px;
}

.design-carattetere-dx{
  width: 50%;
  text-align: left;
  margin: 50px;
  position: relative;
  top: 50px;
  font-family: 'Muli', sans-serif;
  color: #000;
  font-weight: 400;
  margin: 15px 0;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  h2{
    font-size: 50px;
    line-height: 1.24em;
  }
  

    button{
      border: 2px solid #e1c0b0;
      color: black;
      width: 200px;
      height: 60px;
     
      margin-top: 10px;
      background-color: white;
      
    }
    button:hover{
      background-color: #e1c0b0;
      color: white;
    }
  
 
}
em{
  font-family: 'Playfair Display', serif !important;
}


</style>


