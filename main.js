const buttonHideShow = document.getElementById('idButtonHideShow')
const inputPassword = document.getElementById('idPassword')
const arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const arrayUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const arrayLowerCase = []
const passWordStrength = document.getElementById('idPassWordStrength')

// iterate arrayUpperCase into arrayLowercase
for (let index = 0; index < arrayUpperCase.length; index++) {
    arrayLowerCase.push((arrayUpperCase[index]).toLowerCase())
}

var pointsLength = 0
var pointsNumber = 0
var pointsUpperCase = 0
var pointsLowerCase = 0
var pointsSpecialCharacter = 0

console.log(pointsLength)
console.log(pointsNumber)
console.log(pointsUpperCase)
console.log(pointsLowerCase)
console.log(pointsSpecialCharacter)

// hide or show password
buttonHideShow.addEventListener("click", hidePassword)

function hidePassword() {
    if (buttonHideShow.innerText == 'SHOW') {
        inputPassword.setAttribute("type", "text")
        buttonHideShow.innerText = 'HIDE'
    } else {
        inputPassword.setAttribute("type", "password")
        buttonHideShow.innerText = 'SHOW'
    }

}

inputPassword.addEventListener('keyup', testCharacters)

// testing all conditions
function testCharacters() {

    pointsLength = 0
    pointsNumber = 0
    pointsUpperCase = 0
    pointsLowerCase = 0
    pointsSpecialCharacter = 0

    testNumberUpperCaseLowerCase()
    testLength()

    let totalPoints = pointsLength + pointsNumber + pointsUpperCase + pointsLowerCase + pointsSpecialCharacter

    console.log(totalPoints)

    // setting results on the screen
    if (totalPoints >= 9) {
        passWordStrength.innerText = "Strong Password"
        passWordStrength.classList.add('strongPassword');
        passWordStrength.classList.remove('moderatePassword');
        passWordStrength.classList.remove('weakPassword');
    } else {
        if (totalPoints > 5) {
            passWordStrength.innerText = "Moderate Password"
            passWordStrength.classList.add('moderatePassword');
            passWordStrength.classList.remove('weakPassword');
            passWordStrength.classList.remove('strongPassword');
        } else {
            if (totalPoints <= 5) {
                passWordStrength.innerText = "Weak Password"
                passWordStrength.classList.add('weakPassword');
                passWordStrength.classList.remove('strongPassword');
                passWordStrength.classList.remove('moderatePassword');
            }
        }
    }
}

// getting points about the length of the password
function testLength() {
    let inputPasswordValue = document.getElementById('idPassword').value

    if (inputPasswordValue.length >= 14) {
        pointsLength = 5
    } else {
        if (inputPasswordValue.length >= 12) {
            pointsLength = 4
        } else {
            if (inputPasswordValue.length >= 10) {
                pointsLength = 3
            } else {
                if (inputPasswordValue.length > 6) {
                    pointsLength = 2
                } else {
                    if (inputPasswordValue.length > 1) {
                        pointsLength = 1
                    }
                }
            }
        }
    }
}

// getting points about - password contains number/lowercase/uppercase/specialCharacter
function testNumberUpperCaseLowerCase() {
    let inputPasswordValue = document.getElementById('idPassword').value
    let arrayPassword = inputPasswordValue.split("")

    arrayPassword.forEach(checkNumber)
    arrayPassword.forEach(checkUpperCase)
    arrayPassword.forEach(checkLowerCase)
    checkSpecialCharacter()

}

function checkNumber(item) {
    for (let index = 0; index < arrayNumbers.length; index++) {
        if (item == arrayNumbers[index]) {
            pointsNumber = 1
        }
    }
}

function checkUpperCase(item) {
    for (let index = 0; index < arrayUpperCase.length; index++) {
        if (item == arrayUpperCase[index]) {
            pointsUpperCase = 1
        }
    }
}

function checkLowerCase(item) {
    for (let index = 0; index < arrayLowerCase.length; index++) {
        if (item == arrayLowerCase[index]) {
            pointsLowerCase = 1
        }
    }
}

function checkSpecialCharacter() {
    let inputPasswordValue = document.getElementById('idPassword').value
    let arrayPassword = inputPasswordValue.split("")

    for (let index = 0; index < arrayPassword.length; index++) {
        if (!arrayLowerCase.includes(arrayPassword[index]) && !arrayNumbers.includes(arrayPassword[index]) && !arrayUpperCase.includes(arrayPassword[index])) {
            pointsSpecialCharacter = 2
        }
    }
}