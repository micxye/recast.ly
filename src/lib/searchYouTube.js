var searchYouTube = (options, callback) => {
  console.log('query 2', options.query);
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    videoEmbeddable: true,
    data: {q: options.query, maxResults: 10, key: options.key, part: 'snippet'},

    success: function (data) {
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to get message', data);
    }
  });
};

window.searchYouTube = searchYouTube;
