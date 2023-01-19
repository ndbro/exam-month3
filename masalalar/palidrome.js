const elText = document.querySelector("#palid-text");

function checkPalindrome(value) {
  const palidrome = value.length;

  for (let i = 0; i < palidrome / 2; i++) {
    if (value[i] !== value[palidrome - 1 - i]) {
    return  elText.textContent = "Bu palidrome emas";
    }
  }
  return elText.textContent = "bu palidrome";
}

const string = prompt("Palidrome: Raqam yokli soz kiriting");
const value = checkPalindrome(string);
console.log(value);