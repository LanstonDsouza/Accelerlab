// get the quantity and price

var quantity = document.getElementById("quantity").innerHTML;
var price = document.getElementById("price").innerHTML;
var marketValue = quantity * price;
document.getElementById("marketValue").innerText = "$" + marketValue;

var quantity = document.getElementById("quantity1").innerHTML;
var price = document.getElementById("price1").innerHTML;
var marketValue = quantity * price;
document.getElementById("marketValue1").innerText = "$" + marketValue;

var quantity = document.getElementById("quantity2").innerHTML;
var price = document.getElementById("price2").innerHTML;
var marketValue = quantity * price;
document.getElementById("marketValue2").innerText = "$" + marketValue;

var quantity = document.getElementById("quantity3").innerHTML;
var price = document.getElementById("price3").innerHTML;
var marketValue = quantity * price;
document.getElementById("marketValue3").innerText = "$" + marketValue.toFixed(2);

var quantity = document.getElementById("quantity4").innerHTML;
var price = document.getElementById("price4").innerHTML;
var marketValue = quantity * price;
document.getElementById("marketValue4").innerText = "$" + marketValue.toFixed(2);

var quantity = document.getElementById("quantity5").innerHTML;
var price = document.getElementById("price5").innerHTML;
var marketValue = quantity * price;
document.getElementById("marketValue5").innerText = "$" + marketValue.toFixed(2);

console.log(marketValue);
console.log("hiii");

// calculating the chart details
var xValues = ["Mutual Funds", "ETFs"];
var yValues = [24, 15];
var barColors = [
  "#00FFFF",
  "#808000",

];

 new Chart("myChart", {
  type: "doughnut",
  options: {
    responsive: false,
    maintainAspectRatio: false
},
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      // text: "Portfolio"
    }
  }
});