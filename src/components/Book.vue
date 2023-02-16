<template>
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex">
            <div v-for="(book, index) in books" :key="index" class="text-light col">
               <SingleBook :book= book ></SingleBook>
            </div>
        </div>
        <Pagination :page="page"></Pagination>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Pagination from '@/components/Pagination.vue';
import SingleBook from '@/components/SingleBook.vue';

export default {
    name: "book",
    components: {
        Pagination,
        SingleBook
    },
    
    setup() {
        const store = useStore();
        onMounted(() => {
            store.dispatch("fetchData", 1);
        });
        const books = computed(() => store.state.books);
        const page = computed(() => store.state.page);

        return { books, page };
    }
}
</script>

<style scoped>
.card-title {
    font-size: 1.1rem;
    color: #c8fede;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.btn-align {
    justify-content: space-evenly;
}

.bg-book {
    background-color: #3b4550eb;
}

.card-img,
.card-img-top,
.card-img-bottom {
    margin: 1rem;
    display: inline-block;
    position: inherit;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
}

.card-body {
    text-align: center;
    height: 200px;
}

.card-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}

.card-year {
    font-style: oblique;
    color: #c8fede;
    font-size: 0.9rem;
}

.btn {
    position: inherit;
}

.card {
    position: inherit;
}
</style>