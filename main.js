const inputNumbers = document.getElementById("input-numbers");
const buttonSeparate = document.getElementById("button-separate");
const evenNumbersList = document.getElementById("even-numbers");
const oddNumbersList = document.getElementById("odd-numbers");

buttonSeparate.addEventListener("click", separateNumbers);

function separateNumbers() {
  const numbersString = inputNumbers.value;
  const numbersArray = numbersString
    .split(",")
    .map((number) => parseInt(number.trim(), 10));

  const uniqueNumbers = new Set(numbersArray);
  if (uniqueNumbers.size < 4) {
    alert("Debe haber al menos 4 números diferentes");
    return;
  }

  const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
  const oddNumbers = numbersArray.filter((number) => number % 2 !== 0);

  renderNumbersList(evenNumbers, evenNumbersList);
  renderNumbersList(oddNumbers, oddNumbersList);
}

function renderNumbersList(numbers, listElement) {
  listElement.innerHTML = "";

  numbers.forEach((number) => {
    const listItem = document.createElement("li");
    listItem.textContent = number;
    listElement.appendChild(listItem);
  });
}
