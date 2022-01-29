var rangeValue = document.getElementById("myRange");
var month = document.getElementById("monthValue");
var year = document.getElementById("yearValue");
var btn = document.getElementById("switch");
var monthdiv = document.getElementById("monthdiv");
var yeardiv = document.getElementById("yeardiv");
var views = document.getElementById("views");
//// function pour afficher les nombre de pageviews
function getviews() {
  if (monthdiv.classList.contains("random") === false) {
    var nmbrviews = rangeValue.value * 0.5;
    views.textContent = nmbrviews;
  } else {
    var nmbrviews = rangeValue.value * 6;
    views.textContent = nmbrviews;
  }
}
///// function pour afficher le prix par mois ou ans qui fait appeler la fonction des nombre page views
function MonthlyReadValue() {
  value = rangeValue.value;
  month.textContent = value;
  Yearvalue = value * 9;
  year.textContent = Yearvalue;
  getviews();
}
///// function qui change le prix du mois en anneé
function swap() {
  yeardiv.classList.toggle("random");
  monthdiv.classList.toggle("random");
  getviews();
}
//// initialisiation du prix en mois
MonthlyReadValue();
//// l'action du click
btn.onclick = swap;
///// l'action de slider les prix
rangeValue.oninput = MonthlyReadValue;
