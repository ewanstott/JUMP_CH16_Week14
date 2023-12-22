// *
// **
// ***
// ****
// *****

// for (let i = 0; i < 6; i++) {
//   console.log("*".repeat(i));
// }

// Nested for loop for the pattern
for (var i = 1; i <= 5; i++) {
  var row = "";
  for (var j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
