oldPin = "";
savedPin = "";
New = "";
check = "";

// Generating random buttons
function randomize() {
  var buttons = document.getElementsByClassName("number-button");
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * number.length);
    buttons[i].val = number[x];
    buttons[i].innerHTML = number[x];

    number.splice(x, 1);
  }
}
randomize();
// pin entering
$(".number-button").click(function () {
  var fired_button = $(this)[0].innerHTML;
  var string = document.getElementById("display");
  if (string.innerHTML.includes("Enter")) {
    string.innerHTML = "" + "*";
    savedPin += fired_button;
  } else if (string.innerHTML.length < 4) {
    string.innerHTML += "*";
    savedPin += fired_button;
  }
});

// Function of set pin
$("#SetPin").click(function () {
  randomize();
  if (oldPin == "") {
    New = "yes";
    document.getElementById("display").innerHTML =
      "Enter your new pin and press Submit";
  } else {
    document.getElementById("display").innerHTML =
      "Enter your old pin to set new pin and press Submit";
  }
});

// Function of Check Pin
$("#CheckPin").click(function () {
  randomize();
  if (oldPin == "") {
    New = "yes";
    document.getElementById("display").innerHTML =
      "No pin is saved, click on Set pin to Set new pin";
  } else {
    check = "yes";
    document.getElementById("display").innerHTML =
      "Enter pin and press Submit to check";
  }
});

// Function of Submit
$(".Submit-button").click(function () {
  randomize();
  if (check != "yes") {
    if (New == "") {
      if (savedPin == oldPin) {
        New = "yes";
        savedPin = "";
        document.getElementById("display").innerHTML =
          "Old pin correct, Enter new pin";
      } else {
        savedPin = "";
        document.getElementById("display").innerHTML =
          "Old pin incorrect, Enter old pin again";
      }
    } else {
      New = "";
      oldPin = savedPin;
      savedPin = "";
      document.getElementById("display").innerHTML = "New pin saved";
      document.getElementById("indicator").innerHTML = "Pin is saved";
      $("#indicator").css({ "background-color": "green" });
    }
  } else {
    if (oldPin == savedPin) {
      document.getElementById("display").innerHTML = "The pin is correct";
    } else {
      savedPin = "";
      document.getElementById("display").innerHTML =
        "The pin is incorrect, Enter again";
    }
  }
});

// Function of AC
$(".All-clear-button").click(function () {
  savedPin = "";
  document.getElementById("display").innerHTML = "Enter Your Pin";
});

//indicator by default
if (oldPin == "") {
  document.getElementById("indicator").innerHTML = "No Pin is saved";
  $("#indicator").css({ "background-color": "red" });
}
