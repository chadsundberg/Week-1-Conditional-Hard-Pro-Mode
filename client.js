function whichIsBigger (x, y) {
  x = parseFloat(x);
  y = parseFloat(y);
  if (x > y) {
    return "The first number was bigger!";
  } else if (x < y) {
    return "The second number was bigger!";
  } else {
    return "The numbers are the same!";
  }
};

// I'm absolutely thrilled that I was able to make this work on my second edit.
// First, I had the console.log statements in the function, which was returning
// the correct output, spaced by three undefined statements.  On my second edit,
// I removed all console.log from the function.

// And now I got the Pro Mode to work!!  And it's only 9:23 PM!!
// Now time to add a README.md file to this thing.

console.log(whichIsBigger(3, 2));
console.log(whichIsBigger(2, 7));
console.log(whichIsBigger(7, 7));
console.log(whichIsBigger('86.7 taco', 92));
