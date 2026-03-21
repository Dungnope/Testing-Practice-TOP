export function caesarCipher(data, shiftedNum) {
  let ans = "";
  let Pattern = /[A-Z]|[a-z]/g; //check char is contain in this regex
  for (let i = 0; i < data.length; i++) {
    //check character match patter
    if (data[i].match(Pattern)) {
      let shiftedCode = data.charCodeAt(i) + shiftedNum;
      let shiftedChar = String.fromCharCode(shiftedCode);

      //if the character after shift not in range [a-z] || [A - Z] so wrapping
      if (!shiftedChar.match(Pattern)) {
        shiftedChar = String.fromCharCode(shiftedCode - 26);
      }
      ans += shiftedChar;
      continue;
    }
    ans += data[i];
  }
  return ans;
}

console.log(caesarCipher("Hello, World!", 3));
