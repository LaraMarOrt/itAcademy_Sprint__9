<template>

    <div class="bg-modal" @click="$emit('close')">
        <div class="modal-wrapper">
            <div class="d-flex flex-column justify-content-center" @click.stop>
                <div class="d-flex justify-content-end p-2">
                    <b-button pill variant="success" class="mb-2" @click="$emit('close')">X</b-button>
                </div>
                <h3 class="text-light">INTRODUCE TUS CREDENCIALES</h3>
                <form class="d-flex flex-column align-items-center m-2">
                    <input placeholder="usuario" class="mb-3" id="user" type="text" v-model="user">
                    <input placeholder="contraseña" class="mb-3" id="pass" type="text" v-model="pass">
                    <b-button variant="success" @click="login">Login</b-button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Login',
    emits: ['close'],
    data() {
        return {
            user: '',
            pass: '',
        }
    },
    methods: {
        login() {
            console.log("entralogin");
            this.$store.dispatch("logUser", [this.user, this.pass]);
            console.log("entralogin2");
            this.$emit('close');
            debugger;
        }
    }
}
</script>

<style scoped>
.bg-modal {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(77, 77, 79, 0.942);
}

.modal-wrapper {
    background-color: #8bb79c;
    padding: 2rem;
    border-radius: 10px 100px / 120px;
}

h3 {
    text-align: center;
}

</style>