const form = document.getElementById("form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");

const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaints = document.querySelectorAll("input[name='complaint']");
const descriptionComplaint = document.getElementById("complaint-description");
const descriptionComplaintAreaDiv = document.getElementById("complaint-description-container");

const solutions = document.querySelectorAll("input[name='solutions']");
const descriptionSolutions = document.getElementById("solution-description");
const descriptionSolutionsAreaDiv = document.getElementById("solution-description-container");

const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");
const clearBtn = document.getElementById("clear-btn")
const hideTextareas = () => {
    descriptionComplaintAreaDiv.style.display = "none";
    descriptionSolutionsAreaDiv.style.display = "none";
};
function showTextareas(complaintsArr, solutionsArr) {
    if (complaintsArr[3]) {
        descriptionComplaintAreaDiv.style.display = "block";
    } else {
        descriptionComplaintAreaDiv.style.display = "none";
    }
    if (solutionsArr[2]) {
        descriptionSolutionsAreaDiv.style.display = "block";
    } else {
        descriptionSolutionsAreaDiv.style.display = "none";
    }
};
hideTextareas();
const fieldsObj = {
    "full-name": fullName,
    "email": email,
    "order-no": orderNo,
    "product-code": productCode,
    "quantity": quantity,
    "complaints-group": complaints,
    "complaint-description": descriptionComplaint,
    "solutions-group": solutions,
    "solution-description": descriptionSolutions,
};
function clearForm() {
    Object.entries(fieldsObj).forEach(item => {
        const [key, val] = item;
        if (key == "complaints-group" || key == "solutions-group") {
            val.forEach(i => i.checked = false);
        } else {
            val.value = "";
        }
        document.getElementById(key).style.borderColor = "rgb(118, 118, 118)";
    })
    hideTextareas();
    messageBox.innerText = "";

}
clearBtn.addEventListener("click", clearForm);
const validateRules = {
    "full-name": (element) => Boolean(element.value),
    "email": (element) => /^\S+@\S+\.\S+$/.test(element.value.trim()),
    "order-no": (element) => /^2024\d{6}$/.test(element.value.trim()),
    "product-code": (element) => /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(element.value.trim()),
    "quantity": (element) => Number.isInteger(Number(element.value.trim())) && Number(element.value.trim()) > 0,
    "complaints-group": (elements) => Array.from(elements).map(i => i.checked).some(i => i),
    "complaint-description": (element) => {
        if (Array.from(complaints).map(i => i.checked)[3]) {
            if (element.value.trim().length < 20) return false
        }
        return true;
    },
    "solutions-group": (elements) => Array.from(elements).map(i => i.checked).some(i => i),
    "solution-description": (element) => {
        if (Array.from(solutions).map(i => i.checked)[2]) {
            if (element.value.trim().length < 20) return false
        }
        return true;
    },
}
function validateForm() {
    let validateObject = {};
    Object.keys(validateRules).forEach(key => { validateObject[key] = validateRules[key](fieldsObj[key]) });
    const complaintsArr = Array.from(complaints).map(i => i.checked);
    const solutionsArr = Array.from(solutions).map(i => i.checked);
    showTextareas(complaintsArr, solutionsArr);
    return validateObject
};

const isValid = (validateObject) => Object.values(validateObject).every(i => i);

Object.entries(fieldsObj).forEach(item => {
    const [key, value] = item;
    document.getElementById(key).addEventListener("change", () => {
        const complaintsArr = Array.from(complaints).map(i => i.checked);
        const solutionsArr = Array.from(solutions).map(i => i.checked);
        showTextareas(complaintsArr, solutionsArr);

        if (validateRules[key](value)) {
            document.getElementById(key).style.borderColor = "green";
        } else {
            document.getElementById(key).style.borderColor = "red";
        }


    })
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const validateObject = validateForm();
    if (!isValid(validateObject)) {
        messageBox.innerText = "Please, fill out the required fields correctly before submitting.";
        Object.keys(validateObject).forEach(key => {
            if (!validateObject[key]) {
                document.getElementById(key).style.borderColor = "red";
            } else {
                document.getElementById(key).style.borderColor = "green";
            }
        })
    } else {
        messageBox.innerText = "";
        alert("Form successfully submitted.");
        clearForm();
    }
})