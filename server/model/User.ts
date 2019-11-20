import { INTEGER, STRING, NOW, TIME, Model } from 'sequelize'
import sequelize from './index'
class User extends Model {}
User.init(
  {
    id: {
      type: INTEGER(),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    phone: {
      type: STRING(12),
      allowNull: false,
    },
    platform: {
      type: STRING(12),
      allowNull: false,
    },
    token: {
      type: STRING(32),
      allowNull: false,
    },
    from: {
      type: STRING(12),
      defaultValue: '',
    },
    createdAt: {
      type: TIME,
      allowNull: false,
      defaultValue: NOW,
      // get: function() {
      //   var dateTime = this.getDataValue('createdAt')
      //   return dateTime ? date.timeFormat(dateTime) : ''
      // },
    },
  },
  {
    sequelize,
    modelName: 'user',
    indexes: [
      {
        name: 'phone',
        fields: ['phone'],
        unique: false,
      },
    ],
    timestamps: false,
    freezeTableName: true,
    engine: 'InnoDB',
    initialAutoIncrement: '1',
    charset: 'utf8',
    comment: 'hgame国内预约表',
  }
)
export default User
