<template lang="pug">
  div.card.full-width.row(v-if="book")
    img.img.m-right-4(:src="book.image_url")
    div.details.column
      div.header.row.full-width.m-bottom-2
        p.title.bold.m-right-1 {{book.title}}
        p.subtitle ({{book.genre}})
      span.m-bottom-2
        strong.bold.m-right-1 {{ $t("bookDetail.author")}}:
        | {{book.author}}
      span.m-bottom-2
        strong.bold.m-right-1 {{ $t("bookDetail.publisher")}}:
        | {{book.publisher}}
      span.m-bottom-2
        strong.bold.m-right-1 {{ $t("bookDetail.year")}}:
        | {{book.year}}
</template>

<script>
import { BooksService } from '../../../../services/booksService'
const booksService = new BooksService()

export default {
  data: () => {
    return {
      book: null
    }
  },
  beforeCreate: function () {
    const bookId = this.$route.params.id
    booksService.getBook(bookId)
      .then(res => {
        this.book = res.data
      })
  }

}
</script>

<style lang="scss" scoped>
  @import '../../../../scss/colors.scss';

  .card {
    box-shadow: 8px 8px 6px -6px $alto;
    background-color: $white;
    padding: 40px;
  }

  .img {
    width: 300px;
    height: 300px;
    background-color: $alto;
    object-fit: contain;
  }

  .details {
    flex: 1;
  }

  .header {
    $title-font-size: 25px;

    padding: 10px 0 20px;
    border-bottom: 4px solid $celery;

    .title {
      font-size: $title-font-size;
      line-height: $title-font-size;
    }

    .subtitle {
      font-size: 18px;
      line-height: $title-font-size;
    }
  }

</style>
