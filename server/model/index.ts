import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://root:123456@localhost/web', {
  logging: false,
  define: {
    freezeTableName: true,
    timestamps: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  pool: {
    max: 800,
    min: 0,
    idle: 10000,
  },
})
export default sequelize
