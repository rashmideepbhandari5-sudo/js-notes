const {encryptPassword,verifyPassword} =require('./js_password_Inccrypter/incrypt_discrypt')
const prompt = require('prompt-sync')();

const password =prompt("enter your password: ");//taking the password from the user

//taking the password from the user
const encrypted_password = encryptPassword(password);

//printing the encrypted password 
console.log(`the orginal password is ${password} and hash password is ${encrypted_password}`)

//decrypting the password
const is_correct= verifyPassword(password,encrypted_password)

if(is_correct==true){
    console.log("the password are matching")
}
else{
    console.log("the password not matching")
}
