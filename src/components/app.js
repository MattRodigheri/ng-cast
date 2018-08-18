angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.searchResults = (videoData) => {
        this.videos = videoData;
        this.currentVideo = videoData[0];
      };
      this.selectVideo = (video) => { this.currentVideo = video; };
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;
      youTube.search('', this.searchResults);
    },
  });
