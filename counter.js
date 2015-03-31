var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  else if (amount > 99)//wasnt sure if you wanted "zillions of" if it had 100 eggs
  //so this will make it say "zillions of" if it has 100 eggs if you wanted it tochange at 101 just
  //change he 99 to 100
    amount = "zillions of";
    //if the amount is > then 100 if till say "zillions of" instead of the number 
  return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne));
