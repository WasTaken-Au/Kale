const emailList = ["723108@kng.ed.jp"]
const passwordList = ["111"]

function validateUserInput() {
    const inputName = document.getElementById('usernameInput').value
    const inputPassword = document.getElementById('passwordInput').value

    if (emailList.includes(inputName)) {
        const emailTag = emailList.indexOf(inputName)
        if (inputPassword === passwordList[emailTag]) {
            window.location.href = "../src/pages/dashboard.html"
            alert("Login successful.")
        } else {
            alert("Password is incorrect.")
        }
    } else {
        alert("Username does not exist.")
    }
}
