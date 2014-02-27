
$(document).ready(function() 
{
    $('#post').click(function()
    {
              var boxinfo= $('#input').val();
        $('#wall').prepend('<div id="time">' + boxinfo + '</br> <button class="likeButton">Like</button> </br></div>');
        $('#input').val("");
     
        setTimeout(function(){
            $('#time').remove();
        }, 5000);
       
    });
});
