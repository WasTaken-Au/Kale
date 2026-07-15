const emailList = ["723108@kng.ed.jp"]
const passwordList = ["111"]

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dxlfagnlseqymfzoilrd.supabase.co'
const supabaseKey = 'sb_publishable_HZbga9jAepjmeeWe3unhlw_2qGyV52Q'
export const supabase = createClient(supabaseUrl, supabaseKey)

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
