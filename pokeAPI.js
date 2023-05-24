document.querySelector("#pForm").addEventListener("submit", getPokemon);



function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  


  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      const myDiv = document.createElement("div");
      myDiv.id = 'pokeContainer';
      myDiv.style.cssText += 'border: solid; height: auto; margin: 20px;';
      const myForm = document.createElement("form");
      myForm.id = 'cardForm';
      var PN = document.createElement("input");
      PN.id = 'pokename';
      PN.setAttribute("type", "text");
      PN.setAttribute("name", "pName");
      PN.setAttribute("placeholder", "pName");
      var s = document.createElement("input");
      s.setAttribute("type", "button");
      s.setAttribute("value", "Update");
      s.id = 'update';

     
      myForm.appendChild(PN);
      myForm.appendChild(s);


      var img = document.createElement("img");
      img.id = 'cardImg';
      img.src = data.sprites.other["official-artwork"].front_default;
      img.alt = "PokemonName";
      img.style.cssText += 'height: 100px; width: auto;';
  

      const myText = document.createElement("p");
      myText.id = "details"
      myText.innerHTML = "name: " + data.name + "<br>ID: " + data.id;
      


      myDiv.appendChild(img);
      myDiv.appendChild(myText);
      myDiv.appendChild(myForm);

      document.getElementById("pokeBox").appendChild(myDiv);

      // Add an event listener to the update button
      s.addEventListener("click", function () {
        updatePokemon(myDiv, PN.value, img);
      });
    });
      
    
   
  e.preventDefault();
}

function updatePokemon(myDiv, name, imgElement) {
  console.log(name);
  console.log(imgElement);
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      imgElement.src = data.sprites.other["official-artwork"].front_default;
      var nameElement = myDiv.querySelector('#details');
      nameElement.innerHTML = "name: " + data.name + "<br>ID: " + data.id;
    });

}
