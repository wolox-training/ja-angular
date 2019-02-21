<template lang="pug">
  .row.wrap.space-between
    book-card(v-for="book in books" :key="book.id" :book="book")
</template>

<script>
import { BooksService } from '../../../../services/booksService'
import BookCard from './components/BookCard.vue'

const booksService = new BooksService()

export default {
  data () {
    return {
      books: null
    }
  },
  created () {
    booksService.getBooks()
      .then(books => {
        this.books = books.data
      })
  },
  components: {
    BookCard
  }
}
</script>

<style lang="scss" scoped>

</style>
