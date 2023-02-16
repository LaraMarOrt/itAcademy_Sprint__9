<template>
  <div class="home">
    <Welcome msg="Bienvenid@ al gabinete. Recuerda que para poder curiosear necesitas acceder 🔐"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'WelcomeView',
  components: {
    Welcome
  }
}
</script>
