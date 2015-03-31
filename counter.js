var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  else if (amount > 99)// if the amount is > 99 it will display "zillions of" instead of the number
  //i wasnt sure if you want it to say "zillions of" if it was at 100 or 101  if that was the case change the 99 to 100
    amount ="zillions of";
  return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne));
