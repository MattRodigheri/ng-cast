angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',

    controller: function() {
      this.selectVideo = () => {};
      this.searchResults = () => {};
      this.onClick = (video) => {this.currentVideo = video;};
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;
    },
  });
