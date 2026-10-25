const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flag = "";
  if (caseInsensitiveFlag.checked) {
    flag += "i";
  }
  if (globalFlag.checked) {
    flag += "g";
  }
  return flag;
}


testButton.addEventListener("click", () => {
  const flag = getFlags();
  const patternText = regexPattern.value;
  const pattern = new RegExp(patternText, flag);
  const originalText = stringToTest.innerHTML;
  if (pattern.test(originalText)) {
    stringToTest.innerHTML = originalText.replace(pattern, '<span class="highlight">$&</span>');
    // if (flag.includes("g")) {
    //   testResult.innerText = Array.from(originalText.matchAll(pattern), m => m[0]).join(", ");
    // } else {
    //   testResult.innerText = originalText.match(pattern)[0];
    // }
    let matches=originalText.match(pattern);
    if (matches.length>1){
      testResult.innerText=matches.join(", ");
    }else{
      testResult.innerText=matches[0];
    }

  } else {
    stringToTest.innerHTML = originalText;
    testResult.innerText = "no match";
  }
})