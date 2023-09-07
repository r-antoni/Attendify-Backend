module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        username: 'nurul',
        email: 'example@example.com',
        password : '123456',
        roles : 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };