function getVideo() {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/channels',
      data: {
          key: 'AIzaSyDk0Tx00FBiy-C4Bz_rK3kuCxitJFePSFk',
          part: 'snippet',
          id:'UCVUdHi-tdW5AKdzMiTPG97Q',               
      },
      success: function(data){
          
          embedVideo(data)
      },
      error: function(response){
          console.log("Request Failed");
      }
    });
  }
  function embedVideo(data) {
    console.log(data);

    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[2].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo();
