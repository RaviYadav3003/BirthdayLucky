let DateOfBirthInput = document.querySelector(".dateInput");
let luckyNumberInput = document.querySelector(".luckyNumberInput");
let checkButton = document.querySelector(".button");
let lucky = document.querySelector(".lucky");

function onButonClicked() {
  let DobValue = DateOfBirthInput.value;

  console.log(DobValue);
  let sumOfDob = DobValue.replaceAll("-", "")
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  let luckyNumberInputValue = luckyNumberInput.value;
  var checkValue = sumOfDob % luckyNumberInputValue;
  console.log(checkValue);
  function check() {
    if (luckyNumberInputValue <=0 || DobValue ==0 ){
      lucky.innerText = "Please enter vaild input";
    } else if(checkValue == 0) {
      console.log("Your Birthday is Lucky");
      lucky.innerText = "Your Birthday is Lucky 😎🎉🥳";
    } else {
      console.log("Your Birthday not Lucky");
      lucky.innerText = "Your Birthday is not Lucky 😥";
    }
  }
  check();

  console.log(sumOfDob, typeof sumOfDob);

  //   console.log(DobValueToNumber, typeof DobValueToNumber);
}
checkButton.addEventListener("click", onButonClicked);
