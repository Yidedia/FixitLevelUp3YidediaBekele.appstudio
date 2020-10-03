function carLoanPayment(a,r,n) {
  let carAmt = (a*(r/12))/(1-(Math.pow((1+r/12),-n)))
  return carAmt
  }
  
function homeLoanPayment(p,r,n) {
  let homeAmt = p * (r*((1+r)**n))/(((1+r)**n)-1)
  return homeAmt
  }
  
carLoan.onclick=function(){
  a = Number(principle.value)
  r = Number(rate.value)
  n = Number(months.value)
  amount = carLoanPayment(a,r,n)
  answer.value = `A car loan for $${a} over ${n} months at ${r}% interest would have a monthly payment of $${amount}` 
}
