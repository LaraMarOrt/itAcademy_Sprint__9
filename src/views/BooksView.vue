<template>
  <div class="text-light m-5">
    <h1 class="mb-4">Gabinete de libros:</h1>
    <Book></Book>
  </div>
</template>
<script>
import Book from '@/components/Book.vue'

export default {
  name: 'BooksView',
  components: {
    Book
  }
}
</script>
