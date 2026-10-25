function translatePigLatin(str) {
    const regex = /[aeiou][a-z]*/i
    let rest = str.replace(regex, "ay");
    if (rest == str) {
        return str + "ay";
    } else if (rest == "ay") {
        return str + "way";
    } else {
        return str.match(regex)[0] + rest;
    }
}