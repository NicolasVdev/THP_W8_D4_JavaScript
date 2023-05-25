while (true) {
  let userAsk = prompt("Tu veux quoi ?");

  if (userAsk.includes("Fortnite") || userAsk.includes("fortnite")) {
    console.log("on s'fait une partie en soum-soum ?");
  }
  else if (userAsk.endsWith("?")) {
    console.log("Ouais Ouais...");
  }
  else if (userAsk === "") {
    console.log("t'es en PLS ?");
  }
  else if (userAsk === userAsk.toUpperCase()) {
    console.log("Pwa, calme-toi...");
  }
  else {
    console.log("balek");
  }
}
