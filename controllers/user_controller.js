// 引入数据库
var db = require('../models/index.js');
//获取用户
exports.getUser = async (ctx, next) => {
  ctx.body = {
    username: 'tom',
    age: 30
  }
}

//用户注册
exports.registerUser = async (ctx, next) => {
  //  书写注册逻辑
  console.log('registerUser', ctx.request.body);
}

//  添加用户

exports.addUser = async (ctx, next) => {
  console.log('数据库即将添加用户', ctx.request.body);
  var saveUser = {
    name:ctx.query.name,
    age:ctx.query.age,
    height:ctx.query.height,
    weight:ctx.query.weight
  };

  return db.sequelize.transaction(function(t){
    console.log("数据库写入用户开始");
    return db.user.create(saveUser,{
      transaction:t
    }).then(function(result){
      ctx.body = result;
      console.log('写入数据库成功');
    }).catch(function(err){
      console.log("发生错误：" + err);
    });
  })
}

//  删除用户
exports.deleteUser = async (ctx, next) => {
  console.log('开始删除');
  let name = ctx.query.name;
   //  通过事务删除
  return db.sequelize.transaction(function(t){
    console.log("开始删除用户");
    return db.user.destroy({'where':{'name':name}})
      .then(function(result){
       ctx.body = result;
       console.log('删除用户成功');
    }).catch(function(err){
      console.log("发生错误：" + err);
    });
  })


   //  正常删除
  /*return db.myUser.destroy({'where':{'name':name}})
    .then(function(result){
      ctx.body = result;
      console.log('删除用户成功');
    }).catch(function(err){
      console.log("发生错误：" + err);
    });*/
};

// 查询操作
exports.findUser = async (ctx, next) => {
  let name = ctx.query.name;

  return db.sequelize.transaction(function(){
    // findOne findAll和 findById
    return db.user.findOne({'where':{name: name}})
      .then(function(result){
          ctx.body = result;
          console.log('显示结果');
          console.log(result);
          if(result == null){
            // 查询失败的话 执行逻辑
            console.log('11111111');
          }
    }).catch(function(err){
          console.log("发生错误：" + err);
          console.log('查询失败');
    });
  });
};

//  更新操作

exports.updateUser = async (ctx, next) => {
  // console.log('deleteUser', ctx.request.body);
  let userInfo = ctx.query.name;

  return db.sequelize.transaction(function(t){
    // 先查询再更新
    /*return db.User.findOne({'where':{'name':userInfo}})
      .then(function(user){
        return db.user.update({'name':userInfo},{'where':{'name':userInfo}})
            .then(function(result){
                ctx.body = result
            }).catch(function(err){
                console.log("发生错误：" + err);
            });
      })*/
    //  直接更新
    return db.user.update({'name':'123123121'},{'where':{'name':userInfo}})
      .then(function(result){
        ctx.body = result
      }).catch(function(err){
        console.log("发生错误：" + err);
      });



  })
};
