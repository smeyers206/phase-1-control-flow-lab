function scuberGreetingForFeet(feet) {
  if (feet < 200) {
    return "This one is on me!";
  } else if (feet >= 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  let response;
  city === "NYC" ? (response = "Ok, sounds good.") : (response = "No go.");
  return response;
}

function switchOnCharmFromTip(tip) {
  let complimentaryClosing;
  switch (tip) {
    case "generous":
      complimentaryClosing = "Thank you so much.";
      break;
    case "not as generous":
      complimentaryClosing = "Thank you.";
      break;
    default:
      complimentaryClosing = "Bye.";
      break;
  }
  return complimentaryClosing;
}
