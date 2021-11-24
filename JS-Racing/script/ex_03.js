
 document.onreadystatechange = function() {

  var btn = document.querySelector('footer div');

    btn.onclick = function question() {
      var name = window.prompt("What's your name ?");
      if (name) {
        var confirm = window.confirm("Are you sure that "+name+" is your name ?");
        if (confirm) {
          alert("Hello "+name+" !");
        }
      }
      document.querySelector('footer div').innerHTML = "Hello "+name+" !";
    };

 }


