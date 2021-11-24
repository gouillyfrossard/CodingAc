
window.addEventListener('DOMContentLoaded', function() {

     var window = document.querySelector("footer div");


     // fetch("https://jsonplaceholder.typicode.com/users")
     // .then(response => response.json())
     // .then(response => alert(JSON.stringify(response)))
     // .catch(error => alert("Erreur : " + error));

 
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(reponse => reponse.json())
     .then(data => data.forEach(result => window.append(result.name, result.email)))
     
 })