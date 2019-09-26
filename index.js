function getImage() {
    let breed = document.querySelector(".dogPicAmount").value
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(responce => responce.json())
    .then(responceJson => 
      displayResults(responceJson, breed)
    )
    // .catch(responceJson => {
    //   if (responceJson.status === "error") {
    //     alert("Breed was not found")
    //   }
    // })
    console.log("submit was heard and the value is " + breed) 
}


function displayResults(responceJson, breed) {
  let imgString = `<img alt="photo of ${breed}" class="results-photo" src="${responceJson.message}">`

  $(".results-picture").replaceWith(imgString);
  $("section.results").removeClass("hidden");

  console.log("replaceWith ran " + imgString)
}

function watchForm() {
  $("#form").submit(event => {
    event.preventDefault();
    getImage();
  })
  console.log("watching for submit")
}

$(watchForm);