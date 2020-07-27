const raisinAlarm = function (cookie) {
  for (let ingredient of cookie) {
    if (ingredient === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));