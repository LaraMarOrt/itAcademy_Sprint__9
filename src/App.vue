<template>
  <div class="bg">

    <nav class="navbar py-3 py-lg-2 navbar-dark navbar-expand-lg" id="navbar-example2">
      <div class="container d-flex">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/logo.png" alt="logo" height="24" class="d-inline-block align-text-top logo">
        </router-link>
        <router-link class="navbar-brand" to="/">BookooB</router-link>
        <div class="d-flex flex-row order-lg-last align-items-center">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <!-- Configuramos la navegación Mobile -->
        <div class="offcanvas bg-dark offcanvas-end" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <router-link class="navbar-brand" to="/">
              <img src="./assets/logo.png" alt="logo" height="24" class="d-inline-block align-text-top logo">
            </router-link>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body" data-bs-dismiss="offcanvas">

            <ul class="navbar-nav me-auto mb-4 mb-lg-0 ms-lg-5 align-items-center">
              <li class="nav-item text-center mx-3 mb-s">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li v-if="Logged" class="nav-item text-center mx-3 mb-s">
                <router-link class="nav-link" to="/books">Libros</router-link>
              </li>
              <li v-if="Logged" class="nav-item text-center mx-3 mb-s">
                <router-link  class="nav-link" to="/favourites">🤍 Favourites</router-link>
              </li>
              <li v-if="Logged  && Logged == 'admin'" class="nav-item text-center mx-3 mb-s">
                <router-link class="nav-link" to="/admin">Users</router-link>
              </li>
            </ul>
            <ul class="navbar-nav me-lg-0 d-flex flex-colum sm-flex-row align-items-center justify-content-center">

              <li v-if="!Logged" class="nav-item text-center mb-s me-2">
                <router-link class="nav-link" to="/register">Sign Up</router-link>
              </li>
              <li v-if="!Logged" class="nav-item py-lg-3">
                <b-button variant="outline-success" @click="showLogin" id="show-btn">Login</b-button>
              </li>
              <div class="d-flex align-items-center" v-if="Logged">
              <span class="w-48 avatar gd-success">{{Logged.charAt(0).toUpperCase()}}</span>
                <div class="text-light ms-2">{{ Logged }}</div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <Login v-if="this.isLoginVisible == true" @close="closeLogin"></Login>
    <router-view />
  </div>
</template>


<script>
import Login from './components/Login.vue';
import { useStore } from "vuex";

export default {
  name: "App",
  components: { Login },
  data() {
    const store = useStore();
    const users=store.getters.getUsers;
    store.dispatch("syncUser",users);
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


<style>
.bg {
  background-color: #212529;
}

html {
  background-color: #212529;
}

.f-size {
  font-size: small;
}

/* Estilos de los links */
.navbar-dark .navbar-nav .nav-link {
  color: var(--bs-white);
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: #8bb79c;
  font-weight: 600;
}


/* Estilos del logo */
.logo {
  text-align: center;
  animation: zumbido 4s ease-out;
  animation-iteration-count: 10;
}

@keyframes zumbido {

  0%,
  7% {
    transform: rotateZ(0);
  }

  15% {
    transform: rotateZ(-15deg);
  }

  20% {
    transform: rotateZ(10deg);
  }

  25% {
    transform: rotateZ(-10deg);
  }

  30% {
    transform: rotateZ(6deg);
  }

  35% {
    transform: rotateZ(-4deg);
  }

  40%,
  100% {
    transform: rotateZ(0);
  }
}

/* menu del mobile */
.offcanvas {
  background-color: #000;
}

.btn-close {
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%234a5bcb'%3e%3cpath fill='#fff' d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  opacity: 1;
}

@media (max-width: 991px) {
  .mb-s {
    margin-top: 1rem;
    margin-bottom: 1rem;
    /* border-bottom: 2px solid #8bb79c; */
  }
}

@media (min-width: 1400px) {
.container {
    min-width: 95%;
}
}

.avatar {
    position: inherit;
    line-height: 1;
    white-space: nowrap;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 500px;
    box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15)
}

.avatar img {
  border-radius: inherit;
  width: 100%
}

.gd-success {
  color: #fff;
  border: none;
  background: #31c971 linear-gradient(45deg, #31c971, #1a1b1a)
}

.w-48 {
  width: 36px !important;
  height: 36px !important
}
</style>
