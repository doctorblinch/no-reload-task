$(document).ready(function(){

  $('form').in('submit', function(event){
    $.ajax({
      data:{
        text: $('#text').val()
      },
      type: 'POST',
      url: '/process'
    }).done(function(){
      if (data.error){

      }
      else{

      }
    });

    event.preventDefault();
  });

});
