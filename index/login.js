const emailList = ["723108@kng.ed.jp"]
const passwordList = ["111"]

function validateUserInput() {
    const inputName = document.getElementById('usernameInput').value
    const inputPassword = document.getElementById('passwordInput').value

    if (emailList.includes(inputName)) {
        const emailTag = emailList.indexOf(inputName)
        if (inputPassword === passwordList[emailTag]) {
            window.location.href = "../src/pages/home.html"
            alert("Login successful.")
        } else {
            alert("Password is incorrect.")
        }
    } else {
        alert("Email does not exist.")
    }
}
