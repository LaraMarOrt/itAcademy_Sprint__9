<template>
    <div class="d-flex justify-content-center text-light">
        <div class="lg-w-50 p-5">
            <h3 class="mb-5">Fomulario de Registro</h3>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="Dirección mail:" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Introduce tu correo"
                        required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Nombre y Apellidos:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.name" placeholder="Introduce tu Nombre y Apellidos"
                        required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Nombre de Usuario:" label-for="input-3">
                    <b-form-input id="input-3" v-model="form.user" placeholder="Introduce tu Nombre de Usuario"
                        required></b-form-input>
                </b-form-group>


                <b-form-group class="mb-4" id="input-group-4" label="Contraseña:" label-for="input-4">
                    <b-form @submit.stop.prevent>
                        <b-form-input v-model="form.pass" type="password" id="text-password"
                            aria-describedby="password-help-block" placeholder="Introduce tu Contraseña" :state="validation"></b-form-input>
                        <b-form-text id="password-help-block">
                            Recuerda que tu contraseña debe tener entre 8-20 caracteres.
                        </b-form-text>
                    </b-form>
                </b-form-group>
                <b-button class="me-3" type="submit" variant="success">Enviar</b-button>
                <b-button type="reset" variant="secondary">Borrar</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Form",
  data() {
    return {
      form: {
        email: '',
        name: '',
        user: '',
        pass: '',
        checked: []
      },
      show: true
    }
  },
  computed: {
      validation() {
        return this.form.pass.length > 3 && this.form.pass.length < 21
      }
    },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      const user={username: this.form.user, pass: this.form.pass, mail: this.form.email, favourites: []};
      this.$store.dispatch("singUpUser", user)
      this.form.email = ''
      this.form.name = ''
      this.form.user = ''
      this.form.pass = ''
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.user = ''
      this.form.pass = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>


<style scoped>
.btn {
    position: inherit;
}

</style>