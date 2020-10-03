function carLoanPayment(a,r,n) {
  let carAmt = (a*(r/12))/(1-(Math.pow((1+r/12),-n)))
  return carAmt
  }
  
function homeLoanPayment(p,r,n) {
  let homeAmt = p * (r*((1+r)**n))/(((1+r)**n)-1)
  return homeAmt
  }
  