angular.module('video-player')
  .service('youTube', ['$http', function($http) {
    this.search = (query, result) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true'}
      }).then(function successCallback(response) {
        console.log('Search Success');
        result(response.data.items);
      }, function errorCallback(response) {
        console.log('Request Failed');
      });
    };
  }]);
