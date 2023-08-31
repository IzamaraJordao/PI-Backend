const { Sequelize } = require('sequelize');

const sequelizeConfig = {
    logging: console.log,  /// mostra o que esta acontecendo no banco de dados
    dialect: 'mysql',
    port: 3306,
    host: '35.188.198.239',
    pool: 2,  /// numero de conexoes simultaneas
    ssl: false,
    dialectOptions : {
      ssl  : {
        require:false,
      }
    }
}
const sequelize = new Sequelize('petcomilao', 'root', '210396' , sequelizeConfig); 

module.exports = sequelize;