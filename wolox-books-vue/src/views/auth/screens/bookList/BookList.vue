<template lang="pug">
  div.row.wrap.space-between
    book-card(v-for="book in books" :key="book.id" :book="book")
</template>

<script>
import BookCard from './components/BookCard.vue'

export default {
  computed: {
    books () {
      return this.$store.state.books
    }
  },
  created: function () {
    this.$store.dispatch('getBooks')
  },
  components: {
    BookCard
  }
}
</script>

<style lang="scss" scoped>

</style>
