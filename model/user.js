module.exports = function(sequelize,DataTypes){
  var User = sequelize.define('user',{
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:true,
      defaultValue:DataTypes.UUIDV1
    },
    name:{
      type:DataTypes.STRING,
      allowNull:true
    },
    age:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    weight:{
      type:DataTypes.INTEGER,
      allowNull:true
    }
  },{
    freezeTableName: true
  });
  return User;
};