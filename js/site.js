var loanAmount;
var term;
var interestRate;
var submit;

window.onload = function () {
  document.getElementById('loanAmount').focus();
  document.getElementById('submit').onclick = getValues;
};

//input validation, ensure numbers are being used
loanAmount = parseInt(loanAmount);
term = parseInt(term);
interestRate = parseInt(interestRate);

//check for integers
if (
  Number.isInteger(loanAmount) &&
  Number.isInteger(term) &&
  Number.isInteger(interestRate)
) {
  let lsArray = loanShark(loanAmount, term, interestRate);

  display(lsArray);
} else {
  alert('You must enter a number');
}

const getValues = () => {
  loanAmount = document.getElementById('loanAmount').value;
  term = document.getElementById('term').value;
  interestRate = document.getElementById('interestRate').value;
  interestRate /= 1200;
  term *= 12;
  minPayment = calculatePayment();
  document.getElementById('payment').value = '$' + minPayment.toFixed(2);
};

const calcPayment = () => {
  let payment =
    (loanAmount * (interestRate * Math.pow(1 + interestRate, term))) /
    (Math.pow(1 + interestRate, term) - 1);
  return payment;
};
