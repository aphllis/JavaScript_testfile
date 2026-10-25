document.addEventListener("DOMContentLoaded", () => {
    let textInputEl = document.getElementById("text-input");
    let charCountEl = document.getElementById("char-count");
    charCountEl.innerHTML = `Character Count: /50`
    textInputEl.addEventListener("input", () => {
        let charCount = textInputEl.value.length;
        if (textInputEl.value.length > 50) {
            textInputEl.value = textInputEl.value.substring(0, 50);
            charCount = 50;
        };
        charCountEl.innerHTML = `Character Count: ${charCount}/50`;
        if (charCount === 50) {
            charCountEl.style.color = "red";
        } else {
            charCountEl.style.color = "darkslategray"
        }
    })
})

