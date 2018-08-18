angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
    controller: function() {
      this.onClick = () => {};
      
    },

    templateUrl: 'src/templates/videoList.html'


    
  });
