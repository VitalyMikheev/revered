const cost = document.getElementsByClassName("cost");
const period = document.getElementsByClassName("period");
const price = document.getElementsByClassName("price");
const currency = document.getElementsByClassName("currency");

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  seqRunner([f1, f2, f3]).then(function () {});
}

var seqRunner = function (deeds) {
  return deeds.reduce(function (p, deed) {
    return p.then(function () {
      return deed();
    });
  }, Promise.resolve());
};
function f1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      cost[0].style.setProperty("display", "flex");
      resolve();
    }, 600);
  });
}
function f2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      cost[2].style.setProperty("display", "flex");
      resolve();
    }, 600);
  });
}
function f3() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      cost[1].style.setProperty("display", "flex");
      resolve();
    }, 600);
  });
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("period")) {
    if (period[0].textContent == "/Month") {
      var index;
      for (index = 0; index < period.length; ++index) {
        console.log(index);
        period[index].textContent = "/Day";
        price[index].textContent = price[index].dataset.day;
      }
    } else {
      var index;
      for (index = 0; index < period.length; ++index) {
        period[index].textContent = "/Month";
        price[index].textContent = price[index].dataset.usd;
      }
    }
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("currency")) {
    switch (currency[0].textContent) {
      case "RUB": // if (x === 'value1')
        var index;
        for (index = 0; index < period.length; ++index) {
          console.log(index);
          period[index].textContent = "/Day";
          price[index].textContent = price[index].dataset.eur;
          currency[index].textContent = "€";
        }
        break;

      case "EUR": // if (x === 'value2')
        var index;
        for (index = 0; index < period.length; ++index) {
          console.log(index);
          period[index].textContent = "/Day";
          price[index].textContent = price[index].dataset.usd;
          currency[index].textContent = "$";
        }
        break;

      default:
        var index;
        for (index = 0; index < period.length; ++index) {
          console.log(index);
          period[index].textContent = "/Day";
          price[index].textContent = price[index].dataset.rub;
          currency[index].textContent = "₽";
        }
        break;
    }
  }
});
