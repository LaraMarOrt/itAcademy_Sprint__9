<template>
  <div class="welcome overlay" style="background-image: url(https://picsum.photos/1024/480/?image=10);">
    <div class="container">
      <div class="row">
        <div class=" text-center col-12 position-inherit">
          <h1 class="text-light mb-4"><strong>BookooB</strong> y el gabinete de libros</h1>
          <p class="text-light mb-4">Bienvenid@ al gabinete. Recuerda que para poder curiosear necesitas acceder 🔐</p>
          <b-button  v-if="!Logged" variant="success" @click="showLogin">Loginarse</b-button>
          <router-link  to="/books"><b-button  v-if="Logged" variant="success">Curiosear</b-button></router-link>
        </div>
      </div>
    </div>
  </div>
  <Login v-if="this.isLoginVisible == true" @close="closeLogin"></Login>
  <router-view/>
  <div class="container">
    <div class="row box s-6 align-center justify-center align-items-center">
      <div class="p-md-5 p-3 col-md-4 col">
        <div class="box-item">
          <div class="text-light">
            <h3 class="text-success"><span>+3000</span>
              Libros
            </h3>
            <p class="text-secondary">
              📚Misterio
            </p>
          </div>
        </div>
      </div>
      <div class="p-md-5 p-3 col-md-4 col">
        <div class="box-item">
          <div class="text-light">
            <h3 class="text-success">
              <span>+1000</span> Autores
            </h3>
            <p class="text-secondary">
              ✒Distintos Idiomas
            </p>
          </div>
        </div>
      </div>
      <div class="p-md-5 p-3 col-md-4 col">
        <div class="box-item">
          <div class="text-light">
            <h3 class="text-success">
              <span>+ 1000</span> Links
            </h3>
            <p class="text-secondary">
              🛒Para comprar
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-light t-title">
          <h4><span>El Gabinete,<strong class="text-green"> un lugar único</strong> en el que disfrutar de la
              lectura...</span></h4>
          <div class="d-flex justify-content-center">
            <div class="ellipse">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Login from './Login.vue';

export default {
  name: 'Welcome',
  props: {
    msg: String
  },
  components: { Login },
  data() {
    return {
      isLoginVisible: false,
    }
  },
  computed: {
    Logged() {
      return this.$store.getters.getLogedUser != null ? this.$store.getters.getLogedUser.username : null;
    }
  },
  methods: {
    showLogin() {
      this.isLoginVisible = true;
    },
    closeLogin() {
      this.isLoginVisible = false;
    }
  }
}
</script>


<style scoped>
a {
  color: #42b983;
}

.element.style {
  background-image: url(https://picsum.photos/1024/480/?image=10);
}

.welcome.overlay {
  position: inherit;
}

.welcome {
  background-attachment: fixed;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.s-6 {
  margin-left: -24px;
  margin-right: -24px;
}

.box {
  position: inherit;
}

.box-item {
  align-items: center;
  justify-content: center;
}

.text-light {
  text-align: center;
}

.t-title {
  display: block;
  position: inherit;
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
}

.ellipse {
  float: left;
  width: 150px;
  height: 50px;
  margin: 20px;
  shape-outside: ellipse(80% 10%);
  clip-path: ellipse(80% 10%);
  background: #42b983;
}

.text-green {
  color: #85bba2;
}

.btn {
  position:inherit;
}
</style>
