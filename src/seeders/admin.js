
const bcrypt = require('bcryptjs')

let password = '';
const hashedPassword = (pass) => {
  password = bcrypt.hashSync(pass, bcrypt.genSaltSync(8));
  return password;
};
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('admins', [{
        nama: 'nurul',
        email: 'example@example.com',
        password : hashedPassword('1234567'),
        nohp : '082345678901',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('admins', null, {});
    }
  };