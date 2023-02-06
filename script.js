
let allInputs = document.querySelectorAll("input")

let emailErrorMessage = "Please enter a valid email."
let firstNameErrorMessage = "Please enter a valid first name."
let lastNameErrorMessage = "Please enter a valid last name."
let passwordErrorMessage = "Please enter a password."
let confirmPasswordErrorMessage = "Password does not match."
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
password.addEventListener('keydown', (e) => {
    console.log('key')
    if (password.value.length >= 0 && password.value.length < 5) {
        passwordErrorMessage = 'Must have at least 6 characters'
        password.style.boxShadow = "0px 0px 3px 1px red"
        password.nextElementSibling.textContent = passwordErrorMessage
    } else if (password.value.length == 0) {
        password.classList.add('invalid')
        password.nextElementSibling.textContent = 'Please enter a password'
        password.style.boxShadow = "0px 0px 3px 1px red"
    } else if (password.value.length >= 5) { //value is read before 'keydown' is fired!, so needs to be 5 to check value of 6
        password.style.boxShadow = "0px 0px 3px 1px green"
        password.nextElementSibling.textContent = ""
        password.classList.remove('invalid')
    }
})
password.addEventListener("blur", (e) => {
    passwordAlreadyFocused = true;
    if (password.value.length > 0 && password.value.length < 6) {
        passwordErrorMessage = 'Must have at least 6 characters'
        password.style.boxShadow = "0px 0px 3px 1px red"
        password.nextElementSibling.textContent = passwordErrorMessage
        password.classList.add('invalid')
    }
    else if (password.value.length == 0) {
        password.classList.add('invalid')
        password.nextElementSibling.textContent = 'Please enter a password'
        password.style.boxShadow = "0px 0px 3px 1px red"
    } else if (password.value.length > 6) {
        password.style.boxShadow = "0px 0px 3px 1px green"
        password.nextElementSibling.textContent = ""
        password.classList.remove('invalid')
    }
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

document.querySelector("button").addEventListener("change", () => {
    if (!document.querySelector('form').checkValidity()) return
    window.location.href = "./welcomePage.html"
})
