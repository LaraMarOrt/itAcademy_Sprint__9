<template>
    <div>
        <b-card class="bg-green" text-variant="white" :title="favourite.volumeInfo.title">
            <b-card-text>
                {{ favourite.volumeInfo.description }}
            </b-card-text>
            <b-button class="me-2" variant="warning" :href="favourite.volumeInfo.infoLink" target="_blank"
                v-b-tooltip.hover title="Compra">📥</b-button>
            <b-button @click="$store.dispatch('removeFavourites', favourite)" variant="success" v-b-tooltip.hover
                title="Quitar">❤</b-button>
        </b-card>
    </div>
</template>


<script>
export default {
    name: 'Favourite',
    props: ['favourite']
}
</script>


<style scoped>
.btn {
    position: inherit;
}

.card {
    position: inherit;
}

.bg-green {
    background-color: #42694b87;
}

.margin-fav {
    margin: 2rem 6rem;
}

@media (max-width: 991px) {
    .margin-fav {
        margin: 2rem 2rem;
    }
}
</style>