var router = require('koa-router')();
// 看/ 路径需要来决定是否引入db
// var db = require('../models/index.js');
var user_controller = require('../controllers/user_controller');


router.get('/', function (ctx, next) {

  //const name = ctx.query;
  console.log(ctx);
  ctx.body = ctx;
  //ctx.body = '11111n'
});
/*router.get('/add', function (ctx, next) {

  //ctx.body = ctx.query.name + '  ' +ctx.query.age;
  var saveUser = {
    name:ctx.query.name,
    age:ctx.query.age,
    height:ctx.query.height,
    weight:ctx.query.weight
  };

  return db.sequelize.transaction(function(t){
    console.log("+++++++++++++++++++");
    return db.User.create(saveUser,{
      transaction:t
    }).then(function(result){
      ctx.body = result;
    }).catch(function(err){
      console.log("发生错误：" + err);
    });
  })

});*/
router.get('/get', user_controller.getUser);
router.get('/register', user_controller.registerUser);
router.get('/add', user_controller.addUser);
router.get('/delete', user_controller.deleteUser);
router.get('/find', user_controller.findUser);
router.get('/update', user_controller.updateUser);

module.exports = router;
