module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
    
  });

  return User;
};
