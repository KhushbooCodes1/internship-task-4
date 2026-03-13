const images = document.querySelectorAll(".image-card");

images.forEach(card=>{
card.addEventListener("click", ()=>{
alert("You clicked the image!");
});
});