function handleSubmit() {
  $("#form").submit(function(event) {
    event.preventDefault();

    document.querySelector(".dogPicAmount").defaultValue = 3
    let amount = document.querySelector(".dogPicAmount").value

    placeImages(amount);
    console.log("submit was heard and the value is " + amount) 
  })
}

function placeImages(amount) {
  fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
    .then(responce => responce.json())
    .then(responceJson => {
      responceJson.message.map(function(image) {
        console.log(image);
      })
    })
}

function startDogPixApp() {
  handleSubmit();
  console.log("startDogPixApp ran")
}

$(startDogPixApp);