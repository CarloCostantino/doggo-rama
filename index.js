'use strict';

function getImage() {
    let breed = document.querySelector(".dogPicAmount").value
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(responce => responce.json())
      .then(responceJson => {
        handleInput(responceJson, breed)
      })
      .catch(error => {
          alert("Breed was not recognized :( ")
      })
}

function handleInput(responceJson, breed) {
  if (responceJson.status === "success") {
    displayResults(responceJson, breed)
    } else {
      throw new Error
    }
}

function displayResults(responceJson, breed) {
  $(".results-picture").replaceWith(`<img alt="photo of ${breed}" class="results-picture" src="${responceJson.message}">`);
  $("section.results").removeClass("hidden");
}

function watchForm() {
  $("#form").submit(event => {
    event.preventDefault();
    getImage();
  })
}

$(watchForm);