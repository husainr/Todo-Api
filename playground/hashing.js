const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var pass = '123abc';

// bcrypt.genSalt(10, (err,salt) => {
//   bcrypt.hash(pass, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashpass = '$2a$10$vGS4ihyf885tNmgPWo7C/OttyfWQq0V35x2Xxf7MVhZlzBQu4TYqi';

bcrypt.compare(pass,hashpass, (err,res) => {
  console.log(res);
});

// var data = {
//   id: 4
//  };
//
// var token = jwt.sign(data, '123abc');
//
// console.log(token);
//
//
//
//
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);
// var message = 'i am user one';
//
// var hash = SHA256(message).toString();
//
// console.log(message);
// console.log(hash);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// //token.data.id = 5;
// //token.hash = SHA256(JSON.stringify(token.data.id)).toString();
//
// var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resulthash === token.hash) {
//   console.log('data was not changed');
// } else {
//   console.log('data was changed');
//}
