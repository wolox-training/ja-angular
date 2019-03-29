angular.module('app-bootstrap').controller('BookDetailController', [
  function () {

    this.book = {
      recommended: [1,2,3],
      title: 'asd',
      author: 'asd',
      year: 2018,
      theme: 'asd',
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddasdasdads',
      comments: [{author: "asdasd", date: "23/12/2018", comment: "asdasdasd"}]
    }

  }
]);
