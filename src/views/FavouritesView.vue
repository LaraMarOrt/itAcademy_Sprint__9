<template>
    <div>
        <div v-if="!favorite" class="m-4 m-lg-5 text-light">
            <h5>Aún no tienes ningún favorito....</h5>
        </div>  
        <div v-for="(favourite, index) in $store.state.favourites" :key="index" class="margin-fav">
            <Favourite :favourite=favourite></Favourite>
        </div>
    </div>
</template>

<script>
import Favourite from '@/components/Favourite.vue'
export default {
    name: 'FavouritesView',
    components: { Favourite },
    computed: {
        favorite() {
            return this.$store.state.favourites.length == 0 ? 0 : 1;
        }
    },

}
</script>

<style lang="scss" scoped>

</style>