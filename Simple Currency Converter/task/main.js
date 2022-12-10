const input = require('sync-input');
let usdConvertRation = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75
}
let Converter = {
  show() {
    console.log(`Welcome to Currency Converter!
1 USD equals ${usdConvertRation.USD} USD
1 USD equals ${usdConvertRation.JPY} JPY
1 USD equals ${usdConvertRation.EUR} EUR
1 USD equals ${usdConvertRation.RUB} RUB
1 USD equals ${usdConvertRation.GBP} GBP`)
  },
  askCurrenciesWannaConvert() {
    let couldBeConvert = false;
    let from = "";
    let to = "";
    from = input("From: ");
    from = from.toUpperCase();
    if (from !== "USD" && from !== "JPY" && from !== "EUR" && from !== "RUB" && from !== "GBP") {
      console.log("Unknown currency");
      return {couldBeConvert, from, to};
    }
    to = input("To: ")
    to = to.toUpperCase();
    if (to !== "USD" && to !== "JPY" && to !== "EUR" && to !== "RUB" && to !== "GBP") {
      console.log("Unknown currency");
      return {couldBeConvert, from, to};
    }
    couldBeConvert = true;
    return {couldBeConvert, from, to};
  },
  convert({couldBeConvert, from, to}) {
    if (couldBeConvert) {
      let amount = Number(input("Amount: "));
      if (amount < 1) {
        console.log("The amount cannot be less than 1");
      } else if (isNaN(amount)) {
        console.log("The amount has to be a number");
      } else {
        console.log(`Result: ${amount} ${from} equals ${(usdConvertRation[to] / usdConvertRation[from] * amount).toFixed(4)} ${to}`);
      }
    }
  }, confirmConvert() {
    console.log("What do you want to do?\n" +
      "1-Convert currencies 2-Exit program")
    let inputConvertOrExit = input();
    switch (inputConvertOrExit) {
      case "1":
        return "convert";
      case "2":
        return "exit";
      default:
        return "unknown input";
    }
  }
};

Converter.show();
while (true) {
  let confirm = Converter.confirmConvert();
  if ("convert" === confirm) {
    Converter.convert(Converter.askCurrenciesWannaConvert());
  } else if ("exit" === confirm) {
    console.log("Have a nice day!")
    break;
  } else if ("unknown input" === confirm) {
    console.log("Unknown input!")
  }
}