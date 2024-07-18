const bcrypt = require('bcrypt');

// console.log(bcrypt)

function hashPassword(password) {
  const saltRounds = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;

}

function comparePassword(password, hashedPassword) {
  
    const match = bcrypt.compare(password, hashedPassword);
    return match;
 
}

module.exports = { hashPassword,comparePassword };