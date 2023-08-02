import data from "./data.json" assert { type: "json" };

let bgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

let dailyArray = data.map((item) => item.timeframes.daily);
let weeklyArray = data.map((item) => item.timeframes.weekly);
let monthlyArray = data.map((item) => item.timeframes.monthly);
console.log(dailyArray);
console.log(weeklyArray);
console.log(monthlyArray);

let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");
const secondSection = document.querySelector(".second-section");

drawElement(dailyArray);

dailyBtn.addEventListener("click", () => {
  drawElement(dailyArray);
});
weeklyBtn.addEventListener("click", () => {
  drawElement(weeklyArray);
});
monthlyBtn.addEventListener("click", () => {
  drawElement(monthlyArray);
});

function drawElement(array) {
secondSection.innerHTML = "";
  array.forEach((element, index) => {
    
    let title = data[index].title;
    let titleLowerCase = title.toLocaleLowerCase()

    if(titleLowerCase == "self care"){
      titleLowerCase = "self-care"
    }
    console.log(title);
    console.log(titleLowerCase);
    secondSection.innerHTML += ` <div class="card">
        <div class="card__background" style="background-color: ${bgColors[index]};">
          <img class="card__background__img" src="./images/icon-${titleLowerCase}.svg" alt="">
        </div>
        <div class="card-details"  >
          <div class="card-activity">
            <p class="card__title">${title}</p>
            <img src="./images/icon-ellipsis.svg" alt="three dots">
          </div>
          <div class="card__hours">
            <p class="card__hour">${element.current}hrs</p>
            <p class="card__previous">Previous- ${element.previous}hrs</p>
          </div>
        </div>
      </div>`;
  });
}
