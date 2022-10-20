const ratingsNumbers = document.querySelectorAll("li");
const submitButton = document.querySelector('[data-submit]')
const mainData = document.querySelector('[data-main]')
const asideData = document.querySelector('[data-aside]')
let resultRating = document.getElementById("result")

submitButton.addEventListener('click', handleSubmit);

ratingsNumbers.forEach((num) => {
  num.addEventListener("click", handleClick);
});

function handleClick(e) {
  const num = e.target;
  ratingsNumbers.forEach((num) => {
    if (num.classList.contains("clicked")) {
      num.classList.remove("clicked");
    }
  });
  num.classList.add("clicked");
  document.getElementById("result").innerHTML = num.innerHTML;
}

function handleSubmit(){
    mainData.classList.toggle("hide");
    asideData.classList.toggle("show");
}