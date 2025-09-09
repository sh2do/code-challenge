let basic = 50000,
  benefits = 10000;
let gross = basic + benefits;

let nssf = Math.min(gross * 0.06, 4320);
let shif = Math.max(gross * 0.0275, 300);
let housing = gross * 0.015;

let taxable = gross - (nssf + shif + housing);
let paye =
  taxable <= 24000
    ? taxable * 0.1
    : taxable <= 32333
    ? 2400 + (taxable - 24000) * 0.25
    : 2400 + 2083.25 + (taxable - 32333) * 0.3;
paye = Math.max(paye - 2400, 0);

let net = gross - (nssf + shif + housing + paye);
console.log("Net Salary:", net);

function calculateTotal(price, tax, tip) {
  const subtotal = price + price * tax;
  const total = subtotal + subtotal * tip;
  return total;
}
