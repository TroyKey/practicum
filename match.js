var input = "A string with 7 numbers in it... 42 and 88, 123 and 16, 4 and 22.";
var number = /\b(\d[0-9])\b/g;
//tested different combos of the regExp \b [0-9] and endd up replacing the + to get it to work
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
