const btnElement = document.querySelector(".btn")
const inputElement = document.querySelector(".input")
const btn2Element = document.querySelector(".btn-2")
const alertSinalElement = document.querySelector(".alert-container")


btnElement.addEventListener("click", ()=>{
    createPassword()
})

  btn2Element.addEventListener("click", ()=>{
      copyPassword()
      alertSinalElement.classList.remove("active")

  })

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$?%^&*()_+:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)    
    }
    inputElement.value = password;
    (inputElement.value)
    password + "copied!"
}

function copyPassword() {
    inputElement.select()
    inputElement.setSelectionRange(0, 99999)
    navigator.clipboard.writeText
}
