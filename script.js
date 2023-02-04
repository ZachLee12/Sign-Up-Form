
let allInputs = document.querySelectorAll("input")

let emailErrorMessage = "Please enter a valid email."
let firstNameErrorMessage = "Please enter your first name."
let lastNameErrorMessage = "Please enter your last name."
let passwordErrorMessage = "Please enter a password."
let confirmPasswordErrorMessage = "Password does not match. Try again."
let phoneNumberErrorMessage = "Please enter a valid phone number."

function isInvalid(element) {
    return !(element.checkValidity() && (element.value.trim() !== ""));
}

function validateBlur(element, errorMessage) {
    if (isInvalid(element)) {
        element.classList.add("invalid")
        element.style.boxShadow = "0px 0px 3px 1px red"
        element.nextElementSibling.textContent = errorMessage;
    }

    else if (!isInvalid(element)) {
        element.style.boxShadow = "0px 0px 3px 1px green"
    }

}

function validateFocus(element, alreadyFocused) {
    if (!alreadyFocused) {
        element.classList.add("already-focused")
        element.style.boxShadow = "0px 0px 3px 1px #1097ff" //blue
    }
    else if (alreadyFocused) {
        element.addEventListener("keydown", () => {
            if (!isInvalid(element)) {
                element.style.boxShadow = "0px 0px 3px 1px green"
                element.nextElementSibling.textContent = ""
            }
        })
    }

    else if (alreadyFocused && isInvalid(element)) {
        element.style.boxShadow = "0px 0px 3px 1px red"
    }
}


//firstname
let firstName = document.querySelector("#first-name")
let firstNameAlreadyFocused = false;
firstName.addEventListener("blur", (e) => {
    firstNameAlreadyFocused = true;
    validateBlur(firstName, firstNameErrorMessage)
})

firstName.addEventListener("focus", (e) => {
    validateFocus(firstName, firstNameAlreadyFocused)
})

//lastname
let lastName = document.querySelector("#last-name")
let lastNameAlreadyFocused = false;
lastName.addEventListener("blur", (e) => {
    lastNameAlreadyFocused = true;
    validateBlur(lastName, lastNameErrorMessage)
})

lastName.addEventListener("focus", (e) => {
    validateFocus(lastName, lastNameAlreadyFocused)
})

//email
let email = document.querySelector("#email")
let emailAlreadyFocused = false;
email.addEventListener("blur", (e) => {
    emailAlreadyFocused = true;
    validateBlur(email, emailErrorMessage)
})

email.addEventListener("focus", (e) => {
    validateFocus(email, emailAlreadyFocused)
})

//password
let password = document.querySelector("#password")
let passwordAlreadyFocused = false;
password.addEventListener("blur", (e) => {
    passwordAlreadyFocused = true;
    validateBlur(password, passwordErrorMessage)
})

password.addEventListener("focus", (e) => {
    validateFocus(password, passwordAlreadyFocused)
})

//confirmPassword
let confirmPassword = document.querySelector("#confirm-password")
let confirmPasswordAlreadyFocused = false;
confirmPassword.addEventListener("blur", (e) => {
    confirmPasswordAlreadyFocused = true;
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add("invalid")
        confirmPassword.style.boxShadow = "0px 0px 3px 1px red"
        confirmPassword.nextElementSibling.textContent = confirmPasswordErrorMessage
    } else {
        confirmPassword.nextElementSibling.textContent = ""
        if (confirmPassword.value.trim() !== "") {
            confirmPassword.style.boxShadow = "0px 0px 3px 1px green"
        }
    }
})

confirmPassword.addEventListener("focus", (e) => {
    if (!confirmPasswordAlreadyFocused) return;

    confirmPassword.addEventListener("input", e => {
        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add("invalid")
            confirmPassword.style.boxShadow = "0px 0px 3px 1px red"
            confirmPassword.nextElementSibling.textContent = confirmPasswordErrorMessage
        } else {
            confirmPassword.nextElementSibling.textContent = ""
            if (confirmPassword.value.trim() !== "") {
                confirmPassword.style.boxShadow = "0px 0px 3px 1px green"
            }
        }
    })
})

//phoneNumber
let phoneNumber = document.querySelector("#phone-number")
let phoneNumberAlreadyFocused = false;
phoneNumber.addEventListener("blur", (e) => {
    if (phoneNumber.value === "") {
        phoneNumber.style.boxShadow = "none"
        phoneNumber.nextElementSibling.textContent = ""
        return;
    }
    phoneNumberAlreadyFocused = true;
    validateBlur(phoneNumber, phoneNumberErrorMessage)
})

phoneNumber.addEventListener("focus", (e) => {
    if (phoneNumber.value === "") {
        phoneNumber.style.boxShadow = "0px 0px 3px 1px #1097ff" //blue
    }
    validateFocus(phoneNumber, phoneNumberAlreadyFocused)
})

document.querySelector("button").addEventListener("click", () => {
    window.location.href = "./welcomePage.html"
})
