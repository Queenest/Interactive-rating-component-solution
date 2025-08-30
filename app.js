var rates= document.getElementsByClassName("ratings");
for (var i = 0; i < rates.length; i++){
    rates[i].addEventListener("click", function() {
       for (var j = 0; j < rates.length; j++) {
        rates[j].style.background = ""; 
      }
      this.style.background = "hsl(0, 100%, 100%)";
      this.style.color = "hsl(216, 12%, 8%)";
    });
}
const ratings = document.querySelectorAll(".ratings");
const submitBtn = document.getElementById("submitBtn");
const howdoyoudo = document.querySelector(".howdoyoudo");
const thankYou = document.querySelector(".thank_you");
const selectedText = document.querySelector(".selectedText");

let selectedRating = null;


ratings.forEach(rating => {
  rating.addEventListener("click", () => {
    ratings.forEach(r => r.classList.remove("active"));
    rating.classList.add("active");
    selectedRating = rating.textContent;
  });
});


submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    howdoyoudo.classList.add("hidden");
    thankYou.style.display = "block";
    selectedText.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});

