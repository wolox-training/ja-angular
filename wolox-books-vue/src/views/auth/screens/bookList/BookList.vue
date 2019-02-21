<template lang="pug">
  div.row.wrap.space-between
    book-card(v-for="book in books" :key="book.id" :book="book")
</template>

<script>
import BookCard from './components/BookCard.vue'
import { mapState } from 'vuex'

export default {
  computed: mapState ([
    'books'
  ]),
  created () {
    this.$store.dispatch('getBooks')
  },
  components: {
    BookCard
  }
}
</script>

<style lang="scss" scoped>

</style>
