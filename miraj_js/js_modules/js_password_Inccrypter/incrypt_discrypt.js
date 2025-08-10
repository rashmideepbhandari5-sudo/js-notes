const bcrypt = require('bcrypt');
const saltRounds = 10;

// Encrypt (hash) function
const encryptPassword = (plaintextPassword) => {//pintextPassword = "MySecurePassword123"
    const ency_pass = bcrypt.hashSync(plaintextPassword, saltRounds); //ency_pass=YvYpWQ7Jfeq7xF2oAfEXO.Gy7S1v6P8OZ6ZQukcKvMTkITdO3fBri"
    return ency_pass  
};

// Verify function (instead of decrypt)
const verifyPassword = (plaintextPassword, hash) => {
   const is_correct_pass = bcrypt.compareSync(plaintextPassword, hash); // Returns true or false
    return is_correct_pass
};
module.exports={encryptPassword, verifyPassword};