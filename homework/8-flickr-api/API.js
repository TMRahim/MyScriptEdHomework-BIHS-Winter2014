$(document).ready(function() 
{
    $('#search').click(function()
    
    { 
        var boxinfo= $('#box').val();
         $.getJSON("https://api.flickr.com/services/rest/?   method=flickr.photos.search&api_key=1c9f777eb7446f34a7261dc1a54be4b2&tags="+boxinfo+"&has_geo=1&extras=geo&format=json&jsoncallback=?", test);

    });
        function test(data){
        $('#result').empty();
        $.each(data.photos.photo, function(i,item){
          var originalId = item.id;
          var originalServer = item.server;
          var originalFarm = item.farm;
          var originalSecret = item.secret;
          var currentPicLink = "http://farm" + originalFarm + ".staticflickr.com/" + originalServer + "/" + originalId + "_" + originalSecret + ".jpg";
          var currentImg = "<img class='appendImg' + src='"+currentPicLink+"'/>";
          $('#result').append(currentImg);
        });
    }

});
