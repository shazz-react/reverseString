function reverseMyString(string) {
  const array = string.split("");
  const newArray = array.reverse();
  return newArray.join("");
}

module.exports = reverseMyString;
