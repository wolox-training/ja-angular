<template lang="pug">
  div.card.column
    img(:src="book.image_url" alt="book_cover").img.m-bottom-2
    h3.title.m-bottom-1.bold {{book.title}}
    p.author {{book.author}}

</template>

<script>
export default {
  props: [
    'book'
  ]
}
</script>

<style lang="scss" scoped>
  @import '../../../../../scss/colors.scss';

  .card {
    width: 230px;
    height: 320px;
    box-shadow: 8px 8px 6px -6px $alto;
    margin-bottom: 35px;
    background-color: $white;
    padding: 20px;
  }

  .img {
    width: 190px;
    height: 160px;
    background-color: $alto;
    object-fit: contain;
  }

  .title {
    font-size: 17px;
    line-height: 22px;
  }

  .author {
    font-size: 13px;
  }

</style>
