var TEXT;
$(document).ready(function() {
	var socket = io.connect('http://127.0.0.1:5000');


	socket.on('message', function(sentences) {

    if (sentences[0] == 'unswer'){
      sentences.shift()
      main = sentences.shift()
      $("#forUnswer").append('<h1>The main sentence was\n\'' + main + '\'</h1>');
      sentences.forEach(function(element, i) {
        document.getElementById(i).remove();
        $('br').remove();
        $("#forUnswer").append('<p>' + element + '</p>');
      });
    }else{

    sentences.forEach(function(element, i) {
    //console.log(element);
    $("#messages").append(' <button id=\"' + i + '\">' + element +'</button><br><br>');
    let tmpButton = document.getElementById(i);
    tmpButton.addEventListener('click', f);
    });

    document.getElementById("myMessage").remove();
    document.getElementById("sendbutton").remove();
    }
	});

  socket.on('choosen_message', function(arg){
    console.log(arg)
    alert('4');
  });

	$('#sendbutton').on('click', function() {
    socket.send($('#myMessage').val());
    window.TEXT = (document.getElementById("myMessage").value);
		$('#myMessage').val('');
	});
  function f(){
    socket.emit('choosen_message',this.id, window.TEXT);
    console.log(this.id + this.textContent);
  }


});
