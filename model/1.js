module.exports = (sequelize, Sequelize) => {
	const login = sequelize.define('login', {
	  first_name: {
		  type: Sequelize.STRING
	  },
	  last_name: {
		  type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
	  },
	  password: {
		  type: Sequelize.STRING
	  }
	});
	
	return login;
}