
window.addEventListener('DOMContentLoaded', function() {

     var window = document.querySelector("footer div")  
     var input = document.querySelector("section input");
     var ok = document.querySelector("section button")
     ok.addEventListener("click", function(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(reponse => reponse.json())
         .then(data => data.forEach(result => {
             if (result.id == input.value){
                 window.append(result.name)
             }
         }))
     })
 })