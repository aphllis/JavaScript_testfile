const checkEl = document.getElementById("check-btn");
const inputEl = document.getElementById("text-input");
const resultEl = document.getElementById("result");


const charRegex = /[a-zA-Z0-9]+/g;
function extractWords(str) {
    let iter = str.matchAll(charRegex);
    let res = "";
    for (const arr of iter) {
        res += arr[0]
    }
    return res.toLowerCase();
}
function isPalindrome(str) {
    return str.split("").reverse().join("") == str;
}
function check(info) {
    console.log(info)
    if (!info) {
        alert("Please input a value");
        return;
    }
    const words = extractWords(info);
    return isPalindrome(words);
}

checkEl.addEventListener("click", () => {
    if (check(inputEl.value)) {
        resultEl.textContent = `${inputEl.value} is a palindrome`;
    } else {
        resultEl.textContent = `${inputEl.value} is not a palindrome`;
    }
}
)
