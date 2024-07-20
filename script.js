function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
  
    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTerm)) {
      alert('Please enter valid numbers');
      return;
    }
  
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
  
    document.getElementById('result').innerHTML = `
      <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: ${totalPayment.toFixed(2)}</p>
      <p>Total Interest: ${totalInterest.toFixed(2)}</p>
    `;
  }
  