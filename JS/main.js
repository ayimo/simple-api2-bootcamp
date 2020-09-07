//let someThing = prompt("SHOW DOG --TEST")

//const apiKey="a36c652c4cd8fd5bb6ff3bfbabe5f544b6481894"
const btn = document.getElementById('button')

btn.addEventListener('click', ()=> {

fetch('https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
  .then(response => response.json())
  .then (data => {
   document.getElementById('dog').src = data;
  })
})
