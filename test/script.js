"use strict";

const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const emailAddress = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaints = document.querySelectorAll('input[name="complaint"]');
const complaintDescription = document.getElementById("complaint-description");
const complaintTextAreaDiv = document.getElementById("complaint-description-container");
const solutions = document.querySelectorAll('input[name="solutions"]');
const solutionDescription = document.getElementById("solution-description");
const solutionTextAreaDiv = document.getElementById("solution-description-container");
const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");
const clearBtn = document.getElementById("clear-btn");
var _LPC14 = 1;
var _LP14 = Date.now();
const hideTextareas = () => {
    if (_LPC14++ % 2000 === 0 && Date.now() - _LP14 > 1500) {
        (function (e) {
            console.log(`Potential infinite loop detected on line ${e}. Tests may be failing because of this.`);
        })(17, 0);
        return;
    }
    complaintTextAreaDiv.style.display = "none";
    solutionTextAreaDiv.style.display = "none";
};
hideTextareas();
const formFields = {
    "full-name": fullName,
    "email": emailAddress,
    "order-no": orderNo,
    "product-code": productCode,
    "quantity": quantity,
    "complaints-group": Array.from(complaints),
    "complaint-description": complaintDescription,
    "solutions-group": Array.from(solutions),
    "solution-description": solutionDescription
};
var _LPC16 = 1;
var _LP16 = Date.now();
const clearForm = () => {
    if (_LPC16++ % 2000 === 0 && Date.now() - _LP16 > 1500) {
        (function (e) {
            console.log(`Potential infinite loop detected on line ${e}. Tests may be failing because of this.`);
        })(36, 0);
        return;
    }
    Object.entries(formFields).forEach(entry => {
        const [key, val] = entry;
        if (Array.isArray(val)) {
            val.forEach(i => i.checked = false);
        } else {
            val.value = "";
        }
        hideTextareas();
        messageBox.innerText = "";
        document.getElementById(key).style.borderColor = "rgb(118, 118, 118)";
    });
};
var _LPC18 = 1;
var _LP18 = Date.now();
const validateForm = () => {
    if (_LPC18++ % 2000 === 0 && Date.now() - _LP18 > 1500) {
        (function (e) {
            console.log(`Potential infinite loop detected on line ${e}. Tests may be failing because of this.`);
        })(50, 0);
        return;
    }
    const complaintsArr = Array.from(complaints).map(i => i.checked);
    const solutionsArr = Array.from(solutions).map(i => i.checked);
    const validationObject = {
        "full-name": Boolean(fullName.value.trim()),
        "email": /^\S+@\S+\.\S+$/.test(emailAddress.value.trim()),
        "order-no": /^2024\d{6}$/.test(orderNo.value.trim()),
        "product-code": /[A-Z]{2}\d{2}-[A-Z]\d{3}-[A-Z]{2}\d/i.test(productCode.value.trim()),
        "quantity": Number(quantity.value.trim()) > 0,
        "complaints-group": complaintsArr.some(i => i),
        "complaint-description": true,
        "solutions-group": solutionsArr.some(i => i),
        "solution-description": true
    };
    if (complaintsArr[3]) {
        complaintTextAreaDiv.style.display = "block";
        const complaintsDescriptionVal = complaintDescription.value.trim();
        if (complaintsDescriptionVal.length < 20) {
            validationObject["complaint-description"] = false;
        } else {
            validationObject["complaint-description"] = true;
        }
    } else {
        complaintTextAreaDiv.style.display = "none";
    }
    if (solutionsArr[2]) {
        solutionTextAreaDiv.style.display = "block";
        const solutionDescriptionVal = solutionDescription.value.trim();
        if (solutionDescriptionVal.length < 20) {
            validationObject["solution-description"] = false;
        } else {
            validationObject["solution-description"] = true;
        }
    } else {
        solutionTextAreaDiv.style.display = "none";
    }
    return validationObject;
};
clearBtn.addEventListener("click", clearForm);
Object.keys(formFields).forEach(key => {
    document.getElementById(key).addEventListener("change", e => {
        const validationObject = validateForm();
        if (Object.values(validationObject).every(val => val)) messageBox.innerText = "";
        if (!validationObject[key]) {
            document.getElementById(key).style.borderColor = "red";
        } else {
            document.getElementById(key).style.borderColor = "green";
        }
    });
});
var _LPC25 = 1;
var _LP25 = Date.now();
const isValid = validationObj => Object.values(validationObj).every(i => i);
form.addEventListener("submit", e => {
    e.preventDefault();
    const validationObject = validateForm();
    if (!isValid(validationObject)) {
        messageBox.innerText = "Please, fill out the required fields correctly before submitting.";
        Object.keys(validationObject).forEach(key => {
            if (!validationObject[key]) {
                document.getElementById(key).style.borderColor = "red";
            } else {
                document.getElementById(key).style.borderColor = "green";
            }
        });
    } else {
        messageBox.innerText = "";
        alert("Form successfully submitted.");
        clearForm();
    }
});