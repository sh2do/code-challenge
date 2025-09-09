function calculateTotal(price, tax, tip) {
  const subtotal = price + price * tax;
  const total = subtotal + subtotal * tip;
  return total;
}
