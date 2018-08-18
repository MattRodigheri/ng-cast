angular.module('video-player')
  .component('search', {
    controller: function() {
      this.result = () => {};
      this.onClick = () => { console.log('search clicked'); };
    },
    templateUrl: 'src/templates/search.html'
  });
