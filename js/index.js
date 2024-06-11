document.getElementById("showCardsBtn").addEventListener("click", function () {
  document.getElementById("data-table").style.display = "none";
  document.getElementById("card-container").style.display = "flex";
  document.querySelector("#showCardsBtn .square-icon").style.fill = "#3d8eda";
  document.querySelector("#showTableBtn .list-icon").style.fill = "#c8c7c7";
});

document.getElementById("showTableBtn").addEventListener("click", function () {
  document.getElementById("data-table").style.display = "flex";
  document.getElementById("card-container").style.display = "none";
  document.querySelector("#showCardsBtn .square-icon").style.fill = "#c8c7c7";
  document.querySelector("#showTableBtn .list-icon").style.fill = "#3d8eda";
});
