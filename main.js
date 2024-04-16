/* Student loan tracker 
1. The main function of this app is to track student loan payments and calculate how much is left to pay off my student loan balance after each payment is made
-totalBalance needs to change to result.newBalance for future payment inputs
-need to be able to enter this on a website in html and then see the result
-need to be able to out a name, date, and amount next to each payment
-need to send a note when $30k,$20k, $10k, 0 remaining
2. Extra functions can come later, like predicting when I anticipate paying off the full amount at the current pace of payment


*/

const loanComputer = {
  totalBalance : 34782, 

  studentLoanPayment : function(payment) {
    const newBalance = this.totalBalance - payment; 

    this.totalBalance = newBalance; 

    return {newBalance}; 
  }
};

document.getElementById("paymentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const paymentAmount = parseFloat(document.getElementById("paymentAmount").value);

  const newBalance = 10000 - paymentAmount;

  const paymentDetailsTable = document.getElementById("paymentDetails");
  const newRow = paymentDetailsTable.insertRow(-1);

  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = date;
  newRow.insertCell(2).textContent = `$${paymentAmount}`;
  newRow.insertCell(3).textContent = `$${newBalance}`;

  //Make a way to edit the input values below

}); 


//console.log(`You paid ${newPayment} you have ${result.newBalance} left to pay`)